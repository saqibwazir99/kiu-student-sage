export const chatResponses = {
  en: {
    // Admissions
    admissions: {
      text: "Admissions Information\n\nKarakoram International University (KIU) offers comprehensive undergraduate and graduate programs. Here is detailed admission information:\n\nApplication Period: Spring Jan-Feb, Fall July-Aug\nEntry Test: HEC-approved NTS test required\nMinimum Requirements: 50% marks in intermediate/equivalent\nDocuments Required: Academic transcripts, CNIC/B-Form, passport photos, domicile certificate\nSelection Process: Merit based with interviews for specific programs",
      buttons: [
        { text: "Application Process", action: "application_process" },
        { text: "Entry Test Details", action: "entry_test" },
        { text: "Required Documents", action: "documents" },
        { text: "Fee Structure", action: "fees" },
        { text: "Contact Admissions", action: "contact_admissions" }
      ]
    },
    application_process: {
      text: "Step-by-Step Application Process\n\n1. Online Registration\nVisit KIU official website\nCreate student portal account\nFill complete application form\n\n2. Document Submission\nUpload all required documents (scanned copies)\nEnsure documents are clear and legible\n\n3. Application Fee\nPay PKR 2,000 application fee\nUse bank challan or online payment\n\n4. Entry Test\nAppear for NTS test at designated centers\nTest includes English, Math, and subject-specific questions\n\n5. Merit List\nCheck merit list on official website\nLists published within 2 weeks of test\n\n6. Admission Confirmation\nPay admission fee to secure seat\nSubmit original documents for verification",
      buttons: [
        { text: "Official Website", action: "website" },
        { text: "Payment Methods", action: "payment_methods" },
        { text: "Important Dates", action: "admission_dates" }
      ]
    },
    entry_test: {
      text: "Entry Test Information (NTS)\n\nTest Structure:\nDuration: 3 hours\nTotal Questions: 100 MCQs\nEnglish: 30 questions\nMathematics: 30 questions\nSubject-Specific: 40 questions\n\nTest Centers:\nMain KIU Campus, Gilgit\nRegional centers in major cities\nIslamabad, Karachi, Lahore centers available\n\nPreparation Guidelines:\nReview intermediate syllabus\nPractice past papers (available on website)\nFocus on English comprehension and basic math\n\nResults:\nPublished within 10-15 days\nAvailable on NTS and KIU websites\nSMS alerts sent to registered numbers",
      buttons: [
        { text: "Download Past Papers", action: "past_papers" },
        { text: "Test Centers", action: "test_centers" },
        { text: "Merit Calculation", action: "merit_calculation" }
      ]
    },
    documents: {
      text: "Required Documents Checklist\n\nFor Undergraduate Programs:\nIntermediate/A-Level certificate & transcript\nMatriculation/O-Level certificate & transcript\nCNIC or B-Form (copy)\nDomicile certificate\n4 passport-size photographs\nCharacter certificate from last institution\nMedical fitness certificate\n\nFor Graduate Programs:\nBachelor's degree certificate & transcript\nIntermediate certificate & transcript\nMatriculation certificate\nCNIC copy\n4 passport-size photographs\nWork experience certificates (if applicable)\nResearch proposal (for research programs)\n\nImportant Notes:\nAll documents must be attested\nForeign qualifications require HEC equivalence\nSubmit both original and photocopies",
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
      text: "Campus Life at KIU\n\nCampus life at Karakoram International University (KIU) is vibrant and engaging, offering students a well-rounded experience.\n\n1. Modern Facilities: KIU has modern campus facilities including lecture halls, laboratories, and computer labs supporting a great learning environment.\n2. Student Societies and Clubs: Various societies and clubs cater to diverse interests and help students engage in activities and connect with peers.\n3. Sports and Recreation: Sports facilities are provided for many activities, promoting fitness and teamwork among students.\n4. Hostel Accommodation: Hostel facilities offer a comfortable living environment and community for residents.\n5. Library and Research Facilities: The well-equipped library supports academic research and study with a wide range of resources.\n6. Student Support Services: Academic counseling, career guidance, and mental health resources help students succeed.\n7. Cultural and Academic Events: Seminars, cultural events, and workshops are held throughout the year.\n\nFor campus facilities, visit: https://www.kiu.edu.pk/facilities/campus-facilities",
      buttons: [
        { text: "Campus Facilities", action: "facilities" },
        { text: "Accommodation", action: "accommodation" },
        { text: "Student Activities", action: "student_activities" },
        { text: "Transportation", action: "transport" },
        { text: "Dining Options", action: "dining" }
      ]
    },
    facilities: {
      text: "Campus Facilities\n\nAcademic Facilities:\nCentral Library: 50,000+ books, digital resources, research databases\nComputer Labs: Latest software\nScience Labs: Physics, Chemistry, Biology labs\nLanguage Lab: For English and communication skills\nSeminar Halls: Equipped with multimedia\n\nSports & Recreation:\nMultipurpose sports complex\nIndoor gymnasium\nCricket ground\nBasketball and volleyball courts\nTable tennis\nFitness center\n\nSupport Services:\nMedical center\nCounseling and career guidance\nIT support\nBanking\nPrayer areas\nCafeteria and food courts\n\nTechnology:\nCampus-wide WiFi\nVideo conferencing\nOnline learning management system\nDigital notice boards\n\nDetails: https://www.kiu.edu.pk/facilities/campus-facilities",
      buttons: [
        { text: "Virtual Campus Tour", action: "virtual_tour" },
        { text: "Campus Map", action: "campus_map" },
        { text: "Facility Timings", action: "facility_timings" }
      ]
    },
    accommodation: {
      text: "Student Accommodation\n\nOn-Campus Hostels:\nSeparate hostels for male and female students\nFurnished rooms with study tables and wardrobes\nCommon rooms with TV and recreational facilities\n24/7 security and warden supervision\nMess facility with nutritious meals\nLaundry services available\n\nOff-Campus Options:\nUniversity-approved private hostels\nShared apartments near campus\nLocal family accommodations\nRental assistance from student affairs\n\nAccommodation Fees:\nOn-campus hostel: PKR 15,000-20,000/semester\nMess charges: PKR 12,000-15,000/month\nPrivate accommodations vary\n\nHostel Rules:\nCurfew timings strictly followed\nNo smoking or prohibited items\nRegular room inspections\nGuest policy regulations\nAcademic performance monitoring",
      buttons: [
        { text: "Hostel Application", action: "hostel_application" },
        { text: "Mess Menu", action: "mess_menu" },
        { text: "Hostel Contact", action: "hostel_contact" }
      ]
    },
    fees: {
      text: "Fee Structure (Per Semester)\n\nUndergraduate Programs:\nBS Computer Science: PKR 85,000\nBS Software Engineering: PKR 85,000\nBS Information Technology: PKR 80,000\nBS Business Administration: PKR 70,000\nBS Economics: PKR 65,000\nBS English/Mass Comm: PKR 60,000\n\nGraduate Programs:\nMS Computer Science: PKR 95,000\nMS Management Sciences: PKR 85,000\nMBA: PKR 90,000\nM.Phil Programs: PKR 75,000\n\nAdditional Charges:\nAdmission Fee: PKR 10,000 (one-time)\nSecurity Deposit: PKR 5,000 (refundable)\nLab Fee: PKR 5,000-10,000/semester\nLibrary Fee: PKR 2,000/semester\nStudent Activity Fee: PKR 1,000/semester\n\nPayment Options:\nBank challan (recommended)\nOnline banking\nCredit/debit cards\nInstallment plans available",
      buttons: [
        { text: "Scholarships", action: "scholarships" },
        { text: "Payment Methods", action: "payment_methods" },
        { text: "Fee Calculator", action: "fee_calculator" },
        { text: "Financial Aid", action: "financial_aid" }
      ]
    },
    scholarships: {
      text: "Scholarship Opportunities\n\nMerit-Based Scholarships:\n100% Tuition Fee Waiver: For position holders\n50% Fee Concession: For top 5% students\n25% Fee Reduction: For good academic performance\nSemester-wise renewal based on CGPA\n\nNeed-Based Financial Aid:\nUp to 75% fee concession for deserving students\nMonthly stipends for exceptional cases\nWork-study programs available\nEmergency financial assistance\n\nGovernment Scholarships:\nHigher Education Commission (HEC) scholarships\nProvincial government scholarships\nPrime Minister's Youth Program\nOverseas scholarship programs\n\nSpecial Scholarships:\nSports scholarships for talented athletes\nCultural activities scholarships\nCommunity service scholarships\nAlumni-sponsored scholarships\n\nApplication Process:\nSubmit scholarship application with admission\nProvide income certificates for need-based aid\nMaintain required CGPA for renewal\nRegular review and assessment",
      buttons: [
        { text: "Apply for Scholarship", action: "scholarship_apply" },
        { text: "Eligibility Criteria", action: "scholarship_criteria" },
        { text: "Required Documents", action: "scholarship_docs" },
        { text: "Scholarships Home", action: "scholarships_home" }
      ]
    },
    contact_admissions: {
      text: "Contact Admissions Office\n\nMain Campus:\nKarakoram International University\nGilgit, Gilgit-Baltistan, Pakistan\n\nPhone Numbers:\nMain Office: +92-5811-960008\nAdmissions: +92-5811-960009\nRegistrar: +92-5811-960010\n\nEmail Addresses:\nGeneral: info@kiu.edu.pk\nAdmissions: admissions@kiu.edu.pk\nAcademic: academic@kiu.edu.pk\n\nOffice Hours:\nMonday - Friday: 8:00 AM - 4:00 PM\nSaturday: 8:00 AM - 12:00 PM\nSunday: Closed\n\nOther Contact Methods:\nWhatsApp: +92-300-5811960\nFacebook: KIU Official\nWebsite: www.kiu.edu.pk\n\nRegional Offices:\nIslamabad Liaison Office\nKarachi Information Center",
      buttons: [
        { text: "Campus Location", action: "campus_location" },
        { text: "Social Media", action: "social_media" },
        { text: "How to Reach", action: "directions" }
      ]
    },
    website: {
      text: "Official KIU Website\n\nVisit our official website for:\nLatest announcements and news\nDetailed program information\nFaculty profiles and research\nStudent portal access\nOnline application system\nAcademic calendar\nExamination schedules\n\nWebsite: www.kiu.edu.pk\n\nStudent Portal Features:\nCheck admission status\nView academic transcripts\nDownload fee challans\nAccess course materials\nSubmit assignments\nCheck examination results",
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
      text: "KIU LMS Portal\n\nAccess all your course materials, submit assignments, and communicate with faculty on the official LMS:\n👉 https://lms.kiu.edu.pk\n\nIf you have questions or face issues, please check the FAQs:\n👉 https://lms.kiu.edu.pk/faqs",
      buttons: [
        { text: "LMS FAQs", action: "lms_faqs" }
      ]
    },
    academic_calendar: {
      text: "KIU Academic Calendar\n\nStay updated with important academic dates here:\n👉 https://www.kiu.edu.pk/calendar"
    },
    advance_studies: {
      text: "Advance Studies & Research Office\nFind out about research programs, proposals, and more:\n👉 https://www.kiu.edu.pk/office/advance-studies-research"
    }
  },

  ur: {
    admissions: {
      text: "داخلہ کی معلومات\n\nقراقرم انٹرنیشنل یونیورسٹی مختلف شعبوں میں انڈرگریجویٹ اور گریجویٹ پروگرام پیش کرتی ہے:\n\nدرخواست کی مدت: بہار جنوری-فروری, خزاں جولائی-اگست\nداخلہ ٹیسٹ: HEC منظور شدہ NTS ٹیسٹ ضروری\nکم سے کم اہلیت: انٹرمیڈیٹ میں 50 فیصد نمبر\nمطلوبہ دستاویزات: تعلیمی سرٹیفکیٹس، شناختی کارڈ، تصاویر، ڈومیسائل\nانتخاب کا عمل: میرٹ کی بنیاد پر انٹرویو کے ساتھ",
      buttons: [
        { text: "درخواست کا عمل", action: "application_process" },
        { text: "داخلہ ٹیسٹ", action: "entry_test" },
        { text: "مطلوبہ دستاویزات", action: "documents" },
        { text: "فیس کی تفصیلات", action: "fees" },
        { text: "داخلہ سے رابطہ", action: "contact_admissions" }
      ]
    },
    campus: {
      text: "KIU میں کیمپس لائف\n\nKIU میں کیمپس لائف چمکدار اور متحرک ہے جس میں طلباء کو پرمعیاری ماحول فراہم کیا جاتا ہے۔\n\n1. جدید سہولتیں: لیکچر ہالز، لیبارٹریز اور کمپیوٹر لیبز۔\n2. طلبہ سوسائٹیز اور کلبس: طلبہ کی سرگرمیوں کے لیے مختلف تنظیمیں۔\n3. کھیل اور تفریح: متعدد کھیلوں کی سہولتیں، جسمانی صحت اور تعاون کے لیے۔\n4. ہاسٹل رہائش: پرامن اور سازگار ماحول۔\n5. لائبریری اور ریسرچ: مواد اور تحقیقی سہولتیں\n6. سپورٹ سروسز: رہنمائی اور سپورٹ سروسز\n7. تقریبات: ثقافتی اور تعلیمی تقریبات\n\nکیمپس سہولتیں دیکھیں: https://www.kiu.edu.pk/facilities/campus-facilities",
      buttons: [
        { text: "کیمپس کی سہولات", action: "facilities" },
        { text: "رہائش", action: "accommodation" },
        { text: "طلبا کی سرگرمیاں", action: "student_activities" },
        { text: "نقل و حمل", action: "transport" }
      ]
    },
    facilities: {
      text: "کیمپس کی سہولیات\n\nتعلیمی: مرکزی لائبریری، کمپیوٹر اور سائنس لیبز، زبان کی لیب، سیمینار ہال\nکھیل: کھیل کمپلیکس، جیم، کرکٹ گراؤنڈ، باسکٹ بال و والی بال، ٹیبل ٹینس، فٹنس سینٹر\nسہولیات: میڈیکل سینٹر، رہنمائی، آئی ٹی سپورٹ، بینکنگ، نماز گاہ، کیفےٹیریا\nٹیکنالوجی: وائی فائی، ویڈیو کانفرنسنگ، آن لائن LMS، ڈیجیٹل نوٹس\n\nمزید تفصیل: https://www.kiu.edu.pk/facilities/campus-facilities",
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
    text: "KIU LMS Portal\n\nAccess all your course materials, submit assignments, and communicate with faculty on the official LMS:\n👉 https://lms.kiu.edu.pk\n\nIf you have questions or face issues, please check the FAQs:\n👉 https://lms.kiu.edu.pk/faqs",
    buttons: [
      { text: "LMS FAQs", action: "lms_faqs" }
    ]
  },
  academic_calendar: {
    text: "KIU Academic Calendar\n\nStay updated with important academic dates here:\n👉 https://www.kiu.edu.pk/calendar"
  },
  advance_studies: {
    text: "Advance Studies & Research Office\nFind out about research programs, proposals, and more:\n👉 https://www.kiu.edu.pk/office/advance-studies-research"
  }
};
