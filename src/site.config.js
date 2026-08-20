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
// "oxbridge" = university admissions work: TMUA, STEP, Oxbridge interviews,
//              and SAT / ACT maths for US applications.
export const CURRENCIES = {
  GBP: { code: "GBP", symbol: "£",  standard: 90,  oxbridge: 140 },
  SGD: { code: "SGD", symbol: "S$", standard: 180, oxbridge: 240 },
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
      "Online maths tuition for Key Stage 3, GCSE and A-Level, plus TMUA, STEP and Oxbridge interview preparation. All major exam boards. First session free.",
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

  // ─── Specialist landing pages ──────────────────────────────────────────
  // These are deliberately kept out of the top navigation. They exist so that
  // someone searching for one specific thing lands on a page about exactly
  // that, rather than on a general services page.
  {
    id: "tmua",
    path: "/tmua-tutor",
    title: "TMUA Tutor | Oxford & Imperial Maths Admissions Prep",
    description:
      "One-to-one TMUA preparation from an Oxford First Class Maths graduate. Required for Oxford Maths and Computer Science, and for Imperial Maths and Computing.",
  },
  {
    id: "interview",
    path: "/oxbridge-maths-interview",
    title: "Oxbridge Maths Interview Preparation | Oxford Graduate",
    description:
      "Oxford and Cambridge maths interview coaching from a First Class Oxford Mathematics graduate. Real past interview questions and full mock interviews.",
  },
  {
    id: "step",
    path: "/step-tutor",
    title: "STEP Tutor | Cambridge Maths Admissions Preparation",
    description:
      "One-to-one STEP preparation for STEP 2 and STEP 3, used in almost all Cambridge Maths offers. Taught by an Oxford First Class Mathematics graduate.",
  },
  {
    id: "ukmt",
    path: "/ukmt-olympiad-tutor",
    title: "UKMT & Maths Olympiad Tutor | Challenge and BMO Prep",
    description:
      "One-to-one preparation for the UKMT Maths Challenges, Kangaroo and Olympiad rounds, and the Mathematical Olympiad for Girls, from an Oxford Maths graduate.",
  },
  {
    id: "satact",
    path: "/sat-act-maths-tutor",
    title: "SAT & ACT Maths Tutor | US University Admissions",
    description:
      "One-to-one preparation for the SAT and ACT maths sections, for students applying to US universities. Taught by an Oxford First Class Mathematics graduate.",
  },
  {
    id: "london",
    path: "/london-maths-tutor",
    title: "London Maths Tutor | Online GCSE & A-Level Tuition",
    description:
      "Online maths tuition for London families. Oxford First Class Maths graduate tutoring students at St Paul's, Westminster, Highgate, UCS, Latymer and more.",
  },
];

export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]));
export const ROUTE_BY_ID = Object.fromEntries(ROUTES.map((r) => [r.id, r]));
export const HOME_ROUTE = ROUTE_BY_ID.home;
