// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Rates, contact details, and the page titles/descriptions Google shows.
// Change a number here and it updates everywhere on the site at once.
// ─────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://www.omermaths.com";

export const BUSINESS = {
  name: "Omer Maths Tuition",
  tutor: "Omer",
  email: "hello@omermaths.com",
  phone: "+447932365990",
  whatsapp: "https://wa.me/447932365990?text=Hi%20Omer%2C%20I%27m%20interested%20in%20maths%20tuition",
  photo: "/images/image_01.jpg",
};

// ─── RATES ───────────────────────────────────────────────────────────────
// "standard" = Key Stage 3, GCSE and A-Level.
// "oxbridge" = MAT / TMUA / STEP / Oxbridge interview preparation.
export const CURRENCIES = {
  GBP: { code: "GBP", symbol: "£",  standard: 90,  oxbridge: 150 },
  SGD: { code: "SGD", symbol: "S$", standard: 180, oxbridge: 260 },
};

export const DEFAULT_CURRENCY = "GBP";

// Visitors whose device timezone is in this list see prices in SGD.
// South East Asia only - everywhere else in the world sees GBP.
// To stop showing SGD in a country, delete its timezone(s) from this list.
export const SGD_TIMEZONES = new Set([
  "Asia/Singapore",                                              // Singapore
  "Asia/Kuala_Lumpur", "Asia/Kuching",                           // Malaysia
  "Asia/Bangkok",                                                // Thailand
  "Asia/Jakarta", "Asia/Pontianak", "Asia/Makassar", "Asia/Jayapura", // Indonesia
  "Asia/Manila",                                                 // Philippines
  "Asia/Ho_Chi_Minh", "Asia/Saigon",                             // Vietnam
  "Asia/Phnom_Penh",                                             // Cambodia
  "Asia/Vientiane",                                              // Laos
  "Asia/Yangon", "Asia/Rangoon",                                 // Myanmar
  "Asia/Brunei",                                                 // Brunei
  "Asia/Dili",                                                   // Timor-Leste
]);

export const formatPrice = (currency, tier) => {
  const c = CURRENCIES[currency] || CURRENCIES[DEFAULT_CURRENCY];
  return `${c.symbol}${c[tier]}`;
};

// Replaces {STD} and {OXB} in FAQ answers with the visitor's rates.
export const fillRates = (text, currency) =>
  text
    .replace(/\{STD\}/g, formatPrice(currency, "standard"))
    .replace(/\{OXB\}/g, formatPrice(currency, "oxbridge"));

// ─── PAGES ───────────────────────────────────────────────────────────────
// Each page gets its own real URL, its own tab title, and its own Google
// description. Keep descriptions to roughly 150 characters.
export const ROUTES = [
  {
    id: "home",
    path: "/",
    title: "Omer Maths Tuition | Oxford-Educated Online Maths Tutor",
    description:
      "One-to-one online maths tuition for GCSE, A-Level and Oxbridge admissions, from an Oxford First Class Maths graduate. 10+ years experience. First lesson free.",
  },
  {
    id: "about",
    path: "/about",
    title: "About Omer | Oxford Maths Graduate & Online Tutor",
    description:
      "Oxford First Class Maths graduate with 10+ years and 5,000+ hours of tutoring. Students from St Paul's, Westminster, Eton, Harrow and more. First lesson free.",
  },
  {
    id: "services",
    path: "/services",
    title: "GCSE, A-Level & Oxbridge Maths Tuition | Rates",
    description:
      "Online maths tuition for Key Stage 3, GCSE and A-Level, plus MAT, TMUA, STEP and Oxbridge interview preparation. All major exam boards. First session free.",
  },
  {
    id: "approach",
    path: "/approach",
    title: "My Tutoring Approach | Omer Maths Tuition",
    description:
      "How I teach: confidence first, genuine understanding over memorisation, and exam technique as a skill worth practising. Live interactive whiteboard sessions.",
  },
  {
    id: "reviews",
    path: "/reviews",
    title: "Parent & Student Reviews | Omer Maths Tuition",
    description:
      "Read reviews from parents and students I have tutored for GCSE, A-Level and Oxbridge maths admissions. Every review is from a family I have worked with directly.",
  },
  {
    id: "faq",
    path: "/faq",
    title: "FAQ & Pricing | Omer Maths Tuition",
    description:
      "Common questions about online maths tuition: rates, the free first lesson, exam boards covered, university admissions support, and DBS checks.",
  },
  {
    id: "booking",
    path: "/booking",
    title: "Book a Free First Maths Lesson | Omer Maths Tuition",
    description:
      "Book your free first online maths lesson. Message on WhatsApp or email and I will find a time that works around your schedule, usually replying within hours.",
  },
];

export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]));
export const ROUTE_BY_ID = Object.fromEntries(ROUTES.map((r) => [r.id, r]));
export const HOME_ROUTE = ROUTE_BY_ID.home;
