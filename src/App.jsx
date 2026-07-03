import { useState, useEffect, useRef } from "react";

const PHOTO_SRC = "/images/image_01.jpg";
const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);
const WHATSAPP = "https://wa.me/447932365990";
const EMAIL = "mailto:hello@omermaths.com";
const FORMSPREE_URL = "https://formspree.io/f/mnjrrqba";
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS_SHORT = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const TIMES = ["9:00 AM","10:00 AM","11:00 AM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"];

const SCHOOLS = [
  { name:"St Paul's School",            domain:"stpaulsschool.org.uk",    logoUrl:"/images/image_02.png" },
  { name:"Westminster School",          domain:"westminster.org.uk",       logoUrl:"/images/image_03.png" },
  { name:"King's College School", domain:"kcs.org.uk", logoUrl:"/images/image_04.png" },
  { name:"City of London School",       domain:"cityoflondonschool.org.uk",    logoUrl:"/images/image_05.png" },
  { name:"Highgate School", domain:"highgateschool.org.uk", logoUrl:"/images/image_06.png" },
  { name:"University College School", domain:"ucs.org.uk", logoUrl:"/images/image_07.png" },
  { name:"North London Collegiate",     domain:"nlcs.org.uk",                  logoUrl:"/images/image_08.png" },
  { name:"Henrietta Barnett School", domain:"hbs.barnet.sch.uk", logoUrl:"/images/image_09.png" },
  { name:"Latymer Upper School",        domain:"latymer-upper.org",            logoUrl:"/images/image_10.png" },
  { name:"Dulwich College",             domain:"dulwich.org.uk",               logoUrl:"/images/image_11.png" },
  { name:"Emanuel School",              domain:"emanuel.org.uk",               logoUrl:"/images/image_12.png" },
  { name:"Wimbledon High School",       domain:"wimbledonhigh.gdst.net",       logoUrl:"/images/image_13.png" },
  { name:"Hampton School",              domain:"hamptonschool.org.uk",         logoUrl:"/images/image_14.png" },
  { name:"Tanglin Trust School", domain:"tts.edu.sg", logoUrl:"/images/image_15.png" },
  { name:"Overseas Family School",      domain:"ofs.edu.sg",                   logoUrl:"/images/image_16.png" },
  { name:"Harrow School",               domain:"harrowschool.org.uk",          logoUrl:"/images/image_17.png" },
  { name:"Eton College",                domain:"etoncollege.com",              logoUrl:"/images/image_18.png" },
  { name:"Channing School",             domain:"channing.co.uk",               logoUrl:"/images/image_19.png" },
  { name:"Aldenham School",              domain:"aldenham.com",                logoUrl:"/images/image_20.png" },
  { name:"Haberdashers School",          domain:"habsboys.org.uk",              logoUrl:"/images/image_21.png" },
];

const ALL_REVIEWS = [
  { id:4,  stars:5, text:"Omer completely changed the way I felt about A-Level Maths. Before starting tuition, I was struggling badly with confidence and found certain topics overwhelming. Thanks to Omer's patient teaching style and clear explanations, everything gradually started to make sense. I ended up improving far beyond my predicted grade and achieved an A in the end. What really stood out was how supportive and encouraging he was throughout the whole process, especially during exam season. I always felt comfortable asking questions and never felt judged for getting things wrong. I would highly recommend Omer to anyone looking for a knowledgeable and approachable tutor.", author:"Tom, A-Level student", date:"Apr 2026" },
  { id:1,  stars:5, text:"Omer has been an outstanding GCSE Maths tutor for our son. He combines real mastery of the subject with exceptional patience and clarity, and he is equally strong at teaching exam technique - identifying where marks are lost and showing precisely how to secure them. Under his guidance, our son's confidence and performance have grown significantly, and he now approaches even difficult topics with real assurance. Omer is reliable, supportive, and highly effective. I recommend him without hesitation.", author:"Peter, Parent of GCSE student", date:"Feb 2026" },
  { id:3,  stars:5, text:"Omer has been an excellent tutor from the very beginning. Within just a few months we could already see a huge improvement in both grades and confidence. He explains things clearly, is always friendly and approachable, and really knows how to make difficult topics easier to understand. Maths has become much more enjoyable thanks to his support. I never thought I would ever say this, but I've now decided to take it for A-Level!", author:"Oli, GCSE student", date:"Nov 2025" },
  { id:2,  stars:5, text:"Thanks so much for the Oxford Interview Prep sessions. Delighted to have been accepted to study Maths, and genuinely don't think I would have gotten my offer without your support.\n\nMy confidence has hugely increased throughout our sessions, and being able to learn through our mock interviews meant that I was so much sharper for the real thing.\n\nI actually ended up being given a similar question to one of those we did together, which of course helped too!\n\nThanks for everything Omer - really appreciate your guidance and advice. I'm lucky to have found you as a tutor.", author:"Matt, Oxford Admissions", date:"Jan 2025" },
  { id:6,  stars:5, text:"We are absolutely delighted to have found Omer. He has been a fantastic tutor for our daughter and has completely transformed her attitude towards Maths. His calm, patient approach and ability to tailor lessons to her individual needs have made a huge difference to both her confidence and grades. Omer is reliable, professional, and genuinely invested in helping his students succeed. We would highly recommend him.", author:"Sarah, Parent of A-Level student", date:"Jun 2024" },
  { id:5,  stars:5, text:"I can't recommend Omer highly enough. My son was really struggling with GCSE Maths and had lost confidence in his own ability. After only a short time working with Omer, his grades started improving and, more importantly, his attitude towards maths became much more positive. Omer has a real talent for identifying where students are struggling and adapting his teaching style to suit them individually. He's an excellent tutor and someone young people feel comfortable working with.", author:"Grace, Parent of GCSE student", date:"Mar 2024" },
  { id:7,  stars:5, text:"I highly recommend Omer. He has been tutoring my son for over a year and, along with his confidence, has improved his grades considerably. My son never complains about doing his sessions with Omer and likes him very much. Omer is reliable and flexible when asked. It's always a pleasure to interact with Omer.", author:"Anna, Parent of GCSE student", date:"Sep 2023" },
  { id:8,  stars:5, text:"Omer is a first class tutor with a calm, thoughtful and structured approach to the work he does with his students. Our daughter really benefited from his tuition which greatly assisted her in achieving her place at university to read Maths. In addition, he made lessons fun and inspiring and developed a great rapport with her during their time working together. In short, we couldn't recommend him highly enough!", author:"Estelle, Parent of A-Level student", date:"Sep 2023" },
  { id:9,  stars:5, text:"Omer has been helping me prepare for a professional exam as an adult learner, and I've found him to be patient, organised, and extremely knowledgeable. He took the time to understand the exam requirements before our first lesson and worked with me to create a clear study plan. He's also been very accommodating around my work schedule, which I really appreciate.", author:"Nancy, Adult Learner", date:"Aug 2022" },
  { id:10, stars:5, text:"He explains things well and clearly, and is very adaptable in his teaching. Exactly the kind of tutor you hope to find.", author:"Aasiya, A-Level student", date:"Apr 2022" },
  { id:11, stars:5, text:"Omer was a huge support in the lead up to my A-Level Maths exams. He helped me realise I understood far more than I thought and gave me the confidence to stay calm under pressure. His explanations were always clear and he never rushed through anything until I fully understood it. Thanks to his help, I achieved the grades I needed for university. I've already recommended him to several friends.", author:"Olivia, A-Level student", date:"Oct 2021" },
];

const FAQS = [
  { q:"Is the first lesson really free?", a:"Yes, completely. I suggest your child picks a topic they've been struggling with, and we work through it properly together - so you can see exactly how I teach, and your child gets something useful out of it regardless. If it's working well, we can talk about going forward. There's no pressure either way." },
  { q:"What results have your students achieved?", a:"My students consistently achieve grade 8 or 9 at GCSE, and A or A* at A-level. I'm proud of that record - though it also reflects the students themselves, who consistently put in the work between sessions." },
  { q:"Do you help with university admissions?", a:"Yes - this is something I'm particularly well-placed to support, having been through the Oxford admissions process myself. I offer targeted preparation for MAT, TMUA, and STEP, as well as Oxbridge interview coaching. These sessions focus on the kind of mathematical thinking and problem-solving these processes test, which goes well beyond the standard A-level curriculum." },
  { q:"What do sessions look like?", a:"For the trial lesson, I suggest your child picks a topic they've been finding difficult - we focus on that together, and they should feel noticeably more confident with it by the end. For regular sessions, we typically start with a check-in on what's been covered at school and where things feel shaky, then work through it together. I use an iPad to write notes that we can both see in real time. I also set a small amount of follow-up work to consolidate things between sessions." },
  { q:"Which exam boards do you cover?", a:"I cover all major UK exam boards - AQA, Edexcel, OCR, and WJEC - at both GCSE and A-level. Teaching is always aligned specifically to the mark scheme and syllabus your child is working to." },
  { q:"What are your rates?", a:"GCSE and A-Level sessions are £100 per hour. University admissions sessions (MAT, TMUA, STEP, Oxbridge interviews) are £150 per hour. For GCSE and A-Level, the first session is always free. I invoice monthly, and payment is by bank transfer. I ask for 24 hours' notice if you need to cancel or rearrange." },
];

// ─── Shared CSS ────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  :root {
    --navy:#1a2540; --navy2:#243058; --gold:#c9943a; --gold2:#f0c97a;
    --cream:#fdf8f0; --cream2:#f5ede0; --sage:#5c7c6a; --sage2:#e4ede8;
    --text:#2a2a2a; --muted:#6b6b6b; --white:#ffffff;
    --radius:12px; --shadow:0 4px 32px rgba(23,32,56,0.10); --shadow-lg:0 12px 48px rgba(23,32,56,0.15);
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:auto;}
  body{font-family:'Lora',Georgia,serif;background:#fff;color:var(--text);line-height:1.7;}
  h1,h2,h3,h4{font-family:'Playfair Display',Georgia,serif;line-height:1.25;}
  p,li,label,input,textarea,select,button,a{font-family:'DM Sans',sans-serif;}

  /* NAV */
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(26,37,64,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);display:flex;align-items:center;justify-content:space-between;padding:0 5vw;height:68px;border-bottom:1px solid rgba(201,148,58,0.28);transition:box-shadow 0.3s;}
  .nav.scrolled{box-shadow:0 4px 24px rgba(0,0,0,0.25);}
  .nav-logo{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:var(--gold2);cursor:pointer;}
  .nav-logo span{color:rgba(255,255,255,0.85);font-weight:400;font-style:italic;}
  .nav-links{display:flex;gap:0.25rem;list-style:none;}
  .nav-btn{background:none;border:none;color:rgba(255,255,255,0.78);font-size:0.87rem;font-weight:500;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;padding:0.45rem 0.85rem;border-radius:6px;transition:color 0.2s,background 0.2s;}
  .nav-btn:hover{color:var(--gold2);background:rgba(255,255,255,0.06);}
  .nav-btn.active{color:var(--gold2);}
  .nav-cta{background:var(--gold);color:var(--white)!important;padding:0.45rem 1.15rem;border-radius:6px;border:none;font-size:0.87rem;font-weight:500;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;transition:background 0.2s,color 0.2s;}
  .nav-cta:hover{background:var(--gold2);color:var(--navy)!important;}
  .hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:0.5rem;}
  .hamburger span{display:block;width:24px;height:2px;background:rgba(255,255,255,0.85);border-radius:2px;transition:all 0.2s;}
  .mobile-menu{display:none;position:fixed;top:68px;left:0;right:0;background:rgba(26,37,64,0.98);backdrop-filter:blur(16px);z-index:99;padding:1rem 5vw 1.5rem;border-bottom:1px solid rgba(201,148,58,0.2);}
  .mobile-menu.open{display:block;}
  .mobile-menu-overlay{display:none;position:fixed;inset:0;top:68px;z-index:98;background:rgba(0,0,0,0.3);}
  .mobile-menu-overlay.open{display:block;}
  .mobile-menu ul{list-style:none;display:flex;flex-direction:column;gap:0.25rem;}
  .mobile-menu .nav-btn{font-size:1rem;padding:0.75rem 1rem;width:100%;text-align:left;border-radius:8px;}
  .mobile-cta{margin-top:0.75rem;width:100%;display:block;text-align:center;background:var(--gold);color:white;border:none;padding:0.85rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;}
  @media(max-width:900px){.nav-links{display:none;}.hamburger{display:flex;}.nav-cta{display:none;}}

  /* MOBILE QUICK LINKS */
  .mobile-quick-links{display:none;padding:2.5rem 5vw;background:var(--cream2);text-align:center;}
  .mobile-quick-links h3{font-size:1.15rem;color:var(--navy);margin-bottom:0.35rem;font-family:'Playfair Display',serif;}
  .mobile-quick-links p{font-size:0.88rem;color:var(--muted);margin-bottom:1.3rem;}
  .mobile-quick-links-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;}
  .mobile-quick-link{display:flex;align-items:center;justify-content:center;gap:0.5rem;background:var(--white);border:1.5px solid rgba(23,32,56,0.08);border-radius:10px;padding:0.85rem 0.75rem;font-size:0.88rem;font-weight:500;color:var(--navy);cursor:pointer;transition:all 0.15s;box-shadow:0 1px 4px rgba(23,32,56,0.06);}
  .mobile-quick-link:hover{border-color:var(--gold);color:var(--gold);}
  .mobile-quick-link.mql-cta{grid-column:1/-1;background:var(--gold);color:var(--white);border-color:var(--gold);font-weight:600;}
  .mobile-quick-link.mql-cta:hover{background:var(--gold2);color:var(--navy);}
  @media(max-width:900px){.mobile-quick-links{display:block;}}

  /* PAGE WRAPPER */
  .page{padding-top:68px;min-height:100vh;}

  /* BUTTONS */
  .btn-row{display:flex;gap:0.9rem;flex-wrap:wrap;}
  .btn-row > *{flex:1;min-width:160px;justify-content:center;}
  .btn-primary{background:var(--gold);color:var(--white);padding:0.88rem 2.1rem;border-radius:8px;font-size:1rem;font-weight:500;border:none;cursor:pointer;transition:background 0.2s,transform 0.15s;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:0.55rem;min-width:210px;}
  .btn-primary:hover{background:var(--gold2);color:var(--navy);transform:translateY(-1px);}
  .btn-wa{background:var(--gold);color:var(--white);}
  .btn-wa:hover{background:var(--gold2);color:var(--navy);}
  .hero-btns .btn-primary, .hero-btns .btn-ghost, .hero-btns .btn-email{min-width:240px;justify-content:center;}
  .btn-ghost{background:transparent;color:rgba(255,255,255,0.85);padding:0.88rem 2.1rem;border-radius:8px;font-size:1rem;font-weight:500;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;transition:border-color 0.2s,color 0.2s;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;min-width:210px;}
  .btn-ghost:hover{border-color:var(--gold2);color:var(--gold2);}
  .btn-email{background:transparent;color:rgba(255,255,255,0.85);padding:0.88rem 2.1rem;border-radius:8px;font-size:1rem;font-weight:500;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;transition:border-color 0.2s,color 0.2s;display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;text-decoration:none;min-width:210px;}
  .btn-email:hover{border-color:var(--gold2);color:var(--gold2);}
  .btn-email-dark{background:transparent;color:var(--navy);padding:0.88rem 2.1rem;border-radius:8px;font-size:1rem;font-weight:500;border:1.5px solid rgba(23,32,56,0.25);cursor:pointer;transition:all 0.2s;display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;text-decoration:none;min-width:210px;}
  .btn-email-dark:hover{border-color:var(--gold);color:var(--gold);}
  .btn-outline-gold{background:transparent;color:var(--gold2);padding:0.88rem 2.1rem;border-radius:8px;font-size:1rem;font-weight:500;border:1.5px solid rgba(201,148,58,0.5);cursor:pointer;transition:all 0.2s;display:inline-block;text-decoration:none;}
  .btn-outline-gold:hover{background:rgba(201,148,58,0.15);border-color:var(--gold2);}
  .btn-sm{padding:0.6rem 1.4rem;font-size:0.9rem;}

  /* SHARED SECTION */
  .section{padding:72px 5vw;}
  .section-alt{background:var(--cream2);}
  .section-dark{background:var(--navy);}
  .section-sage{background:var(--sage2);}
  .section-oxbridge{background:var(--cream2);}
  .section-label{font-size:0.76rem;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:0.75rem;display:block;}
  .section-title{font-size:clamp(1.85rem,3.8vw,2.8rem);margin-bottom:1rem;color:var(--navy);}
  .section-dark .section-title{color:var(--white);}
  .section-lead{font-size:1.05rem;color:var(--muted);max-width:600px;line-height:1.85;}
  .section-dark .section-lead{color:rgba(255,255,255,0.62);}
  .divider{width:44px;height:3px;background:var(--gold);margin-bottom:1.5rem;border-radius:2px;}

  /* PAGE HERO (inner pages) */
  .page-hero{background:linear-gradient(160deg,#1a2540 0%,#243058 50%,#1e3060 100%);padding:72px 5vw 64px;position:relative;overflow:hidden;}
  .page-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 50% at 50% 120%,rgba(201,148,58,0.15),transparent);}
  .page-hero-dots{display:none;}
  .page-hero-inner{position:relative;max-width:800px;margin:0 auto;text-align:center;}
  .page-hero h1{font-size:clamp(2rem,4.5vw,3.4rem);color:var(--white);margin-bottom:0.6rem;}
  .page-hero h1 em{color:var(--gold2);font-style:italic;}
  .page-hero p{font-size:1.05rem;color:rgba(255,255,255,0.68);line-height:1.8;max-width:560px;margin:0 auto;}

  /* TRUST BAR */
  .trust-bar{background:var(--sage2);padding:1.3rem 5vw;display:flex;justify-content:center;align-items:center;gap:3rem;flex-wrap:wrap;border-bottom:1px solid rgba(92,124,106,0.2);}
  .trust-item{display:flex;align-items:center;gap:0.6rem;color:var(--navy);font-size:0.9rem;white-space:nowrap;font-weight:500;}

  /* ── HOME PAGE ── */
  .hero-full{background:linear-gradient(160deg,#1a2540 0%,#243058 50%,#1e3060 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:80px 5vw 60px;position:relative;overflow:hidden;text-align:center;}
  .hero-full::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 50% at 50% 120%,rgba(201,148,58,0.18),transparent);}
  .hero-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:60px 60px;}
  .hero-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(201,148,58,0.12) 1px,transparent 1px);background-size:36px 36px;}
  .hero-free-pill{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(92,124,106,0.25);border:1px solid rgba(92,124,106,0.5);color:#9fd4b0;font-size:0.8rem;font-weight:500;padding:0.38rem 1rem;border-radius:100px;margin-bottom:0.75rem;position:relative;}
  .hero-badge{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(201,148,58,0.15);border:1px solid rgba(201,148,58,0.35);color:var(--gold2);font-size:0.8rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;padding:0.38rem 1rem;border-radius:100px;margin-bottom:1.6rem;position:relative;}
  .hero-full h1{font-size:clamp(2.6rem,5.5vw,4.6rem);color:var(--white);max-width:860px;position:relative;margin-bottom:0.45em;letter-spacing:-0.02em;line-height:1.15;}
  .hero-full h1 em{color:var(--gold2);font-style:italic;white-space:nowrap;}
  .hero-sub{font-size:clamp(1rem,2vw,1.18rem);color:rgba(255,255,255,0.68);max-width:720px;margin:0 auto 2.5rem;position:relative;line-height:1.8;}
  .hero-btns{display:flex;gap:1rem;justify-content:center;position:relative;flex-wrap:wrap;}
  .hero-btns > *{flex:1;max-width:320px;min-width:260px;text-align:center;justify-content:center;white-space:nowrap;}
  @media(max-width:580px){.hero-btns > *{flex:unset;width:100%;max-width:340px;white-space:normal;}}
  .hero-stats{display:flex;gap:0;margin-top:2.5rem;position:relative;flex-wrap:wrap;justify-content:center;background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:1.5rem 3rem;}
  .hero-stat{text-align:center;padding:0 2rem;}
  .hero-stat+.hero-stat{border-left:1px solid rgba(255,255,255,0.12);}
  .hero-stat-num{font-family:'Playfair Display',serif;font-size:2.6rem;font-weight:700;color:var(--gold2);display:block;line-height:1;}
  .hero-stat-label{font-size:0.78rem;color:rgba(255,255,255,0.5);letter-spacing:0.06em;text-transform:uppercase;margin-top:0.4rem;}
  @media(max-width:600px){.hero-stats{padding:1.2rem 1rem;gap:0;}.hero-stat{padding:0 1.2rem;}.hero-stat-num{font-size:2rem;}}

  /* HOME TEASERS */
  .home-teasers{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
  .teaser-card{background:var(--white);border-radius:var(--radius);padding:2rem;box-shadow:var(--shadow);border:1px solid rgba(23,32,56,0.07);cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;position:relative;overflow:hidden;}
  .teaser-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);}
  .teaser-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);}
  .teaser-icon{font-size:2rem;margin-bottom:1rem;}
  .teaser-card h3{font-size:1.15rem;color:var(--navy);margin-bottom:0.5rem;}
  .teaser-card p{font-size:0.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.2rem;}
  .teaser-link{font-size:0.88rem;font-weight:600;color:var(--gold);text-decoration:none;}
  .teaser-link:hover{color:var(--navy);}
  @media(max-width:800px){.home-teasers{grid-template-columns:1fr;}}

  /* ABOUT */
  .about-grid{max-width:1100px;margin:0 auto;display:flow-root;}
  .about-photo-wrap{float:left;width:38%;margin-right:5rem;margin-bottom:5rem;position:relative;}
  .about-photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:center top;border-radius:20px;display:block;}
  .about-photo-placeholder{width:100%;aspect-ratio:3/4;background:linear-gradient(150deg,var(--navy2) 0%,#2a4a6b 50%,var(--sage) 100%);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:6rem;}
  .about-bullet-card{position:absolute;bottom:-4rem;right:-1.5rem;background:var(--white);border-radius:14px;padding:1.1rem 1.4rem;box-shadow:var(--shadow-lg);border:1px solid rgba(23,32,56,0.08);display:flex;flex-direction:column;gap:0.65rem;}
  .about-bullet-item{display:flex;align-items:center;gap:0.65rem;font-size:0.85rem;font-weight:500;color:var(--navy);white-space:nowrap;}
  .about-bullet-item span:first-child{font-size:1rem;}
  .about-float-card2{position:absolute;top:-1.4rem;left:-1.4rem;background:var(--navy);color:white;padding:0.9rem 1.2rem;border-radius:12px;box-shadow:var(--shadow-lg);border:1px solid rgba(201,148,58,0.3);}
  .afc2-top{font-size:0.72rem;color:var(--gold2);margin-bottom:0.2rem;}
  .afc2-val{font-family:'Playfair Display',serif;font-size:1.1rem;color:white;font-weight:700;line-height:1.3;}
  .about-quals{display:flex;flex-wrap:wrap;gap:0.55rem;margin:1.4rem 0;}
  .qual-chip{background:var(--sage2);color:var(--sage);font-size:0.81rem;font-weight:500;padding:0.35rem 0.85rem;border-radius:100px;border:1px solid rgba(92,124,106,0.3);}
  .qual-chip-gold{background:rgba(201,148,58,0.12);color:var(--gold);font-size:0.81rem;font-weight:600;padding:0.35rem 0.85rem;border-radius:100px;border:1px solid rgba(201,148,58,0.3);}
  .about-body p{color:var(--muted);margin-bottom:1rem;font-size:1.02rem;line-height:1.85;overflow:hidden;}
  .about-body p strong{color:var(--text);}
  .about-body blockquote{border-left:3px solid var(--gold);padding-left:1.2rem;margin:1.5rem 0;font-family:'Lora',serif;font-style:italic;color:var(--text);font-size:1.05rem;line-height:1.75;}
  .result-banner{background:linear-gradient(135deg,var(--navy),var(--navy2));border-radius:12px;padding:1.2rem 1.5rem;margin:1.5rem 0;display:flex;align-items:flex-start;gap:1rem;}
  .rb-icon{font-size:1.6rem;flex-shrink:0;margin-top:0.1rem;}
  .rb-text{font-size:0.92rem;color:rgba(255,255,255,0.85);line-height:1.65;}
  .rb-text strong{color:var(--gold2);}
  @media(max-width:900px){
    .about-photo-wrap{float:none;width:100%;margin-right:0;margin-bottom:2rem;}
    .about-photo-wrap .about-bullet-card{bottom:-2rem;right:0;}
    .about-body{margin-top:2rem;}
  }
  @media(max-width:700px){
    .services-grid{grid-template-columns:1fr;}
    .home-teasers{grid-template-columns:1fr;}
    .hero-stats{gap:2rem;}
    .trust-bar{gap:1.2rem;}
    .btn-row{flex-direction:column;}
    .btn-row > *{min-width:unset;width:100%;}
    .schools-grid{grid-template-columns:repeat(2,1fr);}
  }

  /* SCHOOLS */
  .schools-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-top:1.8rem;}
  .school-card{background:var(--white);border:1.5px solid rgba(23,32,56,0.08);border-radius:12px;padding:1.2rem 1rem;display:flex;flex-direction:column;align-items:center;gap:0.65rem;box-shadow:0 2px 8px rgba(23,32,56,0.06);transition:all 0.2s;text-align:center;}
  .school-card:hover{border-color:rgba(201,148,58,0.4);transform:translateY(-3px);box-shadow:0 8px 24px rgba(23,32,56,0.12),0 0 0 1px rgba(201,148,58,0.15);}
  .school-logo-lg{width:48px;height:48px;object-fit:contain;border-radius:6px;flex-shrink:0;}
  .school-logo-fallback{width:48px;height:48px;background:var(--navy2);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:white;font-family:'Playfair Display',serif;font-weight:700;flex-shrink:0;}
  .school-name{font-size:0.78rem;font-weight:500;color:var(--navy);line-height:1.35;}

  /* SERVICES */
  .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:1100px;margin:2.5rem auto 0;}
  @media(max-width:700px){.services-grid{grid-template-columns:1fr;}.service-card{padding:1.5rem;}}
  .service-card{background:var(--white);border-radius:var(--radius);padding:2rem;box-shadow:var(--shadow);border:1px solid rgba(23,32,56,0.07);transition:transform 0.2s,box-shadow 0.2s;position:relative;overflow:hidden;display:flex;flex-direction:column;}
  .service-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);}
  .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);}
  .service-card.card-oxbridge::before{background:linear-gradient(90deg,var(--gold),#8b5cf6);}
  .service-icon{width:50px;height:50px;background:var(--sage2);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:1.2rem;}
  .service-card.card-oxbridge .service-icon{background:rgba(139,92,246,0.1);}
  .service-card h3{font-size:1.2rem;color:var(--navy);margin-bottom:0.5rem;}
  .service-card p{font-size:0.92rem;color:var(--muted);line-height:1.75;flex:1 1 auto;}
  .service-tag{display:inline-block;margin-top:1rem;background:var(--cream2);color:var(--sage);font-size:0.78rem;font-weight:500;padding:0.28rem 0.75rem;border-radius:100px;}
  .service-tag-purple{display:inline-block;margin-top:1rem;background:rgba(139,92,246,0.1);color:#7c3aed;font-size:0.78rem;font-weight:500;padding:0.28rem 0.75rem;border-radius:100px;}
  .service-price{margin-top:1.3rem;padding-top:1rem;border-top:1px solid rgba(23,32,56,0.07);font-size:1.08rem;font-weight:600;color:var(--navy);display:flex;align-items:baseline;gap:0.4rem;flex-wrap:wrap;}
  .service-price .rate{font-size:1.3rem;color:var(--gold);}
  .service-price .per{font-size:0.8rem;font-weight:400;color:var(--muted);}
  .free-lesson-note{font-size:0.78rem;color:var(--sage);margin-top:0.35rem;font-weight:500;}

  /* UNIVERSITY */
  .uni-hero-row{display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:start;margin-bottom:3rem;}
  .uni-intro p{font-size:1.02rem;color:var(--muted);line-height:1.85;margin-bottom:1rem;}
  .uni-intro p strong{color:var(--navy);}
  .uni-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:0.9rem;}
  .uni-card{background:white;border:1px solid rgba(23,32,56,0.08);border-radius:12px;padding:1rem 1.1rem;transition:background 0.2s,transform 0.2s;box-shadow:0 1px 4px rgba(23,32,56,0.06);}
  .uni-card:hover{background:var(--sage2);transform:translateY(-2px);}
  .uni-card-icon{font-size:1.4rem;margin-bottom:0.3rem;}
  .uni-card h4{font-size:0.95rem;color:var(--navy);margin-bottom:0.3rem;font-weight:600;}
  .uni-card p{font-size:0.82rem;color:var(--muted);line-height:1.65;margin:0;}
  .oxbridge-banner{margin-top:2.5rem;background:var(--navy);border-radius:18px;padding:2rem 2.5rem;display:flex;align-items:center;gap:2.5rem;overflow:hidden;}
  .oxbridge-banner-body{flex:1;}
  .oxbridge-banner-body h4{font-size:1.25rem;color:var(--gold2);margin-bottom:0.6rem;font-family:'Playfair Display',serif;font-weight:600;}
  .oxbridge-banner-body p{font-size:0.92rem;color:rgba(255,255,255,0.72);line-height:1.75;margin:0 0 1.2rem;}
  .oxbridge-banner-photo{width:130px;height:130px;border-radius:50%;object-fit:cover;border:3px solid rgba(201,148,58,0.45);flex-shrink:0;}
  .oxbridge-price-note{display:inline-block;font-size:0.85rem;color:rgba(255,255,255,0.55);margin-left:1rem;}
  @media(max-width:900px){.uni-hero-row{grid-template-columns:1fr;gap:2.5rem;}.uni-cards{grid-template-columns:1fr;}.oxbridge-banner{flex-direction:column;text-align:center;padding:1.5rem;}.oxbridge-banner-photo{display:none;}}

  /* APPROACH */
  .approach-cols{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;max-width:1100px;margin:3rem auto 0;}
  .approach-intro p{font-size:1.02rem;color:var(--muted);line-height:1.85;margin-bottom:1rem;}
  .approach-intro p strong{color:var(--text);}
  .approach-items{display:flex;flex-direction:column;gap:1.8rem;}
  .approach-item-row{display:flex;gap:1.4rem;align-items:flex-start;background:var(--white);border-radius:var(--radius);padding:1.8rem;box-shadow:var(--shadow);border:1px solid rgba(23,32,56,0.06);border-left:4px solid var(--gold);}
  .approach-num-badge{width:44px;height:44px;background:var(--navy);color:var(--gold2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;flex-shrink:0;line-height:1;padding-bottom:5px;box-shadow:0 0 0 3px var(--gold);}
  .approach-item-row h4{font-size:1rem;color:var(--navy);margin-bottom:0.3rem;}
  .approach-item-row p{font-size:0.88rem;color:var(--muted);line-height:1.7;}
  .online-callout{background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);border-radius:20px;padding:3rem;max-width:1100px;margin:3rem auto 0;display:grid;grid-template-columns:1fr auto;gap:2rem;align-items:center;}
  .online-callout h3{font-size:1.5rem;color:var(--white);margin-bottom:0.6rem;}
  .online-callout p{font-size:0.95rem;color:rgba(255,255,255,0.65);line-height:1.75;}
  .online-features{display:flex;flex-direction:column;gap:0.6rem;margin-top:1.2rem;}
  .online-feature{display:flex;align-items:center;gap:0.6rem;color:rgba(255,255,255,0.8);font-size:0.88rem;}
  .online-feature::before{content:'✓';color:var(--gold2);font-weight:700;}
  @media(max-width:900px){.approach-cols{grid-template-columns:1fr;gap:2.5rem;}.online-callout{grid-template-columns:1fr;}}

  /* REVIEWS CAROUSEL */
  .reviews-carousel{display:flex;align-items:stretch;gap:1.5rem;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:1.5rem;max-width:1100px;margin:0 auto;-ms-overflow-style:none;scrollbar-width:none;}
  .reviews-carousel::-webkit-scrollbar{display:none;}
  .reviews-carousel .review-card{flex:0 0 calc((100% - 3rem) / 3);scroll-snap-align:start;}
  .carousel-dots{display:flex;justify-content:center;align-items:center;height:16px;margin-top:1rem;}
  .carousel-dot{border-radius:50%;transition:width 0.3s cubic-bezier(0.4,0,0.2,1),height 0.3s cubic-bezier(0.4,0,0.2,1),background 0.3s ease,margin 0.3s ease;flex-shrink:0;}
  .carousel-dot-active{width:9px;height:9px;background:var(--gold);margin:0 3px;}
  .carousel-dot-full{width:7px;height:7px;background:rgba(23,32,56,0.35);margin:0 3px;}
  .carousel-dot-small{width:5px;height:5px;background:rgba(23,32,56,0.22);margin:0 3px;}
  .carousel-dot-tiny{width:3px;height:3px;background:rgba(23,32,56,0.15);margin:0 3px;}
  .carousel-dot-hidden{width:0;height:0;background:transparent;margin:0;overflow:hidden;}
  .scroll-arrow{width:40px;height:40px;border-radius:50%;background:var(--white);border:1.5px solid rgba(23,32,56,0.15);color:var(--navy);font-size:1.3rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;box-shadow:var(--shadow);}
  .scroll-arrow:hover{background:var(--navy);color:var(--white);border-color:var(--navy);}
  @media(max-width:600px){.reviews-carousel .review-card{flex:0 0 85vw;}}

  /* REVIEWS GRID (home page preview) */
  /* REVIEWS GRID (home page preview) */
  .reviews-header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;}
  .reviews-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:1.5rem;max-width:1100px;margin:0 auto;}
  .review-card{background:var(--white);border-radius:var(--radius);padding:1.8rem;box-shadow:var(--shadow);border:1px solid rgba(23,32,56,0.06);position:relative;display:flex;flex-direction:column;}
  .review-card:hover{box-shadow:var(--shadow-lg);}
  .review-qs{font-size:3.5rem;line-height:1;color:var(--gold2);font-family:'Playfair Display',serif;position:absolute;top:0.8rem;right:1.4rem;opacity:0.3;}
  .review-stars{color:var(--gold);font-size:0.95rem;margin-bottom:0.9rem;letter-spacing:2px;flex-shrink:0;}
  .review-text-wrap{flex:1;overflow:hidden;position:relative;margin-bottom:0.8rem;}
  .review-text{font-family:'Lora',serif;font-size:0.94rem;color:var(--text);line-height:1.8;font-style:italic;margin:0;white-space:pre-line;}
  .review-text.clamped{display:-webkit-box;-webkit-line-clamp:13;-webkit-box-orient:vertical;overflow:hidden;}
  .see-more-btn{background:none;border:none;color:var(--gold);font-size:0.82rem;font-weight:600;cursor:pointer;padding:0.3rem 0 0;display:block;}
  .see-more-btn:hover{color:var(--navy);}
  .review-footer{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding-top:0.9rem;border-top:1px solid rgba(23,32,56,0.07);flex-shrink:0;}
  .review-author{font-family:'DM Sans',sans-serif;font-weight:600;font-size:0.78rem;color:var(--navy);}
  .review-date{font-size:0.78rem;color:var(--muted);white-space:nowrap;}
  .add-review-btn{background:var(--navy);color:var(--white);padding:0.7rem 1.5rem;border-radius:8px;border:none;font-size:0.88rem;font-weight:500;cursor:pointer;transition:background 0.2s;white-space:nowrap;}
  .add-review-btn:hover{background:var(--gold);}

  /* MODAL */
  .modal-overlay{position:fixed;inset:0;z-index:200;background:rgba(23,32,56,0.65);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:1rem;}
  .modal{background:var(--white);border-radius:18px;padding:2.5rem;max-width:500px;width:100%;box-shadow:var(--shadow-lg);position:relative;max-height:90vh;overflow-y:auto;}
  .modal h3{font-size:1.45rem;color:var(--navy);margin-bottom:0.3rem;}
  .modal-sub{font-size:0.88rem;color:var(--muted);margin-bottom:1.8rem;}
  .modal-close{position:absolute;top:1.1rem;right:1.2rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--muted);}
  .form-row{margin-bottom:1.05rem;}
  .form-row label{display:block;font-size:0.83rem;font-weight:500;color:var(--text);margin-bottom:0.3rem;}
  .form-row input,.form-row textarea,.form-row select{width:100%;padding:0.65rem 0.9rem;border:1.5px solid rgba(23,32,56,0.14);border-radius:8px;font-size:0.92rem;background:var(--cream);transition:border-color 0.2s;}
  .form-row input:focus,.form-row textarea:focus{outline:none;border-color:var(--gold);}
  .form-row textarea{min-height:95px;resize:vertical;}
  .form-row input.field-error,.form-row textarea.field-error{border-color:#c9553a;}
  .cf-input.field-error{border-color:#c9553a!important;}
  .field-error-msg{font-size:0.76rem;color:#c9553a;margin-top:0.25rem;}
  .star-picker{display:flex;gap:0.35rem;margin-top:0.3rem;}
  .star-picker button{background:none;border:none;font-size:1.7rem;cursor:pointer;color:#ccc;padding:0;transition:transform 0.1s,color 0.1s;}
  .star-picker button.lit{color:var(--gold);}
  .star-picker button:hover{transform:scale(1.15);}
  .submit-btn{width:100%;background:var(--gold);color:white;padding:0.88rem;border:none;border-radius:8px;font-size:0.98rem;font-weight:500;cursor:pointer;margin-top:0.4rem;transition:background 0.2s;}
  .submit-btn:hover{background:var(--navy);}
  .success-msg{background:var(--sage2);border:1px solid rgba(92,124,106,0.35);color:var(--sage);padding:0.9rem 1.2rem;border-radius:8px;font-size:0.92rem;text-align:center;margin-top:0.7rem;}

  /* BOOKING */
  .booking-shell{max-width:880px;margin:2.5rem auto 0;background:var(--white);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-lg);display:grid;grid-template-columns:270px 1fr;}
  .booking-left{background:var(--navy);padding:2.5rem 1.8rem;color:white;display:flex;flex-direction:column;}
  .booking-left h3{font-size:1.15rem;color:var(--gold2);margin-bottom:1.8rem;font-family:'Playfair Display',serif;}
  .bl-item{display:flex;gap:0.8rem;align-items:flex-start;margin-bottom:1.3rem;}
  .bl-icon{width:34px;height:34px;background:rgba(255,255,255,0.1);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:0.95rem;flex-shrink:0;}
  .bl-label{font-size:0.75rem;color:rgba(255,255,255,0.45);margin-bottom:0.15rem;}
  .bl-val{font-size:0.9rem;color:white;}
  .bl-val a{color:var(--gold2);text-decoration:none;}
  .bl-val a:hover{text-decoration:underline;}
  .booking-free-note{margin-top:auto;background:rgba(92,124,106,0.25);border:1px solid rgba(92,124,106,0.4);border-radius:10px;padding:1rem 1.1rem;font-size:0.85rem;color:rgba(255,255,255,0.82);line-height:1.65;}
  .booking-free-note strong{color:#9fd4b0;}
  .booking-right{padding:2rem;}
  .cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;}
  .cal-nav-btn{background:var(--cream2);border:none;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:1rem;color:var(--navy);display:flex;align-items:center;justify-content:center;transition:background 0.15s;}
  .cal-nav-btn:hover{background:var(--sage2);}
  .cal-month-label{font-family:'Playfair Display',serif;font-size:1rem;color:var(--navy);}
  .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;text-align:center;}
  .cal-dl{font-size:0.7rem;color:var(--muted);font-weight:600;padding:0.3rem 0;}
  .cal-day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:0.82rem;cursor:pointer;transition:background 0.12s,color 0.12s;}
  .cal-day.avail{color:var(--sage);font-weight:600;}
  .cal-day.avail:hover{background:var(--sage2);}
  .cal-day.today{border:2px solid var(--gold);}
  .cal-day.past{color:#ccc;cursor:default;}
  .cal-day.empty{cursor:default;}
  .cal-day.picked{background:var(--gold)!important;color:white!important;font-weight:700;}
  .times-label{font-size:0.83rem;font-weight:600;color:var(--navy);margin:1.2rem 0 0.6rem;}
  .time-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.55rem;}
  .t-slot{padding:0.5rem 0.3rem;border:1.5px solid rgba(23,32,56,0.13);border-radius:8px;text-align:center;font-size:0.82rem;cursor:pointer;transition:all 0.13s;background:var(--cream);color:var(--text);}
  .t-slot:hover{border-color:var(--gold);color:var(--gold);}
  .t-slot.picked{background:var(--gold);color:white;border-color:var(--gold);font-weight:600;}
  .t-slot.off{opacity:0.3;cursor:not-allowed;}
  .booking-details{margin-top:1.3rem;padding-top:1.2rem;border-top:1px solid rgba(23,32,56,0.08);}
  .booking-details h4{font-size:0.95rem;color:var(--navy);margin-bottom:0.9rem;}
  .bk-input{width:100%;padding:0.6rem 0.85rem;border:1.5px solid rgba(23,32,56,0.13);border-radius:8px;font-size:0.88rem;margin-bottom:0.65rem;background:var(--cream);}
  .bk-input:focus{outline:none;border-color:var(--gold);}
  @media(max-width:760px){.booking-shell{grid-template-columns:1fr;}}

  /* FAQ */
  .faq-list{max-width:700px;margin:2.5rem auto 0;}
  .faq-item{border-bottom:1px solid rgba(23,32,56,0.09);}
  .faq-q{width:100%;background:none;border:none;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 0;font-size:0.98rem;font-weight:500;color:var(--navy);cursor:pointer;text-align:left;}
  .faq-chevron{font-size:1.2rem;color:var(--gold);flex-shrink:0;margin-left:1rem;}
  .faq-a{font-size:0.91rem;color:var(--muted);line-height:1.8;padding-bottom:1.2rem;}

  /* CONTACT / FOOTER */
  .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;max-width:980px;margin:3rem auto 0;align-items:start;}
  .contact-intro p{font-size:0.97rem;color:rgba(255,255,255,0.65);line-height:1.85;margin-bottom:1.4rem;}
  .ci-item{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.3rem;}
  .ci-icon{width:42px;height:42px;background:rgba(201,148,58,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
  .ci-label{font-size:0.76rem;color:rgba(255,255,255,0.42);margin-bottom:0.15rem;}
  .ci-val{font-size:0.93rem;color:white;}
  .ci-val a{color:var(--gold2);text-decoration:none;}
  .ci-val a:hover{text-decoration:underline;}
  .cf input,.cf textarea,.cf-input{width:100%;padding:0.7rem 1rem;font-size:0.9rem;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.13);border-radius:8px;color:white;margin-bottom:0.75rem;font-family:'Lora',serif;}
  .cf input::placeholder,.cf textarea::placeholder,.cf-input::placeholder{color:rgba(255,255,255,0.3);}
  .cf input:focus,.cf textarea:focus,.cf-input:focus{outline:none;border-color:var(--gold);}
  .cf textarea{min-height:110px;resize:vertical;}
  .footer-strip{margin-top:5rem;border-top:1px solid rgba(255,255,255,0.06);padding:1.8rem 5vw;background:var(--navy);color:rgba(255,255,255,0.55);}
  .footer-brand-links{margin-top:0.75rem;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;}
  .footer-brand-links a,.footer-brand-links button{background:none;border:none;color:var(--gold);font-size:0.88rem;cursor:pointer;padding:0;font-family:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;transition:opacity 0.2s;}
  .footer-brand-links a:hover,.footer-brand-links button:hover{opacity:0.75;}
  .footer-free{font-size:0.82rem;color:var(--gold);font-weight:400;}
  .footer-bottom{max-width:1100px;margin:0 auto;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;}
  .footer-bottom p{font-size:0.78rem;color:rgba(255,255,255,0.22);}
  @media(max-width:800px){.contact-grid{grid-template-columns:1fr;gap:2.5rem;}}
`;

// ─── Focus Trap Hook ─────────────────────────────────────────────────────
function useTrapFocus(ref, active) {
  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const focusable = () => el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = () => { const f = focusable(); return f[0]; };
    const last = () => { const f = focusable(); return f[f.length - 1]; };
    const saved = document.activeElement;
    const f = first();
    if (f) f.focus();
    const onTab = (e) => {
      if (e.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === items[0]) { e.preventDefault(); items[items.length - 1].focus(); }
      } else {
        if (document.activeElement === items[items.length - 1]) { e.preventDefault(); items[0].focus(); }
      }
    };
    el.addEventListener("keydown", onTab);
    return () => { el.removeEventListener("keydown", onTab); if (saved && saved.focus) saved.focus(); };
  }, [active]);
}

// ─── School Card ──────────────────────────────────────────────────────────
function SchoolCard({ school }) {
  const [failed, setFailed] = useState(false);
  const initials = school.name.split(" ").slice(0,2).map(w => w[0]).join("");

  return (
    <div className="school-card">
      {!failed ? (
        <img
          src={school.logoUrl}
          alt={school.name}
          className="school-logo-lg"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="school-logo-fallback">{initials}</div>
      )}
      <span className="school-name">{school.name}</span>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["about","About Me"],
    ["services","Services"],
    ["approach","Approach"],
    ["reviews","Reviews"],
    ["faq","FAQ"],
  ];
  const navigate = (id) => { setPage(id); setMenuOpen(false); };
  return (
    <>
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => navigate("home")}>Omer <span>Maths Tuition</span></div>
      <ul className="nav-links">
        {links.map(([id, label]) => (
          <li key={id}>
            <button className={`nav-btn${page === id ? " active" : ""}`} onClick={() => navigate(id)}>
              {label}
            </button>
          </li>
        ))}
        <li>
          <button className="nav-cta" onClick={() => navigate("booking")}>Book a Session</button>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span/><span/><span/>
      </button>
    </nav>
    <div className={`mobile-menu-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
    <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
      <ul>
        {links.map(([id, label]) => (
          <li key={id}>
            <button className={`nav-btn${page === id ? " active" : ""}`} onClick={() => navigate(id)}>{label}</button>
          </li>
        ))}
      </ul>
      <button className="mobile-cta" onClick={() => navigate("booking")}>Book a Session</button>
    </div>
    </>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────
// Distance-based dot sizing: each dot's size = distance from active dot
// d=0→active(9px) d=1→full(7px) d=2→small(5px) d=3→tiny(3px) d≥4→hidden
const MAX_DIST = 3;
const renderDots = (activeDot, total) => {
  return Array.from({ length: total }, (_, idx) => {
    const d = Math.abs(idx - activeDot);
    if (d > MAX_DIST) return <div key={idx} className="carousel-dot carousel-dot-hidden" />;
    const cls = d === 0 ? 'active' : d === 1 ? 'full' : d === 2 ? 'small' : 'tiny';
    return <div key={idx} className={`carousel-dot carousel-dot-${cls}`} />;
  });
};

function HomePage({ setPage, openContact }) {
  const homeReviewsRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  useEffect(() => {
    const el = homeReviewsRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const total = ALL_REVIEWS.length;
      const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setActiveDot(Math.max(0, Math.min(total - 1, Math.round(progress * (total - 1)))));
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const homeScrolling = useRef(false);
  const homeScroll = (dir) => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile && homeScrolling.current) return;
    const el = homeReviewsRef.current;
    if (!el) return;
    if (dir === 1 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) return;
    if (dir === -1 && el.scrollLeft <= 5) return;
    const card = el.querySelector(".review-card");
    const amount = card ? card.offsetWidth + 24 : 360;
    if (isMobile) {
      homeScrolling.current = true;
      setTimeout(() => { homeScrolling.current = false; }, 300);
    }
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  return (
    <div className="page">
      <div className="hero-full">
        <div className="hero-free-pill">🎁 First lesson always free - no obligation</div>
        <h1>Maths Tuition That <em>Builds Confidence</em><br/>and Achieves Top Grades</h1>
        <p className="hero-sub">
          Warm, patient, one-to-one online maths tuition for GCSE, A-level, and university admissions.
          Students consistently achieve grade 8–9 or A–A*.
        </p>
        <div className="hero-btns">
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary btn-wa"><WAIcon /> Message me on WhatsApp</a>
          <button className="btn-email" onClick={() => openContact()}><EmailIcon/> Email Me</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><span className="hero-stat-num">5,000+</span><span className="hero-stat-label">Hours of Lessons</span></div>
          <div className="hero-stat"><span className="hero-stat-num">10+</span><span className="hero-stat-label">Years Tutoring</span></div>
          <div className="hero-stat"><span className="hero-stat-num">100%</span><span className="hero-stat-label">Target Grades Achieved</span></div>
        </div>
      </div>
      <div className="trust-bar">
        {[["🎓","Oxford University, First Class Maths"],["📈","Students consistently achieve grade 8/9 or A–A*"],["🌐","Online · Available Worldwide"],["👤","1-to-1 only - full focus, every session"],["🎁","First lesson free"]].map(([icon,text])=>(
          <div className="trust-item" key={text}><span style={{fontSize:"1rem"}}>{icon}</span>{text}</div>
        ))}
      </div>
      <section className="section section-alt">
        <div style={{maxWidth:"1100px",margin:"0 auto 2.5rem"}}>
          <span className="section-label">What I Offer</span>
          <div className="divider"/>
          <h2 className="section-title">How Can I Help?</h2>
        </div>
        <div className="home-teasers">
          {[
            { icon:"📊", title:"GCSE & A-Level Maths", body:"Targeted, exam-specific tuition that builds genuine understanding and the confidence to perform at your best.", page:"services" },
            { icon:"🎓", title:"University Admissions", body:"Specialist MAT, TMUA, STEP and Oxbridge interview preparation - from someone who has been through it.", page:"services" },
            { icon:"💬", title:"My Approach", body:"I don't just teach methods. I build the understanding and confidence that holds up when it counts most.", page:"approach" },
          ].map(t => (
            <div className="teaser-card" key={t.title} onClick={() => setPage(t.page)}>
              <div className="teaser-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <span className="teaser-link">Find out more →</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-sage" style={{padding:"56px 5vw"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",marginBottom:"1.5rem"}}>
            <div>
              <span className="section-label">Reviews</span>
              <h2 className="section-title" style={{marginBottom:0}}>What Parents & Students Say</h2>
            </div>
            <div style={{display:"flex",gap:"0.75rem",alignItems:"center"}}>
              <button className="scroll-arrow" onClick={() => homeScroll(-1)}>‹</button>
              <button className="scroll-arrow" onClick={() => homeScroll(1)}>›</button>
              <button className="btn-primary btn-sm" onClick={() => setPage("reviews")}>All Reviews →</button>
            </div>
          </div>
          <div className="reviews-carousel" ref={homeReviewsRef}>
            {ALL_REVIEWS.map(r => <ReviewCard key={r.id} r={r} />)}
          </div>
          <div className="carousel-dots">
            {renderDots(activeDot, ALL_REVIEWS.length)}
          </div>
        </div>
      </section>
      <div className="mobile-quick-links">
        <h3>Find Out More</h3>
        <p>Learn about how I work and what families say</p>
        <div className="mobile-quick-links-grid">
          <div className="mobile-quick-link" onClick={() => setPage("about")}>👤 About Me</div>
          <div className="mobile-quick-link" onClick={() => setPage("services")}>📊 Services</div>
          <div className="mobile-quick-link" onClick={() => setPage("approach")}>💬 My Approach</div>
          <div className="mobile-quick-link" onClick={() => setPage("faq")}>❓ FAQ & Pricing</div>
          <div className="mobile-quick-link mql-cta" onClick={() => setPage("booking")}>📅 Book a Free Session</div>
        </div>
      </div>
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────
function AboutPage({ setPage, openContact }) {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>About Me</span>
          <h1>Hello - I'm <em>Omer</em></h1>
          <p>Oxford Mathematics graduate, experienced tutor, and someone who genuinely loves helping students build their confidence in maths.</p>
        </div>
      </div>
      <section className="section">
        <div className="about-grid">
          <div className="about-photo-wrap">
            <img src={PHOTO_SRC} alt="Omer" className="about-photo" />
            <div className="about-bullet-card">
              <div className="about-bullet-item"><span>⏱</span><span>5,000+ hours of lessons</span></div>
              <div className="about-bullet-item"><span>📅</span><span>10+ years tutoring</span></div>
              <div className="about-bullet-item"><span>🎯</span><span>100% target grades achieved</span></div>
            </div>
          </div>
          <div className="about-body">
            <div className="about-quals">
              <span className="qual-chip-gold">Oxford University</span>
              <span className="qual-chip">3 A*s at A-Level</span>
              <span className="qual-chip">11 A*s at GCSE</span>
            </div>
            <p>I graduated from <strong>Oxford University with a First Class degree in Mathematics</strong>, having achieved 3 A*s at A-Level and 11 A*s at GCSE - including 100% in most of my Maths and Further Maths papers. Over the past ten years, I've had the privilege of working with students from some of the most demanding schools in London and beyond.</p>
            <p>I am genuinely passionate about Mathematics, and I always aim to share that enthusiasm through lessons. Lessons are calm, patient and judgement-free - somewhere it's safe to be stuck, and where we actively work towards genuine understanding and building confidence.</p>
            <p>As a result, my students consistently achieve strong results, with <strong>8/9s at GCSE and A/A*s at A-Level</strong>. I have a <strong>100% success rate</strong> in my students achieving their target grades.</p>
            <p>I also support students preparing for <strong>university admissions</strong> - including MAT, TMUA and STEP, and Oxbridge interview preparation. Having been through the Oxford admissions process myself, I know exactly what these assessments demand and how to prepare for them.</p>
            <p>Every new student starts with a <strong>completely free first session</strong>. The way I like to run it: you pick a topic your child has been finding difficult, and we work through it together properly in the lesson. By the end, they should feel noticeably more comfortable with it - so you get a real sense of how I work, with no pressure or obligation.</p>
            <div className="btn-row" style={{marginTop:"1.3rem"}}>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary btn-wa"><WAIcon /> Message me on WhatsApp</a>
              <button className="btn-email-dark" onClick={() => openContact()}><EmailIcon/> Email Me</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <span className="section-label">Students I've Worked With</span>
          <div className="divider"/>
          <h2 className="section-title">Schools Represented</h2>
          <p className="section-lead">I tutor entirely online, working with students from some of the UK and Singapore's most competitive schools - wherever you are in the world, we can work together.</p>
          <div className="schools-grid">
            {SCHOOLS.map(s => (
              <SchoolCard key={s.name} school={s} />
            ))}
          </div>
        </div>
      </section>
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
function ServicesPage({ setPage, openContact }) {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>Services</span>
          <h1>Tuition at <em>Every Stage</em></h1>
          <p>Completely one-to-one, entirely online, and shaped around each student - from building strong foundations in Years 7 and 8, through GCSE, to Oxbridge admissions. Every level includes a free first session.</p>
        </div>
      </div>
      <section className="section">
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <span className="section-label">Core Tuition</span>
          <div className="divider"/>
          <h2 className="section-title">Secondary & Sixth Form Maths</h2>
        </div>
        <div className="services-grid">
          {[
            { icon:"📐", title:"Key Stage 3", tag:"Years 7–8", desc:"Building strong foundations before GCSE. Filling gaps early, developing genuine number sense, and making sure maths feels manageable - not daunting - before the pressure of Year 9 begins.", cls:"" },
            { icon:"📊", title:"GCSE Maths", tag:"Years 9–11", desc:"Targeted, exam-board-specific support for Foundation and Higher tier. Closing gaps, mastering exam technique, and consistently boosting students' grades to 8 or 9.", cls:"" },
            { icon:"∫", title:"A-Level Maths", tag:"Years 12–13", desc:"Deep, conceptual teaching across Pure, Statistics and Mechanics. For students who want to truly understand maths - and to carry that confidence into university. All major exam boards covered.", cls:"" },
          ].map(s => (
            <div className={`service-card ${s.cls}`} key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <span className="service-tag">{s.tag}</span>
              <h3 style={{marginTop:"0.75rem"}}>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-price"><span className="rate">£100</span><span className="per">/ hour</span></div>
              <div className="free-lesson-note">✓ First session always free</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-oxbridge">
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <span className="section-label">University Admissions</span>
          <div className="divider"/>
          <div className="uni-hero-row">
            <div className="uni-intro">
              <h2 className="section-title">Oxbridge & Top University Preparation</h2>
              <p>Having been through the Oxford admissions process myself - and achieved a First Class degree - I know precisely what these assessments look for. I prepare students for the specific challenges of each exam and interview, building both the technical skills and the <strong>confidence to perform at their best</strong> when it counts.</p>
              <p>I have a suite of real interview questions that have been asked as part of Oxford and Cambridge admissions. Sessions focus on working through these together - developing the ability to think mathematically under pressure and communicate reasoning clearly - before finishing with a mock interview to prepare students for the real thing.</p>
              <div className="btn-row" style={{marginTop:"1.5rem"}}>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary btn-wa"><WAIcon /> Message me on WhatsApp</a>
                <button className="btn-email-dark" onClick={() => openContact()}><EmailIcon/> Email Me</button>
              </div>
              <p style={{marginTop:"0.9rem",fontSize:"0.88rem",color:"var(--muted)"}}>University admissions sessions: <strong>£150/hour</strong></p>
            </div>
            <div className="uni-cards">
              {[
                { icon:"📐", title:"MAT", body:"Mathematics Admissions Test for Oxford and Imperial. Problem-solving focus, long-answer technique, and building comfort with proof-based questions." },
                { icon:"📏", title:"TMUA", body:"Test of Mathematics for University Admission - used by Cambridge and others. Logic, reasoning, and mathematical argument at speed." },
                { icon:"∑", title:"STEP", body:"Sixth Term Examination Paper - required by Cambridge Maths. In-depth, open-ended problem solving that rewards deep understanding over memorisation." },
                { icon:"🎙", title:"Oxbridge Interviews", body:"Coaching for the unique style of an Oxford or Cambridge Maths interview - thinking aloud, staying confident under questioning, and working through unseen problems calmly." },
              ].map(c => (
                <div className="uni-card" key={c.title}>
                  <div className="uni-card-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="oxbridge-banner">
            <div className="oxbridge-banner-body">
              <h4>Oxford-Educated. First Class.</h4>
              <p>I achieved a First Class Mathematics degree from Oxford University and know the admissions process inside out. Whether your child is preparing for MAT, STEP, TMUA, or an Oxbridge interview, I'll give them the best possible preparation.</p>
              <div style={{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary" style={{whiteSpace:"nowrap"}}>Get in Touch →</a>
                <span className="oxbridge-price-note">£150 / hour</span>
              </div>
            </div>
            <img src={PHOTO_SRC} alt="Omer" className="oxbridge-banner-photo" />
          </div>
        </div>
      </section>
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── Approach ─────────────────────────────────────────────────────────────
function ApproachPage({ setPage, openContact }) {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>My Approach</span>
          <h1>Teaching That Builds<br/><em>Real Confidence</em></h1>
          <p>After 10 years and 5,000 hours of tutoring, I know that confidence is the foundation everything else is built on.</p>
        </div>
      </div>
      <section className="section">
        <div className="approach-cols">
          <div className="approach-intro">
            <span className="section-label">How I Work</span>
            <div className="divider"/>
            <p>After ten years and 5,000 hours of tutoring, I know that what separates the students who improve from those who don't isn't ability - it's <strong>targeted, patient, one-to-one attention</strong>. In a classroom of thirty, there isn't time for a teacher to find out exactly where each student is struggling. That's what I do.</p>
            <p>I focus on the topics students are finding difficult and make sure they feel comfortable with what they're working on in class. From there, I put together a plan that's genuinely personal: the right topics, at the right pace, pitched at the right level.</p>
            <p>My sessions also have a strong focus on <strong>exam technique</strong>. Knowing the maths is necessary but not sufficient - students need to know how to read a question, where the marks are awarded, and how to show their working clearly.</p>
            <p>Throughout, I keep parents informed. You'll always know what we've been working on, how your child is progressing, and what we're planning to focus on next.</p>
            <div className="btn-row" style={{marginTop:"1.5rem"}}>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary btn-wa"><WAIcon /> Message me on WhatsApp</a>
              <button className="btn-email-dark" onClick={() => openContact()}><EmailIcon/> Email Me</button>
            </div>
          </div>
          <div className="approach-items">
            {[
              { n:"1", title:"Confidence as the foundation", body:"Building genuine confidence is at the heart of how I work. A student who feels secure in their own ability will attempt harder problems, ask better questions, and perform far better under exam pressure." },
              { n:"2", title:"Understanding, not memorisation", body:"I teach students to understand why a method works - not just to follow a procedure. Deep understanding holds up under the pressure of an unfamiliar exam question. Rote learning rarely does." },
              { n:"3", title:"Exam technique as a teachable skill", body:"I teach students to read questions carefully, structure answers clearly, and secure every mark they're entitled to. Small improvements in technique can mean the difference between a grade 7 and a grade 9." },
            ].map(a => (
              <div className="approach-item-row" key={a.n}>
                <div className="approach-num-badge">{a.n}</div>
                <div><h4>{a.title}</h4><p>{a.body}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="online-callout">
          <div>
            <h3>All Sessions Online - and It Works Brilliantly for Maths</h3>
            <p>I teach using an iPad to make notes we can both see live during the lesson - so students always know exactly how I'm thinking through a problem. We can also pull up past papers and mark schemes instantly.</p>
            <div className="online-features">
              <div className="online-feature">Live interactive whiteboard - write and annotate together in real time</div>
              <div className="online-feature">Available to students anywhere in the world</div>
              <div className="online-feature">No travel - fits naturally around school and family life</div>
            </div>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary" style={{whiteSpace:"nowrap"}}>Book a Free Session →</a>
        </div>
      </section>
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── Reusable Review Card ─────────────────────────────────────────────────
const CLAMP_THRESHOLD = 510;
function ReviewCard({ r }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > CLAMP_THRESHOLD;

  return (
    <div className="review-card">
      <div className="review-qs">"</div>
      <div className="review-stars">{"★".repeat(r.stars)}{"☆".repeat(5-r.stars)}</div>
      <div className="review-text-wrap">
        <p className={`review-text${isLong && !expanded ? " clamped" : ""}`}>{r.text}</p>
        {isLong && !expanded && (
          <button className="see-more-btn" onClick={() => setExpanded(true)}>Read more...</button>
        )}
        {isLong && expanded && (
          <button className="see-more-btn" onClick={() => setExpanded(false)}>Read less</button>
        )}
      </div>
      <div className="review-footer">
        <span className="review-author">{r.author}</span>
        {r.date && <span className="review-date">{r.date}</span>}
      </div>
    </div>
  );
}
function ReviewsPage({ setPage, openContact }) {
  const [reviews, setReviews] = useState(ALL_REVIEWS);
  const [showModal, setShowModal] = useState(false);
  const [rForm, setRForm] = useState({ stars:5, text:"", name:"", level:"GCSE" });
  const [rDone, setRDone] = useState(false);
  const [rSending, setRSending] = useState(false);
  const [rTried, setRTried] = useState(false);
  const scrollRef = useRef(null);
  const reviewModalRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => { if (e.key === "Escape") setShowModal(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);
  useTrapFocus(reviewModalRef, showModal);

  const scrolling = useRef(false);
  const scroll = (dir) => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile && scrolling.current) return;
    const el = scrollRef.current;
    if (!el) return;
    if (dir === 1 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) return;
    if (dir === -1 && el.scrollLeft <= 5) return;
    const card = el.querySelector(".review-card");
    if (isMobile) {
      scrolling.current = true;
      setTimeout(() => { scrolling.current = false; }, 300);
    }
    el.scrollBy({ left: dir * ((card ? card.offsetWidth : 340) + 24), behavior:"smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const total = reviews.length;
      const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setActiveDot(Math.max(0, Math.min(total - 1, Math.round(progress * (total - 1)))));
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const submitReview = async () => {
    setRTried(true);
    if (!rForm.text || !rForm.name) return;
    setRSending(true);
    try {
      await fetch(FORMSPREE_URL, {
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({
          _subject: "New Review Submission - Omer Maths Tuition",
          name: rForm.name,
          level: rForm.level,
          stars: "★".repeat(rForm.stars),
          review: rForm.text
        })
      });
      setRDone(true);
      setTimeout(() => { setShowModal(false); setRForm({stars:5,text:"",name:"",level:"GCSE"}); setRDone(false); setRSending(false); setRTried(false); }, 2500);
    } catch(e) { setRSending(false); }
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>Reviews</span>
          <h1>Real Words From<br/><em>Real Families</em></h1>
          <p>Every review below is from a parent or student I've worked with directly.</p>
        </div>
      </div>
      <section className="section section-sage">
        <div className="reviews-header">
          <div>
            <span className="section-label">What Parents & Students Say</span>
            <div className="divider"/>
            <h2 className="section-title">Parent & Student Reviews</h2>
          </div>
          <div style={{display:"flex",gap:"0.75rem",alignItems:"center"}}>
            <button className="scroll-arrow" onClick={() => scroll(-1)}>‹</button>
            <button className="scroll-arrow" onClick={() => scroll(1)}>›</button>
            <button className="add-review-btn" onClick={() => setShowModal(true)}>+ Leave a Review</button>
          </div>
        </div>
        <div className="reviews-carousel" ref={scrollRef}>
          {reviews.map(r => <ReviewCard key={r.id} r={r} />)}
        </div>
        <div className="carousel-dots">
          {renderDots(activeDot, reviews.length)}
        </div>
      </section>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal" ref={reviewModalRef}>
            <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close">×</button>
            <h3>Share Your Experience</h3>
            <p className="modal-sub">Reviews are checked before being published. Thank you for taking the time!</p>
            <div className="form-row"><label>Your Rating</label><div className="star-picker" role="group" aria-label="Rating">{[1,2,3,4,5].map(s => <button key={s} className={rForm.stars >= s ? "lit" : ""} onClick={() => setRForm(f => ({...f, stars:s}))} aria-label={`${s} star${s > 1 ? "s" : ""}`}>★</button>)}</div></div>
            <div className="form-row"><label>Your Name *</label><input className={rTried && !rForm.name ? "field-error" : ""} placeholder="e.g. Sarah" value={rForm.name} onChange={e => setRForm(f => ({...f, name:e.target.value}))} />{rTried && !rForm.name && <div className="field-error-msg">Please enter your name</div>}</div>
            <div className="form-row"><label>Level</label><select value={rForm.level} onChange={e => setRForm(f => ({...f, level:e.target.value}))}><option>GCSE</option><option>A-Level</option><option>University Admissions</option><option>Adult Learner</option></select></div>
            <div className="form-row"><label>Your Review *</label><textarea className={rTried && !rForm.text ? "field-error" : ""} placeholder="Tell other parents about your experience..." value={rForm.text} onChange={e => setRForm(f => ({...f, text:e.target.value}))} />{rTried && !rForm.text && <div className="field-error-msg">Please enter your review</div>}</div>
            {rDone ? <div className="success-msg">✓ Thank you - your review will appear on the website shortly!</div> : <button className="submit-btn" onClick={submitReview} disabled={rSending}>{rSending ? "Sending..." : "Submit Review"}</button>}
          </div>
        </div>
      )}
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
function FaqPage({ setPage, openContact }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>FAQ</span>
          <h1>Questions Parents<br/><em>Usually Ask</em></h1>
          <p>If you don't see what you're looking for, please do get in touch directly - I'm always happy to chat.</p>
        </div>
      </div>
      <section className="section">
        <div className="faq-list">
          {FAQS.map((f,i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                {f.q}<span className="faq-chevron">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
        <div style={{maxWidth:"700px",margin:"3rem auto 0",textAlign:"center"}}>
          <p style={{color:"var(--muted)",marginBottom:"1.2rem"}}>Still have a question? I'll always reply promptly.</p>
          <div className="btn-row" style={{justifyContent:"center"}}>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary btn-wa"><WAIcon /> Message me on WhatsApp</a>
            <button className="btn-email-dark" onClick={() => openContact()}><EmailIcon/> Email Me</button>
          </div>
        </div>
      </section>
      <PageFooter setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── Booking ──────────────────────────────────────────────────────────────
function BookingPage({ setPage, openContact }) {
  const today = new Date();
  const [calY, setCalY] = useState(today.getFullYear());
  const [calM, setCalM] = useState(today.getMonth());
  const [pickedDay, setPickedDay] = useState(null);
  const [pickedTime, setPickedTime] = useState(null);
  const [bkForm, setBkForm] = useState({ name:"", email:"", level:"" });
  const [bkDone, setBkDone] = useState(false);
  const [ctDone, setCtDone] = useState(false);
  const [ctForm, setCtForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [ctSending, setCtSending] = useState(false);
  const [ctTried, setCtTried] = useState(false);

  const submitContact = async () => {
    setCtTried(true);
    if (!ctForm.name || !ctForm.email || !ctForm.message) return;
    setCtSending(true);
    try {
      await fetch(FORMSPREE_URL, {
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({ name:ctForm.name, email:ctForm.email, phone:ctForm.phone, message:ctForm.message })
      });
      setCtDone(true);
    } catch(e) { setCtSending(false); }
  };

  const daysIn = (y,m) => new Date(y,m+1,0).getDate();
  const firstDow = (y,m) => { let d = new Date(y,m,1).getDay(); return d === 0 ? 6 : d-1; };
  const isPast = d => d && new Date(calY,calM,d) < new Date(today.getFullYear(),today.getMonth(),today.getDate());
  const isAvail = d => d && !isPast(d) && new Date(calY,calM,d).getDay() !== 0;
  const isToday = d => d && d === today.getDate() && calM === today.getMonth() && calY === today.getFullYear();
  const cells = Array(firstDow(calY,calM)).fill(null).concat(Array.from({length:daysIn(calY,calM)},(_,i)=>i+1));
  const prevM = () => { if(calM===0){setCalY(y=>y-1);setCalM(11);}else setCalM(m=>m-1); setPickedDay(null);setPickedTime(null); };
  const nextM = () => { if(calM===11){setCalY(y=>y+1);setCalM(0);}else setCalM(m=>m+1); setPickedDay(null);setPickedTime(null); };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-dots"/>
        <div className="page-hero-inner">
          <span className="section-label" style={{color:"var(--gold2)"}}>Book a Session</span>
          <h1>Find a Time <em>That Works</em></h1>
          {/* Original calendar intro — restore when the calendar comes back:
          <p>Choose a date and time below. I'll confirm within a few hours. New students always start with a completely free first session.</p>
          */}
          <p>Get in touch and I'll find a time that works around your schedule. I usually reply within a few hours, and new students always start with a completely free first session.</p>
        </div>
      </div>
      <section className="section">
        <div className="booking-shell">
          <div className="booking-left">
            <h3>Session Details</h3>
            {[
              ["⏱","Duration","60 minutes"],
              ["💷","Rate","£100 / hour"],
              ["🌐","Format","Online (interactive whiteboard)"],
              ["👤","Sessions","1-to-1 only"],
              ["💬","WhatsApp", <a href={WHATSAPP} target="_blank" rel="noopener">Message Omer directly</a>],
              ["📧","Email","hello@omermaths.com"],
            ].map(([icon,label,val]) => (
              <div className="bl-item" key={label}>
                <div className="bl-icon">{icon}</div>
                <div><div className="bl-label">{label}</div><div className="bl-val">{val}</div></div>
              </div>
            ))}
            <div className="booking-free-note">🎁 <strong>First session is completely free.</strong> No payment, no obligation - just a chance to meet and make sure it's the right fit.</div>
          </div>
          <div className="booking-right">
            {/* ==== CALENDAR TEMPORARILY DISABLED — KEPT FOR LATER ====================
                 The interactive calendar below is hidden for now because the
                 availability it showed wasn't linked to a real calendar yet.
                 TO RESTORE IT: delete this line (the opening comment marker) and
                 the matching closing marker just below the calendar block, then
                 remove the "Request a Time" panel that currently replaces it.

            <div className="cal-head">
              <button className="cal-nav-btn" onClick={prevM}>‹</button>
              <span className="cal-month-label">{MONTHS[calM]} {calY}</span>
              <button className="cal-nav-btn" onClick={nextM}>›</button>
            </div>
            <div className="cal-grid">
              {DAYS_SHORT.map(d => <div className="cal-dl" key={d}>{d}</div>)}
              {cells.map((day,i) => (
                <div key={i} className={["cal-day",!day?"empty":"",day&&isPast(day)?"past":"",day&&isAvail(day)?"avail":"",day&&isToday(day)?"today":"",pickedDay===day?"picked":""].join(" ")} onClick={() => { if(day&&isAvail(day)){setPickedDay(day);setPickedTime(null);} }}>{day||""}</div>
              ))}
            </div>
            {pickedDay && (<><div className="times-label">Available times · {pickedDay} {MONTHS[calM]}</div><div className="time-grid">{TIMES.map((t,i) => <div key={t} className={["t-slot",pickedTime===t?"picked":"",i===2?"off":""].join(" ")} onClick={() => { if(i!==2) setPickedTime(t); }}>{t}</div>)}</div></>)}
            {pickedDay && pickedTime && !bkDone && (
              <div className="booking-details">
                <h4>Almost done - just a couple of details</h4>
                <input className="bk-input" placeholder="Your name" value={bkForm.name} onChange={e=>setBkForm(f=>({...f,name:e.target.value}))} />
                <input className="bk-input" placeholder="Email address" type="email" value={bkForm.email} onChange={e=>setBkForm(f=>({...f,email:e.target.value}))} />
                <select className="bk-input" value={bkForm.level} onChange={e=>setBkForm(f=>({...f,level:e.target.value}))}>
                  <option value="">Level of support needed</option>
                  <option>GCSE Foundation</option><option>GCSE Higher</option><option>A-Level</option><option>MAT / TMUA / STEP</option><option>Oxbridge Interview Prep</option>
                </select>
                <button className="submit-btn" onClick={() => { if(bkForm.name&&bkForm.email) setBkDone(true); }}>Request This Session</button>
              </div>
            )}
            {bkDone && <div className="success-msg" style={{marginTop:"1rem"}}>✓ Booking request sent for {pickedTime}, {pickedDay} {MONTHS[calM]}. I'll be in touch very shortly to confirm.</div>}

            ==== END OF DISABLED CALENDAR ========================================= */}

            {/* Temporary "request a time" panel — shown while the calendar is off.
                 Delete this whole block when you switch the calendar back on. */}
            <div className="book-request" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",height:"100%",minHeight:"340px",gap:"1.1rem",padding:"1rem"}}>
              <div style={{fontSize:"2.4rem",lineHeight:1}}>📅</div>
              <h3 style={{fontSize:"1.3rem",color:"var(--navy)",margin:0,fontFamily:"'Playfair Display',serif"}}>Request a Time</h3>
              <p style={{color:"var(--muted)",lineHeight:1.75,margin:0,maxWidth:"420px"}}>Sessions are arranged personally, around your schedule. Send me a quick message with the days and times that usually work for you, and I'll reply to confirm — normally within a few hours. Your first session is always free.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary" style={{whiteSpace:"nowrap"}}>Message me on WhatsApp →</a>
              <div style={{fontSize:"0.85rem",color:"var(--muted)"}}>Prefer email? <a href="mailto:hello@omermaths.com" style={{color:"var(--gold)",fontWeight:600}}>hello@omermaths.com</a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div style={{maxWidth:"980px",margin:"0 auto"}}>
          <span className="section-label" style={{color:"var(--gold2)"}}>Get In Touch</span>
          <div className="divider"/>
          <h2 className="section-title">Still Have Questions?</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-intro">
            <p>Choosing a tutor is an important decision. If you'd like to talk through your child's situation before booking - what year they're in, what they're struggling with, what you're hoping to achieve - please do get in touch. WhatsApp is the easiest way to reach me.</p>
            {[
              ["💬","WhatsApp (preferred)", <a href={WHATSAPP} target="_blank" rel="noopener">Message me on WhatsApp</a>],
              ["📧","Email","hello@omermaths.com"],
              ["🌐","Sessions","Online · Available Worldwide"],
              ["🎁","First lesson","Always free - no obligation"],
            ].map(([icon,label,val]) => (
              <div className="ci-item" key={label}>
                <div className="ci-icon">{icon}</div>
                <div><div className="ci-label">{label}</div><div className="ci-val">{val}</div></div>
              </div>
            ))}
          </div>
          <div className="cf">
            {ctDone
              ? <div className="success-msg" style={{background:"rgba(92,124,106,0.25)",borderColor:"rgba(92,124,106,0.4)",color:"#9cd4af"}}>✓ Message received - I'll be in touch very soon.</div>
              : <>
                  <input className={`cf-input${ctTried && !ctForm.name ? " field-error" : ""}`} placeholder="Your name *" value={ctForm.name} onChange={e=>setCtForm(f=>({...f,name:e.target.value}))} />
                  {ctTried && !ctForm.name && <div className="field-error-msg" style={{marginTop:"-0.5rem",marginBottom:"0.75rem"}}>Please enter your name</div>}
                  <input className={`cf-input${ctTried && !ctForm.email ? " field-error" : ""}`} placeholder="Email address *" type="email" value={ctForm.email} onChange={e=>setCtForm(f=>({...f,email:e.target.value}))} />
                  {ctTried && !ctForm.email && <div className="field-error-msg" style={{marginTop:"-0.5rem",marginBottom:"0.75rem"}}>Please enter your email address</div>}
                  <input className="cf-input" placeholder="Phone number (optional)" type="tel" value={ctForm.phone} onChange={e=>setCtForm(f=>({...f,phone:e.target.value}))} />
                  <textarea className={`cf-input${ctTried && !ctForm.message ? " field-error" : ""}`} placeholder="Tell me a little about what you're looking for... *" value={ctForm.message} onChange={e=>setCtForm(f=>({...f,message:e.target.value}))} style={{minHeight:"110px",resize:"vertical"}} />
                  {ctTried && !ctForm.message && <div className="field-error-msg" style={{marginTop:"-0.5rem",marginBottom:"0.75rem"}}>Please enter a message</div>}
                  <button className="submit-btn" onClick={submitContact} disabled={ctSending}>{ctSending ? "Sending..." : "Send Message"}</button>
                </>
            }
          </div>
        </div>
      </section>
      <PageFooter dark setPage={setPage} openContact={openContact} />
    </div>
  );
}

// ─── Shared Footer ─────────────────────────────────────────────────────────
function PageFooter({ dark, setPage, openContact }) {
  return (
    <div className="footer-strip" style={{background:"var(--navy)",marginTop:0}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div className="nav-logo" style={{marginBottom:"0.5rem"}}>Omer <span>Maths Tuition</span></div>
        <div className="footer-brand-links">
          <a href={WHATSAPP} target="_blank" rel="noopener">💬 Message on WhatsApp →</a>
          <button onClick={() => openContact && openContact()}><EmailIcon/> Email Me →</button>
          <span className="footer-free">🎁 First lesson always free</span>
        </div>
        <div style={{marginTop:"1.5rem",paddingTop:"1.2rem",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"}}>
          <p style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.22)"}}>© {new Date().getFullYear()} Omer Maths Tuition · Online · Worldwide</p>
          <p style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.22)"}}>hello@omermaths.com</p>
        </div>
      </div>
    </div>
  );
}

// ─── Contact Modal ─────────────────────────────────────────────────────────
function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [tried, setTried] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useTrapFocus(modalRef, true);

  const submit = async () => {
    setTried(true);
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    try {
      await fetch(FORMSPREE_URL, {
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify(form)
      });
      setDone(true);
      setTimeout(onClose, 2500);
    } catch(e) { setSending(false); }
  };

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3>Get in Touch</h3>
        <p className="modal-sub">I'll reply promptly — usually within a few hours.</p>
        {done
          ? <div className="success-msg">✓ Message sent - I'll be in touch very soon!</div>
          : <>
              <div className="form-row"><label>Your Name *</label><input className={tried && !form.name ? "field-error" : ""} placeholder="e.g. Sarah" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />{tried && !form.name && <div className="field-error-msg">Please enter your name</div>}</div>
              <div className="form-row"><label>Email Address *</label><input className={tried && !form.email ? "field-error" : ""} type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />{tried && !form.email && <div className="field-error-msg">Please enter your email address</div>}</div>
              <div className="form-row"><label>Phone Number (optional)</label><input type="tel" placeholder="+44..." value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} /></div>
              <div className="form-row"><label>Message *</label><textarea className={tried && !form.message ? "field-error" : ""} placeholder="Tell me a little about what you're looking for..." value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />{tried && !form.message && <div className="field-error-msg">Please enter a message</div>}</div>
              <button className="submit-btn" onClick={submit} disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
            </>
        }
      </div>
    </div>
  );
}

// ─── App Root ──────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [showContact, setShowContact] = useState(false);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const pages = {
    home:     <HomePage setPage={navigate} openContact={() => setShowContact(true)} />,
    about:    <AboutPage setPage={navigate} openContact={() => setShowContact(true)} />,
    services: <ServicesPage setPage={navigate} openContact={() => setShowContact(true)} />,
    approach: <ApproachPage setPage={navigate} openContact={() => setShowContact(true)} />,
    reviews:  <ReviewsPage setPage={navigate} openContact={() => setShowContact(true)} />,
    faq:      <FaqPage setPage={navigate} openContact={() => setShowContact(true)} />,
    booking:  <BookingPage setPage={navigate} openContact={() => setShowContact(true)} />,
  };

  return (
    <>
      <style>{CSS}</style>
      <Nav page={page} setPage={navigate} openContact={() => setShowContact(true)} />
      {pages[page] || pages.home}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
