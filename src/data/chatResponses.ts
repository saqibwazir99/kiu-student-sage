
export const chatResponses = {
  en: {
    // Admissions
    admissions: {
      text: "📋 **Admissions Information**\n\nKIU offers undergraduate and graduate programs across multiple disciplines. Here's what you need to know:\n\n• **Application Deadline**: Check our website for current deadlines\n• **Entry Test**: Required for most programs\n• **Documents**: Academic transcripts, CNIC, photos\n• **Merit-based selection** with interviews for some programs",
      buttons: [
        { text: "📝 Application Process", action: "application_process" },
        { text: "📋 Entry Test Info", action: "entry_test" },
        { text: "📄 Required Documents", action: "documents" },
        { text: "📞 Contact Admissions", action: "contact_admissions" }
      ]
    },
    
    application_process: {
      text: "📝 **Application Process**\n\n1. **Online Application**: Fill the form on KIU website\n2. **Submit Documents**: Upload required documents\n3. **Pay Application Fee**: Bank challan or online\n4. **Entry Test**: Appear for the test on scheduled date\n5. **Merit List**: Check if you're selected\n6. **Admission Confirmation**: Pay fees to confirm seat",
      links: [
        { text: "🌐 Apply Online", url: "https://kiu.edu.pk/admissions", icon: "external" },
        { text: "📋 Download Application Form", url: "#download-form", icon: "file" }
      ]
    },
    
    entry_test: {
      text: "📋 **Entry Test Information**\n\n• **Test Pattern**: MCQs covering English, Math, and subject-specific questions\n• **Duration**: 2-3 hours depending on program\n• **Preparation**: Past papers available on website\n• **Test Centers**: Main campus and selected cities\n• **Results**: Published within 1-2 weeks",
      buttons: [
        { text: "📚 Download Past Papers", action: "past_papers" },
        { text: "📅 Test Schedule", action: "test_schedule" },
        { text: "📍 Test Centers", action: "test_centers" }
      ]
    },

    // Academics
    academics: {
      text: "📚 **Academic Programs**\n\nKIU offers diverse programs across multiple faculties:\n\n🎓 **Undergraduate Programs**\n• Computer Science & IT\n• Business Administration\n• Engineering\n• Social Sciences\n\n🎓 **Graduate Programs**\n• MS/MBA\n• PhD Programs",
      buttons: [
        { text: "💻 Computing & IT", action: "computing" },
        { text: "💼 Business Programs", action: "business" },
        { text: "⚙️ Engineering", action: "engineering" },
        { text: "🎓 Graduate Programs", action: "graduate" }
      ]
    },

    computing: {
      text: "💻 **Computing & IT Programs**\n\n• **BS Computer Science** (4 years)\n• **BS Software Engineering** (4 years)\n• **BS Information Technology** (4 years)\n• **BS Data Science** (4 years)\n\n**Specializations**: AI, Cybersecurity, Web Development, Mobile Apps\n\n**Career Prospects**: Software Developer, Data Scientist, System Analyst, IT Consultant",
      buttons: [
        { text: "📋 Course Curriculum", action: "cs_curriculum" },
        { text: "💰 Fee Structure", action: "fees" },
        { text: "👨‍🏫 Faculty", action: "cs_faculty" }
      ]
    },

    business: {
      text: "💼 **Business Programs**\n\n• **BBA** (4 years) - General Management\n• **BS Economics** (4 years)\n• **MBA** (1.5-2 years)\n• **MS Management Sciences**\n\n**Specializations**: Finance, Marketing, HR, Operations\n\n**Career Prospects**: Manager, Analyst, Consultant, Entrepreneur",
      buttons: [
        { text: "📈 Finance Track", action: "finance" },
        { text: "📊 Marketing Track", action: "marketing" },
        { text: "🏢 MBA Programs", action: "mba" }
      ]
    },

    // Campus Life
    campus: {
      text: "🏫 **Campus Life at KIU**\n\nExperience a vibrant campus community with:\n\n• **Modern Facilities**: Labs, Library, Sports Complex\n• **Student Societies**: Tech, Literary, Sports clubs\n• **Events**: Seminars, Competitions, Cultural shows\n• **Support Services**: Career counseling, Health center",
      buttons: [
        { text: "🏗️ Facilities", action: "facilities" },
        { text: "🎭 Student Activities", action: "activities" },
        { text: "🚌 Transportation", action: "transport" },
        { text: "🏠 Accommodation", action: "housing" }
      ]
    },

    facilities: {
      text: "🏗️ **Campus Facilities**\n\n• **Library**: 24/7 access with digital resources\n• **Computer Labs**: Latest hardware and software\n• **Science Labs**: Well-equipped for research\n• **Sports Complex**: Gym, courts, playground\n• **Cafeteria**: Variety of food options\n• **Prayer Area**: Separate facilities for men and women",
      links: [
        { text: "📱 Virtual Campus Tour", url: "#virtual-tour", icon: "external" },
        { text: "📍 Campus Map", url: "#campus-map", icon: "file" }
      ]
    },

    // Fee Structure
    fees: {
      text: "💰 **Fee Structure**\n\n**Undergraduate Programs:**\n• Computer Science: PKR 180,000/year\n• Business: PKR 150,000/year\n• Engineering: PKR 200,000/year\n\n**Graduate Programs:**\n• MBA: PKR 300,000 (total)\n• MS Programs: PKR 250,000 (total)\n\n*Fees may vary. Financial aid available for deserving students.*",
      buttons: [
        { text: "💳 Payment Methods", action: "payment" },
        { text: "🎓 Scholarships", action: "scholarships" },
        { text: "📊 Fee Calculator", action: "calculator" }
      ]
    },

    scholarships: {
      text: "🎓 **Scholarship Opportunities**\n\n• **Merit Scholarships**: Up to 100% tuition fee waiver\n• **Need-based Aid**: For financially disadvantaged students\n• **HEC Scholarships**: Government funding programs\n• **Alumni Scholarships**: Funded by graduates\n\n**Eligibility**: Based on academic performance and financial need",
      buttons: [
        { text: "📝 Apply for Scholarship", action: "scholarship_apply" },
        { text: "📋 Eligibility Criteria", action: "scholarship_criteria" }
      ]
    },

    // Contact and Support
    contact_admissions: {
      text: "📞 **Contact Admissions Office**\n\n**Phone**: +92-21-99261261-70\n**Email**: admissions@kiu.edu.pk\n**Office Hours**: 9:00 AM - 5:00 PM (Mon-Fri)\n**Address**: Stadium Road, Karachi\n\n**Walk-in Consultations**: Available during office hours\n**Online Support**: Available 24/7 through this chat",
      links: [
        { text: "📧 Email Admissions", url: "mailto:admissions@kiu.edu.pk", icon: "external" },
        { text: "🗺️ Get Directions", url: "https://maps.google.com/kiu", icon: "external" }
      ]
    },

    // Default response
    default: {
      text: "I understand you're looking for information about KIU. I can help you with:\n\n• Admissions and application process\n• Academic programs and courses\n• Fee structure and scholarships\n• Campus facilities and student life\n• Contact information\n\nWhat specific information would you like to know?",
      buttons: [
        { text: "📋 Admissions", action: "admissions" },
        { text: "📚 Academics", action: "academics" },
        { text: "🏫 Campus Life", action: "campus" },
        { text: "💰 Fees", action: "fees" }
      ]
    }
  },

  ur: {
    // Urdu translations
    admissions: {
      text: "📋 **داخلہ کی معلومات**\n\nKIU مختلف شعبوں میں انڈرگریجویٹ اور گریجویٹ پروگرام پیش کرتا ہے:\n\n• **درخواست کی آخری تاریخ**: موجودہ تاریخوں کے لیے ویب سائٹ دیکھیں\n• **داخلہ ٹیسٹ**: زیادہ تر پروگراموں کے لیے ضروری\n• **دستاویزات**: تعلیمی سرٹیفکیٹس، شناختی کارڈ، تصاویر\n• **میرٹ کی بنیاد پر انتخاب** کچھ پروگراموں کے لیے انٹرویو",
      buttons: [
        { text: "📝 درخواست کا عمل", action: "application_process" },
        { text: "📋 داخلہ ٹیسٹ", action: "entry_test" },
        { text: "📄 مطلوبہ دستاویزات", action: "documents" },
        { text: "📞 داخلہ سے رابطہ", action: "contact_admissions" }
      ]
    },

    academics: {
      text: "📚 **تعلیمی پروگرام**\n\nKIU مختلف فیکلٹیز میں متنوع پروگرام پیش کرتا ہے:\n\n🎓 **انڈرگریجویٹ پروگرام**\n• کمپیوٹر سائنس اور IT\n• بزنس ایڈمنسٹریشن\n• انجینئرنگ\n• سماجی علوم\n\n🎓 **گریجویٹ پروگرام**\n• MS/MBA\n• PhD پروگرام",
      buttons: [
        { text: "💻 کمپیوٹنگ اور IT", action: "computing" },
        { text: "💼 بزنس پروگرام", action: "business" },
        { text: "⚙️ انجینئرنگ", action: "engineering" },
        { text: "🎓 گریجویٹ پروگرام", action: "graduate" }
      ]
    },

    campus: {
      text: "🏫 **KIU میں کیمپس لائف**\n\nجیورنت کیمپس کمیونٹی کا تجربہ کریں:\n\n• **جدید سہولات**: لیبز، لائبریری، کھیل کمپلیکس\n• **طالب علم تنظیمیں**: ٹیک، ادبی، کھیل کلبز\n• **تقریبات**: سیمینارز، مقابلے، ثقافتی شوز\n• **سپورٹ سروسز**: کیریئر کاؤنسلنگ، صحت مرکز",
      buttons: [
        { text: "🏗️ سہولات", action: "facilities" },
        { text: "🎭 طلبا کی سرگرمیاں", action: "activities" },
        { text: "🚌 نقل و حمل", action: "transport" },
        { text: "🏠 رہائش", action: "housing" }
      ]
    },

    fees: {
      text: "💰 **فیس کی تفصیلات**\n\n**انڈرگریجویٹ پروگرام:**\n• کمپیوٹر سائنس: PKR 180,000/سال\n• بزنس: PKR 150,000/سال\n• انجینئرنگ: PKR 200,000/سال\n\n**گریجویٹ پروگرام:**\n• MBA: PKR 300,000 (کل)\n• MS پروگرام: PKR 250,000 (کل)\n\n*فیسیں مختلف ہو سکتی ہیں۔ مستحق طلبا کے لیے مالی امداد دستیاب ہے۔*",
      buttons: [
        { text: "💳 ادائیگی کے طریقے", action: "payment" },
        { text: "🎓 وظائف", action: "scholarships" },
        { text: "📊 فیس کیلکولیٹر", action: "calculator" }
      ]
    },

    default: {
      text: "میں سمجھ گیا ہوں کہ آپ KIU کے بارے میں معلومات تلاش کر رہے ہیں۔ میں آپ کی مدد کر سکتا ہوں:\n\n• داخلہ اور درخواست کا عمل\n• تعلیمی پروگرام اور کورسز\n• فیس کی تفصیلات اور وظائف\n• کیمپس کی سہولات اور طلبا کی زندگی\n• رابطے کی معلومات\n\nآپ کون سی خاص معلومات جاننا چاہیں گے؟",
      buttons: [
        { text: "📋 داخلہ", action: "admissions" },
        { text: "📚 تعلیمی", action: "academics" },
        { text: "🏫 کیمپس لائف", action: "campus" },
        { text: "💰 فیسیں", action: "fees" }
      ]
    }
  }
};
