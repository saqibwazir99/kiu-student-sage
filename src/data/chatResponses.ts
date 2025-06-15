export const chatResponses = {
  en: {
    // Admissions
    admissions: {
      text: `Admissions Information

Karakoram International University (KIU) offers comprehensive undergraduate and graduate programs. Here is detailed admission information:

Application Period: Spring Jan-Feb, Fall July-Aug

Entry Test: HEC-approved NTS test required

Minimum Requirements: 50% marks in intermediate/equivalent

Documents Required: Academic transcripts, CNIC/B-Form, passport photos, domicile certificate

Selection Process: Merit based with interviews for specific programs
`,
      buttons: [
        { text: "Application Process", action: "application_process" },
        { text: "Entry Test Details", action: "entry_test" },
        { text: "Required Documents", action: "documents" },
        { text: "Fee Structure", action: "fees" },
        { text: "Contact Admissions", action: "contact_admissions" }
      ]
    },
    application_process: {
      text: `Step-by-Step Application Process

1. Online Registration

Visit KIU official website

Create student portal account

Fill complete application form

2. Document Submission

Upload all required documents (scanned copies)

Ensure documents are clear and legible

3. Application Fee

Pay PKR 2,000 application fee

Use bank challan or online payment

4. Entry Test

Appear for NTS test at designated centers

Test includes English, Math, and subject-specific questions

5. Merit List

Check merit list on official website

Lists published within 2 weeks of test

6. Admission Confirmation

Pay admission fee to secure seat

Submit original documents for verification
`,
      buttons: [
        { text: "Official Website", action: "website" },
        { text: "Payment Methods", action: "payment_methods" },
        { text: "Important Dates", action: "admission_dates" }
      ]
    },
    entry_test: {
      text: `Entry Test Information (NTS)

Test Structure:

Duration: 3 hours

Total Questions: 100 MCQs

English: 30 questions

Mathematics: 30 questions

Subject-Specific: 40 questions

Test Centers:

Main KIU Campus, Gilgit

Regional centers in major cities

Islamabad, Karachi, Lahore centers available

Preparation Guidelines:

Review intermediate syllabus

Practice past papers (available on website)

Focus on English comprehension and basic math

Results:

Published within 10-15 days

Available on NTS and KIU websites

SMS alerts sent to registered numbers
`,
      buttons: [
        { text: "Download Past Papers", action: "past_papers" },
        { text: "Test Centers", action: "test_centers" },
        { text: "Merit Calculation", action: "merit_calculation" }
      ]
    },
    documents: {
      text: `Required Documents Checklist

For Undergraduate Programs:

Intermediate/A-Level certificate & transcript

Matriculation/O-Level certificate & transcript

CNIC or B-Form (copy)

Domicile certificate

4 passport-size photographs

Character certificate from last institution

Medical fitness certificate

For Graduate Programs:

Bachelor's degree certificate & transcript

Intermediate certificate & transcript

Matriculation certificate

CNIC copy

4 passport-size photographs

Work experience certificates (if applicable)

Research proposal (for research programs)

Important Notes:

All documents must be attested

Foreign qualifications require HEC equivalence

Submit both original and photocopies
`,
      buttons: [
        { text: "Document Verification", action: "verification" },
        { text: "Foreign Qualifications", action: "foreign_docs" },
        { text: "Help Desk", action: "contact_admissions" }
      ]
    },
    // Academics
    academics: {
      text: "Academic Programs at KIU\n\nKIU offers diverse programs across multiple disciplines:\n\nUndergraduate Programs (4 Years):\nBS Computer Science\nBS Software Engineering\nBS Information Technology\nBS Business Administration\nBS Economics\nBS English Literature\nBS Mass Communication\nBS Psychology\nBS Education\n\nGraduate Programs:\nMS Computer Science (2 Years)\nMS Management Sciences (1.5 Years)\nMBA (1.5-2 Years)\nM.Phil Programs (2 Years)\nPhD Programs (3-5 Years)\n\nSpecial Features:\nIndustry-relevant curriculum\nExperienced faculty\nModern labs and facilities\nResearch opportunities",
      buttons: [
        { text: "Computing Programs", action: "computing" },
        { text: "Business Programs", action: "business" },
        { text: "Humanities", action: "humanities" },
        { text: "Graduate Studies", action: "graduate_programs" },
        { text: "Life Sciences Faculty", action: "faculty_life_sciences" },
        { text: "Natural Sciences Faculty", action: "faculty_natural_sciences" },
        { text: "Social Sciences Faculty", action: "faculty_social_sciences" },
        { text: "Academic Calendar", action: "academic_calendar" }
      ]
    },
    computing: {
      text: "Computing & IT Programs\n\nBS Computer Science (4 Years)\nCore Areas: Programming, Algorithms, Data Structures, Software Engineering\nSpecializations: AI/ML, Cybersecurity, Web Development\nFinal Year Project mandatory\nInternship opportunities with tech companies\n\nBS Software Engineering (4 Years)\nFocus on software development lifecycle\nProject management and team collaboration\nIndustry partnerships for practical training\nAgile and DevOps methodologies\n\nBS Information Technology (4 Years)\nNetwork administration and database management\nIT infrastructure and cloud computing\nDigital forensics and IT security\nIndustry certifications integrated\n\nCareer Prospects:\nSoftware Developer/Engineer\nData Scientist/Analyst\nSystem Administrator\nCybersecurity Specialist\nIT Consultant\nResearch and Development",
      buttons: [
        { text: "Curriculum Details", action: "cs_curriculum" },
        { text: "Faculty Profiles", action: "cs_faculty" },
        { text: "Industry Partners", action: "industry_partners" },
        { text: "Fee Structure", action: "fees" }
      ]
    },
    business: {
      text: "Business & Management Programs\n\nBBA (4 Years)\nComprehensive business education\nSpecializations: Finance, Marketing, HR, Operations\nCase study methodology\nIndustry exposure through internships\nEntrepreneurship development\n\nBS Economics (4 Years)\nMicroeconomics and macroeconomics\nEconometrics and statistical analysis\nDevelopment economics focus\nResearch methodology\nPolicy analysis skills\n\nMBA Programs (1.5-2 Years)\nExecutive MBA for working professionals\nRegular MBA for fresh graduates\nSpecializations in various fields\nInternational exposure opportunities\nLeadership development programs\n\nCareer Opportunities:\nBusiness Manager/Executive\nFinancial Analyst\nMarketing Specialist\nHuman Resource Manager\nEconomic Researcher\nEntrepreneur/Business Owner",
      buttons: [
        { text: "Finance Specialization", action: "finance" },
        { text: "Marketing Track", action: "marketing" },
        { text: "MBA Details", action: "mba_details" },
        { text: "Career Services", action: "career_services" }
      ]
    },
    campus: {
      text: `Campus Life at KIU

Campus life at Karakoram International University (KIU) is vibrant and engaging, offering students a well-rounded experience.

1. Modern Facilities: KIU has modern campus facilities including lecture halls, laboratories, and computer labs supporting a great learning environment.

2. Student Societies and Clubs: Various societies and clubs cater to diverse interests and help students engage in activities and connect with peers.

3. Sports and Recreation: Sports facilities are provided for many activities, promoting fitness and teamwork among students.

4. Hostel Accommodation: Hostel facilities offer a comfortable living environment and community for residents.

5. Library and Research Facilities: The well-equipped library supports academic research and study with a wide range of resources.

6. Student Support Services: Academic counseling, career guidance, and mental health resources help students succeed.

7. Cultural and Academic Events: Seminars, cultural events, and workshops are held throughout the year.

For campus facilities, visit: https://www.kiu.edu.pk/facilities/campus-facilities
`,
      buttons: [
        { text: "Campus Facilities", action: "facilities" },
        { text: "Accommodation", action: "accommodation" },
        { text: "Student Activities", action: "student_activities" },
        { text: "Transportation", action: "transport" },
        { text: "Dining Options", action: "dining" }
      ]
    },
    facilities: {
      text: `Campus Facilities

Academic Facilities:

Central Library: 50,000+ books, digital resources, research databases

Computer Labs: Latest software

Science Labs: Physics, Chemistry, Biology labs

Language Lab: For English and communication skills

Seminar Halls: Equipped with multimedia

Sports & Recreation:

Multipurpose sports complex

Indoor gymnasium

Cricket ground

Basketball and volleyball courts

Table tennis

Fitness center

Support Services:

Medical center

Counseling and career guidance

IT support

Banking

Prayer areas

Cafeteria and food courts

Technology:

Campus-wide WiFi

Video conferencing

Online learning management system

Digital notice boards

Details: https://www.kiu.edu.pk/facilities/campus-facilities
`,
      buttons: [
        { text: "Virtual Campus Tour", action: "virtual_tour" },
        { text: "Campus Map", action: "campus_map" },
        { text: "Facility Timings", action: "facility_timings" }
      ]
    },
    accommodation: {
      text: `Student Accommodation

On-Campus Hostels:

Separate hostels for male and female students

Furnished rooms with study tables and wardrobes

Common rooms with TV and recreational facilities

24/7 security and warden supervision

Mess facility with nutritious meals

Laundry services available

Off-Campus Options:

University-approved private hostels

Shared apartments near campus

Local family accommodations

Rental assistance from student affairs

Accommodation Fees:

On-campus hostel: PKR 15,000-20,000/semester

Mess charges: PKR 12,000-15,000/month

Private accommodations vary

Hostel Rules:

Curfew timings strictly followed

No smoking or prohibited items

Regular room inspections

Guest policy regulations

Academic performance monitoring
`,
      buttons: [
        { text: "Hostel Application", action: "hostel_application" },
        { text: "Mess Menu", action: "mess_menu" },
        { text: "Hostel Contact", action: "hostel_contact" }
      ]
    },
    fees: {
      text: `Fee Structure (Per Semester)

Undergraduate Programs:

BS Computer Science: PKR 85,000

BS Software Engineering: PKR 85,000

BS Information Technology: PKR 80,000

BS Business Administration: PKR 70,000

BS Economics: PKR 65,000

BS English/Mass Comm: PKR 60,000

Graduate Programs:

MS Computer Science: PKR 95,000

MS Management Sciences: PKR 85,000

MBA: PKR 90,000

M.Phil Programs: PKR 75,000

Additional Charges:

Admission Fee: PKR 10,000 (one-time)

Security Deposit: PKR 5,000 (refundable)

Lab Fee: PKR 5,000-10,000/semester

Library Fee: PKR 2,000/semester

Student Activity Fee: PKR 1,000/semester

Payment Options:

Bank challan (recommended)

Online banking

Credit/debit cards

Installment plans available
`,
      buttons: [
        { text: "Scholarships", action: "scholarships" },
        { text: "Payment Methods", action: "payment_methods" },
        { text: "Fee Calculator", action: "fee_calculator" },
        { text: "Financial Aid", action: "financial_aid" }
      ]
    },
    scholarships: {
      text: `Scholarship Opportunities

Merit-Based Scholarships:

100% Tuition Fee Waiver: For position holders

50% Fee Concession: For top 5% students

25% Fee Reduction: For good academic performance

Semester-wise renewal based on CGPA

Need-Based Financial Aid:

Up to 75% fee concession for deserving students

Monthly stipends for exceptional cases

Work-study programs available

Emergency financial assistance

Government Scholarships:

Higher Education Commission (HEC) scholarships

Provincial government scholarships

Prime Minister's Youth Program

Overseas scholarship programs

Special Scholarships:

Sports scholarships for talented athletes

Cultural activities scholarships

Community service scholarships

Alumni-sponsored scholarships

Application Process:

Submit scholarship application with admission

Provide income certificates for need-based aid

Maintain required CGPA for renewal

Regular review and assessment
`,
      buttons: [
        { text: "Apply for Scholarship", action: "scholarship_apply" },
        { text: "Eligibility Criteria", action: "scholarship_criteria" },
        { text: "Required Documents", action: "scholarship_docs" },
        { text: "Scholarships Home", action: "scholarships_home" }
      ]
    },
    contact_admissions: {
      text: `Contact Admissions Office

Main Campus:

Karakoram International University

Gilgit, Gilgit-Baltistan, Pakistan

Phone Numbers:

Main Office: +92-5811-960008

Admissions: +92-5811-960009

Registrar: +92-5811-960010

Email Addresses:

General: info@kiu.edu.pk

Admissions: admissions@kiu.edu.pk

Academic: academic@kiu.edu.pk

Office Hours:

Monday - Friday: 8:00 AM - 4:00 PM

Saturday: 8:00 AM - 12:00 PM

Sunday: Closed

Other Contact Methods:

WhatsApp: +92-300-5811960

Facebook: KIU Official

Website: www.kiu.edu.pk

Regional Offices:

Islamabad Liaison Office

Karachi Information Center
`,
      buttons: [
        { text: "Campus Location", action: "campus_location" },
        { text: "Social Media", action: "social_media" },
        { text: "How to Reach", action: "directions" }
      ]
    },
    website: {
      text: `Official KIU Website

Visit our official website for:

Latest announcements and news

Detailed program information

Faculty profiles and research

Student portal access

Online application system

Academic calendar

Examination schedules

Website: www.kiu.edu.pk

Student Portal Features:

Check admission status

View academic transcripts

Download fee challans

Access course materials

Submit assignments

Check examination results
`,
      buttons: [
        { text: "Student Portal", action: "student_portal" },
        { text: "News & Events", action: "news_events" },
        { text: "Academic Resources", action: "academic_resources" }
      ]
    },
    default: {
      text: "Welcome to KIU Assistant! 🎓\n\nI can provide detailed information about Karakoram International University including:\n\nAdmissions: Application process, requirements, deadlines\nAcademic Programs: Undergraduate, graduate, and doctoral programs\nCampus Life: Facilities, accommodation, student activities\nFee Structure: Tuition fees, scholarships, financial aid\nContact Information: Office details, directions, support\n\nWhat specific information would you like to know about KIU?",
      buttons: [
        { text: "Admissions", action: "admissions" },
        { text: "Academic Programs", action: "academics" },
        { text: "Campus Life", action: "campus" },
        { text: "Fees & Scholarships", action: "fees" }
      ]
    },
    lms: {
      text: `KIU LMS Portal

Access all your course materials, submit assignments, and communicate with faculty on the official LMS:

👉 https://lms.kiu.edu.pk

If you have questions or face issues, please check the FAQs:

👉 https://lms.kiu.edu.pk/faqs
`,
      buttons: [
        { text: "LMS FAQs", action: "lms_faqs" }
      ]
    },
    academic_calendar: {
      text: `KIU Academic Calendar

Stay updated with important academic dates here:

👉 https://www.kiu.edu.pk/calendar
`,
    },
    advance_studies: {
      text: `Advance Studies & Research Office

Find out about research programs, proposals, and more:

👉 https://www.kiu.edu.pk/office/advance-studies-research
`,
    }
  },

  ur: {
    admissions: {
      text: `داخلہ کی معلومات

قراقرم انٹرنیشنل یونیورسٹی مختلف شعبوں میں انڈرگریجویٹ اور گریجویٹ پروگرام پیش کرتی ہے:

درخواست کی مدت: بہار جنوری-فروری, خزاں جولائی-اگست

داخلہ ٹیسٹ: HEC منظور شدہ NTS ٹیسٹ ضروری

کم سے کم اہلیت: انٹرمیڈیٹ میں 50 فیصد نمبر

مطلوبہ دستاویزات: تعلیمی سرٹیفکیٹس، شناختی کارڈ، تصاویر، ڈومیسائل

انتخاب کا عمل: میرٹ کی بنیاد پر انٹرویو کے ساتھ
`,
      buttons: [
        { text: "درخواست کا عمل", action: "application_process" },
        { text: "داخلہ ٹیسٹ", action: "entry_test" },
        { text: "مطلوبہ دستاویزات", action: "documents" },
        { text: "فیس کی تفصیلات", action: "fees" },
        { text: "داخلہ سے رابطہ", action: "contact_admissions" }
      ]
    },
    campus: {
      text: `KIU میں کیمپس لائف

KIU میں کیمپس لائف چمکدار اور متحرک ہے جس میں طلباء کو پرمعیاری ماحول فراہم کیا جاتا ہے۔

1. جدید سہولتیں: لیکچر ہالز، لیبارٹریز اور کمپیوٹر لیبز۔

2. طلبہ سوسائٹیز اور کلبس: طلبہ کی سرگرمیوں کے لیے مختلف تنظیمیں۔

3. کھیل اور تفریح: متعدد کھیلوں کی سہولتیں، جسمانی صحت اور تعاون کے لیے۔

4. ہاسٹل رہائش: پرامن اور سازگار ماحول۔

5. لائبریری اور ریسرچ: مواد اور تحقیقی سہولتیں

6. سپورٹ سروسز: رہنمائی اور سپورٹ سروسز

7. تقریبات: ثقافتی اور تعلیمی تقریبات

کیمپس سہولتیں دیکھیں: https://www.kiu.edu.pk/facilities/campus-facilities
`,
      buttons: [
        { text: "کیمپس کی سہولات", action: "facilities" },
        { text: "رہائش", action: "accommodation" },
        { text: "طلبا کی سرگرمیاں", action: "student_activities" },
        { text: "نقل و حمل", action: "transport" }
      ]
    },
    facilities: {
      text: `کیمپس کی سہولیات

تعلیمی: مرکزی لائبریری، کمپیوٹر اور سائنس لیبز، زبان کی لیب، سیمینار ہال

کھیل: کھیل کمپلیکس، جیم، کرکٹ گراؤنڈ، باسکٹ بال و والی بال، ٹیبل ٹینس، فٹنس سینٹر

سہولیات: میڈیکل سینٹر، رہنمائی، آئی ٹی سپورٹ، بینکنگ، نماز گاہ، کیفےٹیریا

ٹیکنالوجی: وائی فائی، ویڈیو کانفرنسنگ، آن لائن LMS، ڈیجیٹل نوٹس

مزید تفصیل: https://www.kiu.edu.pk/facilities/campus-facilities
`,
      buttons: [
        { text: "Virtual Campus Tour", action: "virtual_tour" },
        { text: "Campus Map", action: "campus_map" },
        { text: "Facility Timings", action: "facility_timings" }
      ]
    },
    default: {
      text: "KIU اسسٹنٹ میں خوش آمدید! 🎓\n\nمیں قراقرم انٹرنیشنل یونیورسٹی کے بارے میں تفصیلی معلومات فراہم کر سکتا ہوں:\n\nداخلہ: درخواست کا عمل، اہلیت، آخری تاریخیں\nتعلیمی پروگرام: انڈرگریجویٹ، گریجویٹ پروگرام\nکیمپس لائف: سہولات، رہائش، طلبا کی سرگرمیاں\nفیس: ٹیوشن فیس، وظائف، مالی امداد\nرابطے کی معلومات: دفتری تفصیلات، رہنمائی\n\nآپ KIU کے بارے میں کون سی خاص معلومات چاہتے ہیں؟",
      buttons: [
        { text: "داخلہ", action: "admissions" },
        { text: "تعلیمی پروگرام", action: "academics" },
        { text: "کیمپس لائف", action: "campus" },
        { text: "فیسیں اور وظائف", action: "fees" }
      ]
    }
  },

  essa_wali: {
    text: "Essa Wali is a web developer currently working in the KIU IT Section.",
    buttons: [
      { text: "KIU IT Section", action: "kiu_it_section" }
    ]
  },
  lms: {
    text: `KIU LMS Portal

Access all your course materials, submit assignments, and communicate with faculty on the official LMS:

👉 https://lms.kiu.edu.pk

If you have questions or face issues, please check the FAQs:

👉 https://lms.kiu.edu.pk/faqs
`,
    buttons: [
      { text: "LMS FAQs", action: "lms_faqs" }
    ]
  },
  academic_calendar: {
    text: `KIU Academic Calendar

Stay updated with important academic dates here:

👉 https://www.kiu.edu.pk/calendar
`,
  },
  advance_studies: {
    text: `Advance Studies & Research Office

Find out about research programs, proposals, and more:

👉 https://www.kiu.edu.pk/office/advance-studies-research
`,
  }
};
