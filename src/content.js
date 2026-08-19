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
