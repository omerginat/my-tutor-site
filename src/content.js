// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// This is the file to edit when you want to change words on the site:
// the schools list, the reviews, and the FAQ answers.
//
// In FAQ answers, {STD} and {OXB} are placeholders that get replaced with the
// current hourly rates (in £ or S$ depending on the visitor). Edit the actual
// numbers in src/site.config.js, not here.
// ─────────────────────────────────────────────────────────────────────────

export const SCHOOLS = [
  { name:"St Paul's School", region:"London",            domain:"stpaulsschool.org.uk",    logoUrl:"/images/image_02.png" },
  { name:"Westminster School", region:"London",          domain:"westminster.org.uk",       logoUrl:"/images/image_03.png" },
  { name:"King's College School", region:"London", domain:"kcs.org.uk", logoUrl:"/images/image_04.png" },
  { name:"City of London School", region:"London",       domain:"cityoflondonschool.org.uk",    logoUrl:"/images/image_05.png" },
  { name:"Highgate School", region:"London", domain:"highgateschool.org.uk", logoUrl:"/images/image_06.png" },
  { name:"University College School", region:"London", domain:"ucs.org.uk", logoUrl:"/images/image_07.png" },
  { name:"North London Collegiate", region:"London",     domain:"nlcs.org.uk",                  logoUrl:"/images/image_08.png" },
  { name:"Henrietta Barnett School", region:"London", domain:"hbs.barnet.sch.uk", logoUrl:"/images/image_09.png" },
  { name:"Latymer Upper School", region:"London",        domain:"latymer-upper.org",            logoUrl:"/images/image_10.png" },
  { name:"Dulwich College", region:"London",             domain:"dulwich.org.uk",               logoUrl:"/images/image_11.png" },
  { name:"Emanuel School", region:"London",              domain:"emanuel.org.uk",               logoUrl:"/images/image_12.png" },
  { name:"Wimbledon High School", region:"London",       domain:"wimbledonhigh.gdst.net",       logoUrl:"/images/image_13.png" },
  { name:"Hampton School", region:"London",              domain:"hamptonschool.org.uk",         logoUrl:"/images/image_14.png" },
  { name:"Tanglin Trust School", region:"Singapore", domain:"tts.edu.sg", logoUrl:"/images/image_15.png" },
  { name:"Overseas Family School", region:"Singapore",      domain:"ofs.edu.sg",                   logoUrl:"/images/image_16.png" },
  { name:"Harrow School", region:"London",               domain:"harrowschool.org.uk",          logoUrl:"/images/image_17.png" },
  { name:"Eton College", region:"UK",                domain:"etoncollege.com",              logoUrl:"/images/image_18.png" },
  { name:"Channing School", region:"London",             domain:"channing.co.uk",               logoUrl:"/images/image_19.png" },
  { name:"Aldenham School", region:"UK",              domain:"aldenham.com",                logoUrl:"/images/image_20.png" },
  { name:"Haberdashers School", region:"UK",          domain:"habsboys.org.uk",              logoUrl:"/images/image_21.png" },
];

export const ALL_REVIEWS = [
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

export const FAQS = [
  { q:"Is the first lesson really free?", a:"Yes, completely. I suggest your child picks a topic they've been struggling with, and we work through it properly together - so you can see exactly how I teach, and your child gets something useful out of it regardless. If it's working well, we can talk about going forward. There's no pressure either way." },
  { q:"What results have your students achieved?", a:"My students consistently achieve grade 8 or 9 at GCSE, and A or A* at A-level. I'm proud of that record - though it also reflects the students themselves, who consistently put in the work between sessions." },
  { q:"Do you help with university admissions?", a:"Yes - this is something I'm particularly well-placed to support, having been through the Oxford admissions process myself. I offer targeted preparation for the TMUA and STEP, as well as Oxbridge interview coaching. Note that Oxford retired the MAT after 2025 - Maths and Computer Science applicants now sit the TMUA instead, as do Imperial's, and I prepare students for it. These sessions focus on the kind of mathematical thinking and problem-solving these processes test, which goes well beyond the standard A-level curriculum." },
  { q:"What do sessions look like?", a:"For the trial lesson, I suggest your child picks a topic they've been finding difficult - we focus on that together, and they should feel noticeably more confident with it by the end. For regular sessions, we typically start with a check-in on what's been covered at school and where things feel shaky, then work through it together. I use an iPad to write notes that we can both see in real time. I also set a small amount of follow-up work to consolidate things between sessions." },
  { q:"Which exam boards do you cover?", a:"I cover all major UK exam boards - AQA, Edexcel, OCR, and WJEC - at both GCSE and A-level. Teaching is always aligned specifically to the mark scheme and syllabus your child is working to." },
  { q:"What are your rates?", a:"GCSE and A-Level sessions are {STD} per hour. University admissions sessions (TMUA, STEP, Oxbridge interviews) are {OXB} per hour. For GCSE and A-Level, the first session is always free. I invoice monthly, and payment is by bank transfer. I ask for 24 hours' notice if you need to cancel or rearrange." },
  { q:"Are you DBS checked?", a:"Yes, I hold an Enhanced DBS Certificate, and am happy to share it on request." },
];

// ─── ARTICLES ─────────────────────────────────────────────────────────────
// Deliberately low profile on the site itself: linked only from the footer,
// so search traffic can find these but visitors already on the site are not
// pulled away from booking. Each "body" entry is one block: h = heading,
// p = paragraph, list = bullet points.
export const POSTS = [
  {
    id: "mat-tmua",
    title: "Oxford has replaced the MAT with the TMUA: what applicants need to know",
    date: "2026-08-20",
    dateLabel: "20 August 2026",
    summary: "The Mathematics Admissions Test ran from 2007 to 2025 and no longer takes place. Oxford and Imperial applicants now sit the TMUA instead. Here is what changed, what the new test asks for, and the dates that matter for 2027 entry.",
    body: [
      { h: "What has actually changed" },
      { p: "Oxford used the Mathematics Admissions Test from 2007 to 2025. From 2026 entry it no longer runs. Applicants for Mathematics, Computer Science and the joint courses now sit the Test of Mathematics for University Admission instead. Imperial asks for the TMUA as well, for Mathematics, Computing, and Economics, Finance and Data Science." },
      { p: "If your school is still handing out MAT past papers, that is understandable. The change is recent and a lot of published guidance has not caught up. But the paper your child sits in October will not look like those papers." },

      { h: "What the TMUA is" },
      { p: "Two papers, taken on a computer, 75 minutes each, so two and a half hours in total. Each paper has 20 multiple choice questions." },
      { list: [
        "Paper 1, Applications of Mathematical Knowledge: A-level material applied to unfamiliar problems.",
        "Paper 2, Mathematical Reasoning: logic, proof, and judging whether an argument actually holds.",
      ]},
      { p: "Scores are reported on a scale from 1.0 to 9.0. There is no pass mark, and there is no negative marking, so leaving an answer blank is always worse than guessing." },

      { h: "The part most people underestimate" },
      { p: "Paper 2 is the one to watch. Most A-level students have spent years being rewarded for reaching the right answer by a reliable method. Paper 2 asks something different: is this argument sound, what follows from what, and where exactly does this proof break down." },
      { p: "That is a teachable skill, but it is rarely taught in school, and it is not something you absorb by doing more A-level questions. Students who assume the TMUA is simply harder A-level maths tend to find Paper 2 a nasty surprise." },

      { h: "How preparing for it differs from the MAT" },
      { p: "The MAT rewarded extended written solutions. The TMUA is entirely multiple choice, and that changes how you work. There are no method marks, so a sound approach that ends in an arithmetic slip scores nothing at all. Equally, you do not have to produce a full write-up, which makes eliminating options and working backwards from the answers perfectly legitimate tactics rather than cheating." },
      { p: "Just under four minutes a question sounds generous. It stops sounding generous once you have read a question properly and realised you have misread it." },

      { h: "Key dates for 2027 entry" },
      { list: [
        "Booking closes: 28 September 2026, 6pm UK time",
        "October test window: 12 to 16 October 2026",
        "Results released: 16 November 2026",
        "A second window runs 4 to 8 January 2027, but Oxford and Cambridge applicants need the October sitting",
      ]},
      { p: "Booking is done through the UAT-UK site, and it does not stay open until the UCAS deadline. Check whether your school is registering candidates or whether you need to book yourself, because assuming the school has it in hand catches families out every year." },

      { h: "What to do now" },
      { list: [
        "Confirm which test each course on the UCAS form actually requires. Universities have not all moved at the same time.",
        "Put the booking deadline in a calendar rather than trusting that someone else is handling it.",
        "Sit one full timed paper early, so you find out whether the real problem is content, pace or reasoning before spending months preparing.",
        "Give Paper 2 more time than feels natural. It is the least familiar part and usually the biggest gain.",
      ]},

      { h: "Check this yourself" },
      { p: "Admissions requirements change, sometimes at short notice. Confirm the details on the Oxford Mathematical Institute site, the UAT-UK site, and the course pages of every university you are applying to before relying on anything written here, including this article." },
    ],
  },
];
