// ─────────────────────────────────────────────────────────────────────────
// Runs automatically after `npm run build`.
//
// Vite produces a single dist/index.html. Search engines and WhatsApp/iMessage
// link previews read the raw HTML without running JavaScript, so every page
// would otherwise share the home page's title and description. This script
// writes one real HTML file per page with its own title, description and
// preview image, then generates sitemap.xml.
//
// Nothing here needs editing day to day - change wording in src/site.config.js.
// ─────────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { SITE_URL, BUSINESS, ROUTES, CURRENCIES, DEFAULT_CURRENCY, fillRates, NOT_FOUND_ROUTE } from "../src/site.config.js";
import { FAQS, ALL_REVIEWS, POSTS } from "../src/content.js";

const DIST = "dist";
const abs = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;
const OG_IMAGE = `${SITE_URL}${BUSINESS.photo}`;

// Escaping "<" stops any stray markup in the content from closing the script tag.
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).split("<").join("\\u003c")}</script>`;

const gbp = CURRENCIES[DEFAULT_CURRENCY];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#omer`,
  name: BUSINESS.tutor,
  jobTitle: "Mathematics Tutor",
  description:
    "Oxford Mathematics graduate (First Class) with 10+ years and 5,000+ hours tutoring GCSE, A-Level and university admissions maths.",
  image: OG_IMAGE,
  email: `mailto:${BUSINESS.email}`,
  telephone: BUSINESS.phone,
  url: SITE_URL,
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Oxford" },
  knowsAbout: ["GCSE Mathematics", "A-Level Mathematics", "TMUA", "STEP", "Oxbridge admissions"],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description:
    "One-to-one online maths tuition for GCSE, A-Level and university admissions, taught by an Oxford First Class Mathematics graduate.",
  url: SITE_URL,
  image: OG_IMAGE,
  email: `mailto:${BUSINESS.email}`,
  telephone: BUSINESS.phone,
  priceRange: `${gbp.symbol}${gbp.standard}-${gbp.symbol}${gbp.oxbridge}`,
  founder: { "@id": `${SITE_URL}/#omer` },
  areaServed: { "@type": "Place", name: "Worldwide (online)" },
  availableLanguage: "English",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: (ALL_REVIEWS.reduce((s, r) => s + r.stars, 0) / ALL_REVIEWS.length).toFixed(1),
    reviewCount: ALL_REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maths tuition",
    itemListElement: [
      ["GCSE & A-Level Maths Tuition", gbp.standard],
      ["University Admissions Maths Preparation (TMUA, STEP, Oxbridge interviews)", gbp.oxbridge],
    ].map(([name, price]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, serviceType: "Online maths tuition" },
      price: String(price),
      priceCurrency: gbp.code,
      unitText: "hour",
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: fillRates(f.a, DEFAULT_CURRENCY) },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALL_REVIEWS.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#business` },
      author: { "@type": "Person", name: r.author.split(",")[0].trim() },
      reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5 },
      reviewBody: r.text,
    },
  })),
};

/** Marks an article up as a dated, authored piece rather than a generic page. */
const articleSchema = (post, path) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.summary,
  datePublished: post.date,
  dateModified: post.date,
  author: { "@id": `${SITE_URL}/#omer` },
  publisher: { "@id": `${SITE_URL}/#business` },
  mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
  image: OG_IMAGE,
});

const schemasFor = (id) => {
  const base = [personSchema, businessSchema];
  if (id === "faq") return [...base, faqSchema];
  if (id === "reviews") return [...base, reviewSchema];
  if (id.startsWith("post-")) {
    const post = POSTS.find(p => `post-${p.id}` === id);
    const route = ROUTES.find(r => r.id === id);
    if (post && route) return [...base, articleSchema(post, route.path)];
  }
  return base;
};

// ─── Rewrite the head for each route ─────────────────────────────────────
const templatePath = join(DIST, "index.html");
if (!existsSync(templatePath)) {
  console.error(`[build-seo] ${templatePath} not found - run "vite build" first.`);
  process.exit(1);
}
const template = readFileSync(templatePath, "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Replaces the value of a meta/link tag that is already in index.html. */
function setTag(html, matcher, attr, value) {
  const re = new RegExp(`(<(?:meta|link)[^>]*${matcher}[^>]*[ ]${attr}=")[^"]*(")`, "i");
  if (!re.test(html)) {
    console.warn(`[build-seo] warning: no tag matched ${matcher} - meta may be stale`);
    return html;
  }
  return html.replace(re, `$1${esc(value)}$2`);
}

let written = 0;
for (const route of ROUTES) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(route.title)}</title>`);
  html = setTag(html, 'name="description"', "content", route.description);
  html = setTag(html, 'property="og:title"', "content", route.title);
  html = setTag(html, 'property="og:description"', "content", route.description);
  html = setTag(html, 'property="og:url"', "content", abs(route.path));
  html = setTag(html, 'name="twitter:title"', "content", route.title);
  html = setTag(html, 'name="twitter:description"', "content", route.description);
  html = setTag(html, 'rel="canonical"', "href", abs(route.path));

  const ld = schemasFor(route.id).map(jsonLd).join("\n    ");
  html = html.replace("</head>", `  ${ld}\n  </head>`);

  // The filename has to come from the URL, not the route id. Vercel serves
  // "/tmua-tutor" from "tmua-tutor.html"; naming the file after the id would
  // publish it at "/tmua" instead and the real URL would 404.
  const file = route.path === "/" ? "index.html" : `${route.path.replace(/^\//, "")}.html`;
  const dir = dirname(join(DIST, file));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(DIST, file), html);
  written++;
}

// ─── 404.html ────────────────────────────────────────────────────────────
// Vercel serves this automatically, with a 404 status, for any URL that does
// not match a real page. Marked noindex so the error page never gets indexed.
{
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(NOT_FOUND_ROUTE.title)}</title>`);
  html = setTag(html, 'name="description"', "content", NOT_FOUND_ROUTE.description);
  html = setTag(html, 'property="og:title"', "content", NOT_FOUND_ROUTE.title);
  html = setTag(html, 'property="og:description"', "content", NOT_FOUND_ROUTE.description);
  html = setTag(html, 'name="robots"', "content", "noindex, follow");
  // An error page must not claim to be the canonical version of anything.
  html = html.replace(/\s*<link rel="canonical"[^>]*>/i, "");
  writeFileSync(join(DIST, "404.html"), html);
  console.log("[build-seo] wrote 404.html");
}

// ─── sitemap.xml ─────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>
    <loc>${abs(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.id === "home" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

console.log(`[build-seo] wrote ${written} pages + sitemap.xml (${ROUTES.length} URLs)`);
