export const chatResponses = {
  en: {
    // Admissions
    admissions: {
      text: "📋 Admissions Information\n\nKarakoram International University (KIU) offers comprehensive undergraduate and graduate programs. Here's detailed admission information:\n\n• Application Period: Spring (Jan-Feb), Fall (July-Aug)\n• Entry Test: HEC-approved NTS test required\n• Minimum Requirements: 50% marks in intermediate/equivalent\n• Documents Required: Academic transcripts, CNIC/B-Form, passport photos, domicile certificate\n• Selection Process: Merit-based with interviews for specific programs",
      buttons: [
        { text: "📝 Application Process", action: "application_process" },
        { text: "📋 Entry Test Details", action: "entry_test" },
        { text: "📄 Required Documents", action: "documents" },
        { text: "💰 Fee Structure", action: "fees" },
        { text: "📞 Contact Admissions", action: "contact_admissions" }
      ]
    },
    
    application_process: {
      text: "📝 Step-by-Step Application Process\n\n1. Online Registration\n• Visit KIU official website\n• Create student portal account\n• Fill complete application form\n\n2. Document Submission\n• Upload all required documents (scanned copies)\n• Ensure documents are clear and legible\n\n3. Application Fee\n• Pay PKR 2,000 application fee\n• Use bank challan or online payment\n\n4. Entry Test\n• Appear for NTS test at designated centers\n• Test includes English, Math, and subject-specific questions\n\n5. Merit List\n• Check merit list on official website\n• Lists published within 2 weeks of test\n\n6. Admission Confirmation\n• Pay admission fee to secure seat\n• Submit original documents for verification",
      buttons: [
        { text: "🌐 Official Website", action: "website" },
        { text: "💳 Payment Methods", action: "payment_methods" },
        { text: "📅 Important Dates", action: "admission_dates" }
      ]
    },
    
    entry_test: {
      text: "📋 Entry Test Information (NTS)\n\nTest Structure:\n• Duration: 3 hours\n• Total Questions: 100 MCQs\n• English: 30 questions\n• Mathematics: 30 questions\n• Subject-Specific: 40 questions\n\nTest Centers:\n• Main KIU Campus, Gilgit\n• Regional centers in major cities\n• Islamabad, Karachi, Lahore centers available\n\nPreparation Guidelines:\n• Review intermediate syllabus\n• Practice past papers (available on website)\n• Focus on English comprehension and basic math\n\nResults:\n• Published within 10-15 days\n• Available on NTS and KIU websites\n• SMS alerts sent to registered numbers",
      buttons: [
        { text: "📚 Download Past Papers", action: "past_papers" },
        { text: "📍 Test Centers", action: "test_centers" },
        { text: "📊 Merit Calculation", action: "merit_calculation" }
      ]
    },

    documents: {
      text: "📄 Required Documents Checklist\n\nFor Undergraduate Programs:\n• Intermediate/A-Level certificate & transcript\n• Matriculation/O-Level certificate & transcript\n• CNIC or B-Form (copy)\n• Domicile certificate\n• 4 passport-size photographs\n• Character certificate from last institution\n• Medical fitness certificate\n\nFor Graduate Programs:\n• Bachelor's degree certificate & transcript\n• Intermediate certificate & transcript\n• Matriculation certificate\n• CNIC copy\n• 4 passport-size photographs\n• Work experience certificates (if applicable)\n• Research proposal (for research programs)\n\nImportant Notes:\n• All documents must be attested\n• Foreign qualifications require HEC equivalence\n• Submit both original and photocopies",
      buttons: [
        { text: "📋 Document Verification", action: "verification" },
        { text: "🌍 Foreign Qualifications", action: "foreign_docs" },
        { text: "📞 Help Desk", action: "contact_admissions" }
      ]
    },

    // Academics
    academics: {
      text: "📚 Academic Programs at KIU\n\nKIU offers diverse programs across multiple disciplines:\n\n🎓 Undergraduate Programs (4 Years):\n• BS Computer Science\n• BS Software Engineering\n• BS Information Technology\n• BS Business Administration\n• BS Economics\n• BS English Literature\n• BS Mass Communication\n• BS Psychology\n• BS Education\n\n🎓 Graduate Programs:\n• MS Computer Science (2 Years)\n• MS Management Sciences (1.5 Years)\n• MBA (1.5-2 Years)\n• M.Phil Programs (2 Years)\n• PhD Programs (3-5 Years)\n\n🏆 Special Features:\n• Industry-relevant curriculum\n• Experienced faculty\n• Modern labs and facilities\n• Research opportunities",
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
      text: "💻 Computing & IT Programs\n\nBS Computer Science (4 Years)\n• Core Areas: Programming, Algorithms, Data Structures, Software Engineering\n• Specializations: AI/ML, Cybersecurity, Web Development\n• Final Year Project mandatory\n• Internship opportunities with tech companies\n\nBS Software Engineering (4 Years)\n• Focus on software development lifecycle\n• Project management and team collaboration\n• Industry partnerships for practical training\n• Agile and DevOps methodologies\n\nBS Information Technology (4 Years)\n• Network administration and database management\n• IT infrastructure and cloud computing\n• Digital forensics and IT security\n• Industry certifications integrated\n\nCareer Prospects:\n• Software Developer/Engineer\n• Data Scientist/Analyst\n• System Administrator\n• Cybersecurity Specialist\n• IT Consultant\n• Research and Development",
      buttons: [
        { text: "📋 Curriculum Details", action: "cs_curriculum" },
        { text: "👨‍🏫 Faculty Profiles", action: "cs_faculty" },
        { text: "🏢 Industry Partners", action: "industry_partners" },
        { text: "💰 Fee Structure", action: "fees" }
      ]
    },

    business: {
      text: "💼 Business & Management Programs\n\nBBA (4 Years)\n• Comprehensive business education\n• Specializations: Finance, Marketing, HR, Operations\n• Case study methodology\n• Industry exposure through internships\n• Entrepreneurship development\n\nBS Economics (4 Years)\n• Microeconomics and macroeconomics\n• Econometrics and statistical analysis\n• Development economics focus\n• Research methodology\n• Policy analysis skills\n\nMBA Programs (1.5-2 Years)\n• Executive MBA for working professionals\n• Regular MBA for fresh graduates\n• Specializations in various fields\n• International exposure opportunities\n• Leadership development programs\n\nCareer Opportunities:\n• Business Manager/Executive\n• Financial Analyst\n• Marketing Specialist\n• Human Resource Manager\n• Economic Researcher\n• Entrepreneur/Business Owner",
      buttons: [
        { text: "📈 Finance Specialization", action: "finance" },
        { text: "📊 Marketing Track", action: "marketing" },
        { text: "🏢 MBA Details", action: "mba_details" },
        { text: "💼 Career Services", action: "career_services" }
      ]
    },

    // Campus Life
    campus: {
      text: "🏫 Campus Life at KIU\n\nExperience vibrant campus life in the beautiful Gilgit-Baltistan region:\n\n🏗️ Modern Facilities:\n• State-of-the-art computer labs\n• Well-equipped science laboratories\n• Central library with digital resources\n• Sports complex and gymnasium\n• Modern classrooms with AV equipment\n• High-speed internet connectivity\n\n🎭 Student Activities:\n• Student societies and clubs\n• Annual cultural festival\n• Sports tournaments\n• Debate and literary competitions\n• Community service programs\n• Leadership development workshops\n\n🌄 Unique Location:\n• Scenic mountain campus\n• Fresh air and clean environment\n• Adventure sports opportunities\n• Cultural diversity\n• Safe and secure environment",
      buttons: [
        { text: "🏗️ Campus Facilities", action: "facilities" },
        { text: "🏠 Accommodation", action: "accommodation" },
        { text: "🎭 Student Activities", action: "student_activities" },
        { text: "🚌 Transportation", action: "transport" },
        { text: "🍽️ Dining Options", action: "dining" }
      ]
    },

    facilities: {
      text: "🏗️ Campus Facilities\n\n📚 Academic Facilities:\n• Central Library: 50,000+ books, digital resources, research databases\n• Computer Labs: 200+ workstations with latest software\n• Science Labs: Physics, Chemistry, Biology labs\n• Language Lab: For English and communication skills\n• Seminar Halls: Fully equipped with multimedia\n\n🏃‍♂️ Sports & Recreation:\n• Multi-purpose sports complex\n• Indoor gymnasium\n• Cricket ground\n• Basketball and volleyball courts\n• Table tennis facility\n• Fitness center\n\n🏥 Support Services:\n• Medical center with qualified staff\n• Counseling and career guidance\n• IT support services\n• Banking facilities\n• Prayer areas (separate for men and women)\n• Cafeteria and food courts\n\n🌐 Technology Infrastructure:\n• Campus-wide WiFi\n• Video conferencing facilities\n• Online learning management system\n• Digital notice boards",
      buttons: [
        { text: "📱 Virtual Campus Tour", action: "virtual_tour" },
        { text: "📍 Campus Map", action: "campus_map" },
        { text: "⏰ Facility Timings", action: "facility_timings" }
      ]
    },

    accommodation: {
      text: "🏠 Student Accommodation\n\n🏢 On-Campus Hostels:\n• Separate hostels for male and female students\n• Furnished rooms with study tables and wardrobes\n• Common rooms with TV and recreational facilities\n• 24/7 security and warden supervision\n• Mess facility with nutritious meals\n• Laundry services available\n\n🏡 Off-Campus Options:\n• University-approved private hostels\n• Shared apartments near campus\n• Local family accommodations\n• Rental assistance from student affairs\n\n💰 Accommodation Fees:\n• On-campus hostel: PKR 15,000-20,000/semester\n• Mess charges: PKR 12,000-15,000/month\n• Private accommodations vary\n\n📋 Hostel Rules:\n• Curfew timings strictly followed\n• No smoking or prohibited items\n• Regular room inspections\n• Guest policy regulations\n• Academic performance monitoring",
      buttons: [
        { text: "📝 Hostel Application", action: "hostel_application" },
        { text: "🍽️ Mess Menu", action: "mess_menu" },
        { text: "📞 Hostel Contact", action: "hostel_contact" }
      ]
    },

    // Fee Structure
    fees: {
      text: "💰 Fee Structure (Per Semester)\n\n🎓 Undergraduate Programs:\n• BS Computer Science: PKR 85,000\n• BS Software Engineering: PKR 85,000\n• BS Information Technology: PKR 80,000\n• BS Business Administration: PKR 70,000\n• BS Economics: PKR 65,000\n• BS English/Mass Comm: PKR 60,000\n\n🎓 Graduate Programs:\n• MS Computer Science: PKR 95,000\n• MS Management Sciences: PKR 85,000\n• MBA: PKR 90,000\n• M.Phil Programs: PKR 75,000\n\n📋 Additional Charges:\n• Admission Fee: PKR 10,000 (one-time)\n• Security Deposit: PKR 5,000 (refundable)\n• Lab Fee: PKR 5,000-10,000/semester\n• Library Fee: PKR 2,000/semester\n• Student Activity Fee: PKR 1,000/semester\n\n💳 Payment Options:\n• Bank challan (recommended)\n• Online banking\n• Credit/debit cards\n• Installment plans available",
      buttons: [
        { text: "🎓 Scholarships", action: "scholarships" },
        { text: "💳 Payment Methods", action: "payment_methods" },
        { text: "📊 Fee Calculator", action: "fee_calculator" },
        { text: "💰 Financial Aid", action: "financial_aid" }
      ]
    },

    scholarships: {
      text: "🎓 Scholarship Opportunities\n\n🏆 Merit-Based Scholarships:\n• 100% Tuition Fee Waiver: For position holders\n• 50% Fee Concession: For top 5% students\n• 25% Fee Reduction: For good academic performance\n• Semester-wise renewal based on CGPA\n\n💝 Need-Based Financial Aid:\n• Up to 75% fee concession for deserving students\n• Monthly stipends for exceptional cases\n• Work-study programs available\n• Emergency financial assistance\n\n🏛️ Government Scholarships:\n• Higher Education Commission (HEC) scholarships\n• Provincial government scholarships\n• Prime Minister's Youth Program\n• Overseas scholarship programs\n\n🌟 Special Scholarships:\n• Sports scholarships for talented athletes\n• Cultural activities scholarships\n• Community service scholarships\n• Alumni-sponsored scholarships\n\n📋 Application Process:\n• Submit scholarship application with admission\n• Provide income certificates for need-based aid\n• Maintain required CGPA for renewal\n• Regular review and assessment",
      buttons: [
        { text: "📝 Apply for Scholarship", action: "scholarship_apply" },
        { text: "📋 Eligibility Criteria", action: "scholarship_criteria" },
        { text: "📄 Required Documents", action: "scholarship_docs" },
        { text: "🎓 Scholarships Home", action: "scholarships_home" }
      ]
    },

    // Contact Information
    contact_admissions: {
      text: "📞 Contact Admissions Office\n\n📍 Main Campus:\nKarakoram International University\nGilgit, Gilgit-Baltistan, Pakistan\n\n📞 Phone Numbers:\n• Main Office: +92-5811-960008\n• Admissions: +92-5811-960009\n• Registrar: +92-5811-960010\n\n📧 Email Addresses:\n• General: info@kiu.edu.pk\n• Admissions: admissions@kiu.edu.pk\n• Academic: academic@kiu.edu.pk\n\n🕐 Office Hours:\n• Monday - Friday: 8:00 AM - 4:00 PM\n• Saturday: 8:00 AM - 12:00 PM\n• Sunday: Closed\n\n💬 Other Contact Methods:\n• WhatsApp: +92-300-5811960\n• Facebook: KIU Official\n• Website: www.kiu.edu.pk\n\n🏢 Regional Offices:\n• Islamabad Liaison Office\n• Karachi Information Center",
      buttons: [
        { text: "🗺️ Campus Location", action: "campus_location" },
        { text: "📱 Social Media", action: "social_media" },
        { text: "🚌 How to Reach", action: "directions" }
      ]
    },

    // Default and other responses
    website: {
      text: "🌐 Official KIU Website\n\nVisit our official website for:\n• Latest announcements and news\n• Detailed program information\n• Faculty profiles and research\n• Student portal access\n• Online application system\n• Academic calendar\n• Examination schedules\n\nWebsite: www.kiu.edu.pk\n\nStudent Portal Features:\n• Check admission status\n• View academic transcripts\n• Download fee challans\n• Access course materials\n• Submit assignments\n• Check examination results",
      buttons: [
        { text: "📱 Student Portal", action: "student_portal" },
        { text: "📰 News & Events", action: "news_events" },
        { text: "📚 Academic Resources", action: "academic_resources" }
      ]
    },

    default: {
      text: "Welcome to KIU Assistant! 🎓\n\nI can provide detailed information about Karakoram International University including:\n\n• Admissions: Application process, requirements, deadlines\n• Academic Programs: Undergraduate, graduate, and doctoral programs\n• Campus Life: Facilities, accommodation, student activities\n• Fee Structure: Tuition fees, scholarships, financial aid\n• Contact Information: Office details, directions, support\n\nWhat specific information would you like to know about KIU?",
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
    // Urdu translations with enhanced content
    admissions: {
      text: "📋 داخلہ کی معلومات\n\nقراقرم انٹرنیشنل یونیورسٹی (KIU) مختلف شعبوں میں انڈرگریجویٹ اور گریجویٹ پروگرام پیش کرتی ہے:\n\n• درخواست کی مدت: بہار (جنوری-فروری), خزاں (جولائی-اگست)\n• داخلہ ٹیسٹ: HEC منظور شدہ NTS ٹیسٹ ضروری\n• کم سے کم اہلیت: انٹرمیڈیٹ میں 50% نمبرات\n• مطلوبہ دستاویزات: تعلیمی سرٹیفکیٹس، شناختی کارڈ، تصاویر، ڈومیسائل\n• انتخاب کا عمل: میرٹ کی بنیاد پر انٹرویو کے ساتھ",
      buttons: [
        { text: "📝 درخواست کا عمل", action: "application_process" },
        { text: "📋 داخلہ ٹیسٹ", action: "entry_test" },
        { text: "📄 مطلوبہ دستاویزات", action: "documents" },
        { text: "💰 فیس کی تفصیلات", action: "fees" },
        { text: "📞 داخلہ سے رابطہ", action: "contact_admissions" }
      ]
    },

    academics: {
      text: "📚 تعلیمی پروگرام\n\nKIU مختلف شعبوں میں جدید تعلیمی پروگرام پیش کرتا ہے:\n\n🎓 انڈرگریجویٹ پروگرام (4 سال):\n• BS کمپیوٹر سائنس\n• BS سافٹ ویئر انجینئرنگ\n• BS انفارمیشن ٹیکنالوجی\n• BS بزنس ایڈمنسٹریشن\n• BS اکنامکس\n• BS انگلش لٹریچر\n• BS ماس کمیونیکیشن\n\n🎓 گریجویٹ پروگرام:\n• MS کمپیوٹر سائنس\n• MS مینجمنٹ سائنسز\n• MBA پروگرام\n• M.Phil اور PhD پروگرام",
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
      text: "🏫 KIU میں کیمپس لائف\n\nگلگت بلتستان کے خوبصورت علاقے میں جیورنت کیمپس لائف:\n\n🏗️ جدید سہولات:\n• جدید کمپیوٹر لیبز\n• سائنس کی لیبارٹریاں\n• مرکزی لائبریری\n• کھیل کمپلیکس\n• تیز رفتار انٹرنیٹ\n\n🎭 طلبا کی سرگرمیاں:\n• طلبا تنظیمیں\n• ثقافتی تہوار\n• کھیل مقابلے\n• تقریری مقابلے\n• کمیونٹی سروس\n\n🌄 منفرد مقام:\n• پہاڑی کیمپس\n• صاف ماحول\n• محفوظ ماحول",
      buttons: [
        { text: "🏗️ کیمپس کی سہولات", action: "facilities" },
        { text: "🏠 رہائش", action: "accommodation" },
        { text: "🎭 طلبا کی سرگرمیاں", action: "student_activities" },
        { text: "🚌 نقل و حمل", action: "transport" }
      ]
    },

    fees: {
      text: "💰 فیس کی تفصیلات (فی سمسٹر)\n\n🎓 انڈرگریجویٹ پروگرام:\n• BS کمپیوٹر سائنس: PKR 85,000\n• BS سافٹ ویئر انجینئرنگ: PKR 85,000\n• BS بزنس ایڈمنسٹریشن: PKR 70,000\n• BS اکنامکس: PKR 65,000\n\n🎓 گریجویٹ پروگرام:\n• MS کمپیوٹر سائنس: PKR 95,000\n• MBA: PKR 90,000\n\n📋 اضافی چارجز:\n• داخلہ فیس: PKR 10,000\n• سیکیورٹی ڈپازٹ: PKR 5,000\n• لیب فیس: PKR 5,000-10,000",
      buttons: [
        { text: "🎓 وظائف", action: "scholarships" },
        { text: "💳 ادائیگی کے طریقے", action: "payment_methods" },
        { text: "📊 فیس کیلکولیٹر", action: "fee_calculator" }
      ]
    },

    default: {
      text: "KIU اسسٹنٹ میں خوش آمدید! 🎓\n\nمیں قراقرم انٹرنیشنل یونیورسٹی کے بارے میں تفصیلی معلومات فراہم کر سکتا ہوں:\n\n• داخلہ: درخواست کا عمل، اہلیت، آخری تاریخیں\n• تعلیمی پروگرام: انڈرگریجویٹ، گریجویٹ پروگرام\n• کیمپس لائف: سہولات، رہائش، طلبا کی سرگرمیاں\n• فیس: ٹیوشن فیس، وظائف، مالی امداد\n• رابطے کی معلومات: دفتری تفصیلات، رہنمائی\n\nآپ KIU کے بارے میں کون سی خاص معلومات چاہتے ہیں؟",
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
