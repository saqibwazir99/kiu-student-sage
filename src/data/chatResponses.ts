export const chatResponses = {
  en: {
    // Admissions
    admissions: {
      text: "📋 Admissions Information\n\nKarakoram International University (KIU) offers comprehensive undergraduate and graduate programs. Here's detailed admission information:\n\nApplication Period: Spring (Jan-Feb), Fall (July-Aug)\nEntry Test: HEC-approved NTS test required\nMinimum Requirements: 50% marks in intermediate/equivalent\nDocuments Required: Academic transcripts, CNIC/B-Form, passport photos, domicile certificate\nSelection Process: Merit-based with interviews for specific programs",
      buttons: [
        { text: "📝 Application Process", action: "application_process" },
        { text: "📋 Entry Test Details", action: "entry_test" },
        { text: "📄 Required Documents", action: "documents" },
        { text: "💰 Fee Structure", action: "fees" },
        { text: "📞 Contact Admissions", action: "contact_admissions" }
      ]
    },
    application_process: {
      text: "📝 Step-by-Step Application Process\n\n1. Online Registration\nVisit KIU official website\nCreate student portal account\nFill complete application form\n\n2. Document Submission\nUpload all required documents (scanned copies)\nEnsure documents are clear and legible\n\n3. Application Fee\nPay PKR 2,000 application fee\nUse bank challan or online payment\n\n4. Entry Test\nAppear for NTS test at designated centers\nTest includes English, Math, and subject-specific questions\n\n5. Merit List\nCheck merit list on official website\nLists published within 2 weeks of test\n\n6. Admission Confirmation\nPay admission fee to secure seat\nSubmit original documents for verification",
      buttons: [
        { text: "🌐 Official Website", action: "website" },
        { text: "💳 Payment Methods", action: "payment_methods" },
        { text: "📅 Important Dates", action: "admission_dates" }
      ]
    },
    entry_test: {
      text: "📋 Entry Test Information (NTS)\n\nTest Structure:\nDuration: 3 hours\nTotal Questions: 100 MCQs\nEnglish: 30 questions\nMathematics: 30 questions\nSubject-Specific: 40 questions\n\nTest Centers:\nMain KIU Campus, Gilgit\nRegional centers in major cities\nIslamabad, Karachi, Lahore centers available\n\nPreparation Guidelines:\nReview intermediate syllabus\nPractice past papers (available on website)\nFocus on English comprehension and basic math\n\nResults:\nPublished within 10-15 days\nAvailable on NTS and KIU websites\nSMS alerts sent to registered numbers",
      buttons: [
        { text: "📚 Download Past Papers", action: "past_papers" },
        { text: "📍 Test Centers", action: "test_centers" },
        { text: "📊 Merit Calculation", action: "merit_calculation" }
      ]
    },
    documents: {
      text: "📄 Required Documents Checklist\n\nFor Undergraduate Programs:\nIntermediate/A-Level certificate & transcript\nMatriculation/O-Level certificate & transcript\nCNIC or B-Form (copy)\nDomicile certificate\n4 passport-size photographs\nCharacter certificate from last institution\nMedical fitness certificate\n\nFor Graduate Programs:\nBachelor's degree certificate & transcript\nIntermediate certificate & transcript\nMatriculation certificate\nCNIC copy\n4 passport-size photographs\nWork experience certificates (if applicable)\nResearch proposal (for research programs)\n\nImportant Notes:\nAll documents must be attested\nForeign qualifications require HEC equivalence\nSubmit both original and photocopies",
      buttons: [
        { text: "📋 Document Verification", action: "verification" },
        { text: "🌍 Foreign Qualifications", action: "foreign_docs" },
        { text: "📞 Help Desk", action: "contact_admissions" }
      ]
    },
    // Academics
    academics: {
      text: "📚 Academic Programs at KIU\n\nKIU offers diverse programs across multiple disciplines:\n\n🎓 Undergraduate Programs (4 Years):\nBS Computer Science\nBS Software Engineering\nBS Information Technology\nBS Business Administration\nBS Economics\nBS English Literature\nBS Mass Communication\nBS Psychology\nBS Education\n\n🎓 Graduate Programs:\nMS Computer Science (2 Years)\nMS Management Sciences (1.5 Years)\nMBA (1.5-2 Years)\nM.Phil Programs (2 Years)\nPhD Programs (3-5 Years)\n\n🏆 Special Features:\nIndustry-relevant curriculum\nExperienced faculty\nModern labs and facilities\nResearch opportunities",
      buttons: [
        { text: "💻 Computing Programs", action: "computing" },
        { text: "💼 Business Programs", action: "business" },
        { text: "📖 Humanities", action: "humanities" },
        { text: "🎓 Graduate Studies", action: "graduate_programs" },
        { text: "👩‍🔬 Life Sciences Faculty", action: "faculty_life_sciences" },
        { text: "📚 Natural Sciences Faculty", action: "faculty_natural_sciences" },
        { text: "🧑‍🎓 Social Sciences Faculty", action: "faculty_social_sciences" },
        { text: "🗓️ Academic Calendar", action: "academic_calendar" }
      ]
    },
    computing: {
      text: "💻 Computing & IT Programs\n\nBS Computer Science (4 Years)\nCore Areas: Programming, Algorithms, Data Structures, Software Engineering\nSpecializations: AI/ML, Cybersecurity, Web Development\nFinal Year Project mandatory\nInternship opportunities with tech companies\n\nBS Software Engineering (4 Years)\nFocus on software development lifecycle\nProject management and team collaboration\nIndustry partnerships for practical training\nAgile and DevOps methodologies\n\nBS Information Technology (4 Years)\nNetwork administration and database management\nIT infrastructure and cloud computing\nDigital forensics and IT security\nIndustry certifications integrated\n\nCareer Prospects:\nSoftware Developer/Engineer\nData Scientist/Analyst\nSystem Administrator\nCybersecurity Specialist\nIT Consultant\nResearch and Development",
      buttons: [
        { text: "📋 Curriculum Details", action: "cs_curriculum" },
        { text: "👨‍🏫 Faculty Profiles", action: "cs_faculty" },
        { text: "🏢 Industry Partners", action: "industry_partners" },
        { text: "💰 Fee Structure", action: "fees" }
      ]
    },
    business: {
      text: "💼 Business & Management Programs\n\nBBA (4 Years)\nComprehensive business education\nSpecializations: Finance, Marketing, HR, Operations\nCase study methodology\nIndustry exposure through internships\nEntrepreneurship development\n\nBS Economics (4 Years)\nMicroeconomics and macroeconomics\nEconometrics and statistical analysis\nDevelopment economics focus\nResearch methodology\nPolicy analysis skills\n\nMBA Programs (1.5-2 Years)\nExecutive MBA for working professionals\nRegular MBA for fresh graduates\nSpecializations in various fields\nInternational exposure opportunities\nLeadership development programs\n\nCareer Opportunities:\nBusiness Manager/Executive\nFinancial Analyst\nMarketing Specialist\nHuman Resource Manager\nEconomic Researcher\nEntrepreneur/Business Owner",
      buttons: [
        { text: "📈 Finance Specialization", action: "finance" },
        { text: "📊 Marketing Track", action: "marketing" },
        { text: "🏢 MBA Details", action: "mba_details" },
        { text: "💼 Career Services", action: "career_services" }
      ]
    },
    campus: {
      text: "🏫 Campus Life at KIU\n\nExperience vibrant campus life in the beautiful Gilgit-Baltistan region:\n\n🏗️ Modern Facilities:\nState-of-the-art computer labs\nWell-equipped science laboratories\nCentral library with digital resources\nSports complex and gymnasium\nModern classrooms with AV equipment\nHigh-speed internet connectivity\n\n🎭 Student Activities:\nStudent societies and clubs\nAnnual cultural festival\nSports tournaments\nDebate and literary competitions\nCommunity service programs\nLeadership development workshops\n\n🌄 Unique Location:\nScenic mountain campus\nFresh air and clean environment\nAdventure sports opportunities\nCultural diversity\nSafe and secure environment",
      buttons: [
        { text: "🏗️ Campus Facilities", action: "facilities" },
        { text: "🏠 Accommodation", action: "accommodation" },
        { text: "🎭 Student Activities", action: "student_activities" },
        { text: "🚌 Transportation", action: "transport" },
        { text: "🍽️ Dining Options", action: "dining" }
      ]
    },
    facilities: {
      text: "🏗️ Campus Facilities\n\n📚 Academic Facilities:\nCentral Library: 50,000+ books, digital resources, research databases\nComputer Labs: 200+ workstations with latest software\nScience Labs: Physics, Chemistry, Biology labs\nLanguage Lab: For English and communication skills\nSeminar Halls: Fully equipped with multimedia\n\n🏃‍♂️ Sports & Recreation:\nMulti-purpose sports complex\nIndoor gymnasium\nCricket ground\nBasketball and volleyball courts\nTable tennis facility\nFitness center\n\n🏥 Support Services:\nMedical center with qualified staff\nCounseling and career guidance\nIT support services\nBanking facilities\nPrayer areas (separate for men and women)\nCafeteria and food courts\n\n🌐 Technology Infrastructure:\nCampus-wide WiFi\nVideo conferencing facilities\nOnline learning management system\nDigital notice boards",
      buttons: [
        { text: "📱 Virtual Campus Tour", action: "virtual_tour" },
        { text: "📍 Campus Map", action: "campus_map" },
        { text: "⏰ Facility Timings", action: "facility_timings" }
      ]
    },
    accommodation: {
      text: "🏠 Student Accommodation\n\n🏢 On-Campus Hostels:\nSeparate hostels for male and female students\nFurnished rooms with study tables and wardrobes\nCommon rooms with TV and recreational facilities\n24/7 security and warden supervision\nMess facility with nutritious meals\nLaundry services available\n\n🏡 Off-Campus Options:\nUniversity-approved private hostels\nShared apartments near campus\nLocal family accommodations\nRental assistance from student affairs\n\n💰 Accommodation Fees:\nOn-campus hostel: PKR 15,000-20,000/semester\nMess charges: PKR 12,000-15,000/month\nPrivate accommodations vary\n\n📋 Hostel Rules:\nCurfew timings strictly followed\nNo smoking or prohibited items\nRegular room inspections\nGuest policy regulations\nAcademic performance monitoring",
      buttons: [
        { text: "📝 Hostel Application", action: "hostel_application" },
        { text: "🍽️ Mess Menu", action: "mess_menu" },
        { text: "📞 Hostel Contact", action: "hostel_contact" }
      ]
    },
    fees: {
      text: "💰 Fee Structure (Per Semester)\n\n🎓 Undergraduate Programs:\nBS Computer Science: PKR 85,000\nBS Software Engineering: PKR 85,000\nBS Information Technology: PKR 80,000\nBS Business Administration: PKR 70,000\nBS Economics: PKR 65,000\nBS English/Mass Comm: PKR 60,000\n\n🎓 Graduate Programs:\nMS Computer Science: PKR 95,000\nMS Management Sciences: PKR 85,000\nMBA: PKR 90,000\nM.Phil Programs: PKR 75,000\n\n📋 Additional Charges:\nAdmission Fee: PKR 10,000 (one-time)\nSecurity Deposit: PKR 5,000 (refundable)\nLab Fee: PKR 5,000-10,000/semester\nLibrary Fee: PKR 2,000/semester\nStudent Activity Fee: PKR 1,000/semester\n\n💳 Payment Options:\nBank challan (recommended)\nOnline banking\nCredit/debit cards\nInstallment plans available",
      buttons: [
        { text: "🎓 Scholarships", action: "scholarships" },
        { text: "💳 Payment Methods", action: "payment_methods" },
        { text: "📊 Fee Calculator", action: "fee_calculator" },
        { text: "💰 Financial Aid", action: "financial_aid" }
      ]
    },
    scholarships: {
      text: "🎓 Scholarship Opportunities\n\n🏆 Merit-Based Scholarships:\n100% Tuition Fee Waiver: For position holders\n50% Fee Concession: For top 5% students\n25% Fee Reduction: For good academic performance\nSemester-wise renewal based on CGPA\n\n💝 Need-Based Financial Aid:\nUp to 75% fee concession for deserving students\nMonthly stipends for exceptional cases\nWork-study programs available\nEmergency financial assistance\n\n🏛️ Government Scholarships:\nHigher Education Commission (HEC) scholarships\nProvincial government scholarships\nPrime Minister's Youth Program\nOverseas scholarship programs\n\n🌟 Special Scholarships:\nSports scholarships for talented athletes\nCultural activities scholarships\nCommunity service scholarships\nAlumni-sponsored scholarships\n\n📋 Application Process:\nSubmit scholarship application with admission\nProvide income certificates for need-based aid\nMaintain required CGPA for renewal\nRegular review and assessment",
      buttons: [
        { text: "📝 Apply for Scholarship", action: "scholarship_apply" },
        { text: "📋 Eligibility Criteria", action: "scholarship_criteria" },
        { text: "📄 Required Documents", action: "scholarship_docs" },
        { text: "🎓 Scholarships Home", action: "scholarships_home" }
      ]
    },
    contact_admissions: {
      text: "📞 Contact Admissions Office\n\n📍 Main Campus:\nKarakoram International University\nGilgit, Gilgit-Baltistan, Pakistan\n\n📞 Phone Numbers:\nMain Office: +92-5811-960008\nAdmissions: +92-5811-960009\nRegistrar: +92-5811-960010\n\n📧 Email Addresses:\nGeneral: info@kiu.edu.pk\nAdmissions: admissions@kiu.edu.pk\nAcademic: academic@kiu.edu.pk\n\n🕐 Office Hours:\nMonday - Friday: 8:00 AM - 4:00 PM\nSaturday: 8:00 AM - 12:00 PM\nSunday: Closed\n\n💬 Other Contact Methods:\nWhatsApp: +92-300-5811960\nFacebook: KIU Official\nWebsite: www.kiu.edu.pk\n\n🏢 Regional Offices:\nIslamabad Liaison Office\nKarachi Information Center",
      buttons: [
        { text: "🗺️ Campus Location", action: "campus_location" },
        { text: "📱 Social Media", action: "social_media" },
        { text: "🚌 How to Reach", action: "directions" }
      ]
    },
    website: {
      text: "🌐 Official KIU Website\n\nVisit our official website for:\nLatest announcements and news\nDetailed program information\nFaculty profiles and research\nStudent portal access\nOnline application system\nAcademic calendar\nExamination schedules\n\nWebsite: www.kiu.edu.pk\n\nStudent Portal Features:\nCheck admission status\nView academic transcripts\nDownload fee challans\nAccess course materials\nSubmit assignments\nCheck examination results",
      buttons: [
        { text: "📱 Student Portal", action: "student_portal" },
        { text: "📰 News & Events", action: "news_events" },
        { text: "📚 Academic Resources", action: "academic_resources" }
      ]
    },
    default: {
      text: "Welcome to KIU Assistant! 🎓\n\nI can provide detailed information about Karakoram International University including:\n\nAdmissions: Application process, requirements, deadlines\nAcademic Programs: Undergraduate, graduate, and doctoral programs\nCampus Life: Facilities, accommodation, student activities\nFee Structure: Tuition fees, scholarships, financial aid\nContact Information: Office details, directions, support\n\nWhat specific information would you like to know about KIU?",
      buttons: [
        { text: "📋 Admissions", action: "admissions" },
        { text: "📚 Academic Programs", action: "academics" },
        { text: "🏫 Campus Life", action: "campus" },
        { text: "💰 Fees & Scholarships", action: "fees" }
      ]
    },
    lms: {
      text: "KIU LMS Portal\n\nAccess your course materials, submit assignments, and communicate with faculty using the official KIU LMS:\nhttps://lms.kiu.edu.pk\n\nQuestions or facing issues? Check our LMS FAQs:\nhttps://lms.kiu.edu.pk/faqs",
      buttons: [
        { text: "KIU LMS Portal", action: "open_lms" },
        { text: "LMS FAQs", action: "open_lms_faqs" }
      ]
    },
  },

  ur: {
    // Urdu sections, remove any stars and use plain text
    admissions: {
      text: "📋 داخلہ کی معلومات\n\nقراقرم انٹرنیشنل یونیورسٹی (KIU) مختلف شعبوں میں انڈرگریجویٹ اور گریجویٹ پروگرام پیش کرتی ہے:\n\nدرخواست کی مدت: بہار (جنوری-فروری), خزاں (جولائی-اگست)\nداخلہ ٹیسٹ: HEC منظور شدہ NTS ٹیسٹ ضروری\nکم سے کم اہلیت: انٹرمیڈیٹ میں 50% نمبرات\nمطلوبہ دستاویزات: تعلیمی سرٹیفکیٹس، شناختی کارڈ، تصاویر، ڈومیسائل\nانتخاب کا عمل: میرٹ کی بنیاد پر انٹرویو کے ساتھ",
      buttons: [
        { text: "📝 درخواست کا عمل", action: "application_process" },
        { text: "📋 داخلہ ٹیسٹ", action: "entry_test" },
        { text: "📄 مطلوبہ دستاویزات", action: "documents" },
        { text: "💰 فیس کی تفصیلات", action: "fees" },
        { text: "📞 داخلہ سے رابطہ", action: "contact_admissions" }
      ]
    },
    academics: {
      text: "📚 تعلیمی پروگرام\n\nKIU مختلف شعبوں میں جدید تعلیمی پروگرام پیش کرتا ہے:\n\n🎓 انڈرگریجویٹ پروگرام (4 سال):\nBS کمپیوٹر سائنس\nBS سافٹ ویئر انجینئرنگ\nBS انفارمیشن ٹیکنالوجی\nBS بزنس ایڈمنسٹریشن\nBS اکنامکس\nBS انگلش لٹریچر\nBS ماس کمیونیکیشن\n\n🎓 گریجویٹ پروگرام:\nMS کمپیوٹر سائنس\nMS مینجمنٹ سائنسز\nMBA پروگرام\nM.Phil اور PhD پروگرام",
      buttons: [
        { text: "💻 کمپیوٹنگ پروگرام", action: "computing" },
        { text: "💼 بزنس پروگرام", action: "business" },
        { text: "📖 ہیومینٹیز", action: "humanities" },
        { text: "🎓 گریجویٹ سٹڈیز", action: "graduate_programs" },
        { text: "👩‍🔬 Life Sciences Faculty", action: "faculty_life_sciences" },
        { text: "📚 Natural Sciences Faculty", action: "faculty_natural_sciences" },
        { text: "🧑‍🎓 Social Sciences Faculty", action: "faculty_social_sciences" },
        { text: "🗓️ Academic Calendar", action: "academic_calendar" }
      ]
    },
    campus: {
      text: "🏫 KIU میں کیمپس لائف\n\nگلگت بلتستان کے خوبصورت علاقے میں جیورنت کیمپس لائف:\n\n🏗️ جدید سہولات:\nجدید کمپیوٹر لیبز\nسائنس کی لیبارٹریاں\nمرکزی لائبریری\nکھیل کمپلیکس\nتیز رفتار انٹرنیٹ\n\n🎭 طلبا کی سرگرمیاں:\nطلبا تنظیمیں\nثقافتی تہوار\nکھیل مقابلے\nتقریری مقابلے\nکمیونٹی سروس\n\n🌄 منفرد مقام:\nپہاڑی کیمپس\nصاف ماحول\nمحفوظ ماحول",
      buttons: [
        { text: "🏗️ کیمپس کی سہولات", action: "facilities" },
        { text: "🏠 رہائش", action: "accommodation" },
        { text: "🎭 طلبا کی سرگرمیاں", action: "student_activities" },
        { text: "🚌 نقل و حمل", action: "transport" }
      ]
    },
    facilities: {
      text: "🏗️ کیمپس کی سہولات\n\nتعلیمی سہولتیں:\nمرکزی لائبریری: 50,000 سے زائد کتب، ڈیجیٹل وسائل\nکمپیوٹر لیبز\nسائنس لیبز\nزبان کی لیب\nسیمینار ہال\n\nکھیل اور تفریح:\nاسپورٹس کمپلیکس\nجیم\nکرکٹ گراؤنڈ\nباسکٹ بال اور والی بال کورٹ\nٹیبل ٹینس\nفٹنس سینٹر\n\nسہولیات:\nمیڈیکل سینٹر\nکیرئر گائیڈنس\nآئی ٹی سپورٹ\nبینکنگ\nنماز کی جگہیں\nکیفےٹیریا اور فوڈ کورٹس\n\nٹیکنالوجی:\nوائی فائی\nویڈیو کانفرنسنگ\nآن لائن ایل ایم ایس\nڈیجیٹل نوٹس بورڈز",
      buttons: [
        { text: "📱 Virtual Campus Tour", action: "virtual_tour" },
        { text: "📍 Campus Map", action: "campus_map" },
        { text: "⏰ Facility Timings", action: "facility_timings" }
      ]
    },
    fees: {
      text: "💰 فیس کی تفصیلات (فی سمسٹر)\n\n🎓 انڈرگریجویٹ پروگرام:\nBS کمپیوٹر سائنس: PKR 85,000\nBS سافٹ ویئر انجینئرنگ: PKR 85,000\nBS بزنس ایڈمنسٹریشن: PKR 70,000\nBS اکنامکس: PKR 65,000\n\n🎓 گریجویٹ پروگرام:\nMS کمپیوٹر سائنس: PKR 95,000\nMBA: PKR 90,000\n\n📋 اضافی چارجز:\nداخلہ فیس: PKR 10,000\nسیکیورٹی ڈپازٹ: PKR 5,000\nلیب فیس: PKR 5,000-10,000",
      buttons: [
        { text: "🎓 وظائف", action: "scholarships" },
        { text: "💳 ادائیگی کے طریقے", action: "payment_methods" },
        { text: "📊 فیس کیلکولیٹر", action: "fee_calculator" }
      ]
    },
    default: {
      text: "KIU اسسٹنٹ میں خوش آمدید! 🎓\n\nمیں قراقرم انٹرنیشنل یونیورسٹی کے بارے میں تفصیلی معلومات فراہم کر سکتا ہوں:\n\nداخلہ: درخواست کا عمل، اہلیت، آخری تاریخیں\nتعلیمی پروگرام: انڈرگریجویٹ، گریجویٹ پروگرام\nکیمپس لائف: سہولات، رہائش، طلبا کی سرگرمیاں\nفیس: ٹیوشن فیس، وظائف، مالی امداد\nرابطے کی معلومات: دفتری تفصیلات، رہنمائی\n\nآپ KIU کے بارے میں کون سی خاص معلومات چاہتے ہیں؟",
      buttons: [
        { text: "📋 داخلہ", action: "admissions" },
        { text: "📚 تعلیمی پروگرام", action: "academics" },
        { text: "🏫 کیمپس لائف", action: "campus" },
        { text: "💰 فیسیں اور وظائف", action: "fees" }
      ]
    }
  },

  essa_wali: {
    text: "Essa Wali is a web developer currently working in the KIU IT Section.",
    buttons: [
      { text: "🌐 KIU IT Section", action: "kiu_it_section" }
    ]
  },
  lms: {
    text: "KIU LMS Portal\n\nAccess all your course materials, submit assignments, and communicate with faculty on the official LMS:\n👉 https://lms.kiu.edu.pk\n\nIf you have questions or face issues, please check the FAQs:\n👉 https://lms.kiu.edu.pk/faqs",
    buttons: [
      { text: "❓ LMS FAQs", action: "lms_faqs" }
    ]
  },
  academic_calendar: {
    text: "🗓️ KIU Academic Calendar\n\nStay updated with important academic dates here:\n👉 https://www.kiu.edu.pk/calendar"
  },
  advance_studies: {
    text: "🔬 Advance Studies & Research Office\nFind out about research programs, proposals, and more:\n👉 https://www.kiu.edu.pk/office/advance-studies-research"
  }
};
