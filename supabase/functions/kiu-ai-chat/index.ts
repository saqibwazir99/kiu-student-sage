import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatRequest {
  message: string;
  language: 'en' | 'ur';
}

const KNOWLEDGE_BASE = `
KARAKORAM INTERNATIONAL UNIVERSITY (KIU) - COMPREHENSIVE INFORMATION

GENERAL INFORMATION:
- Official Website: kiu.edu.pk
- Admissions Portal: admissions.kiu.edu.pk
- Student Affairs: studentaffairs.kiu.edu.pk
- LMS Portal: lms.kiu.edu.pk
- Academic Calendar: https://www.kiu.edu.pk/calendar
- Advance Studies & Research: https://www.kiu.edu.pk/office/advance-studies-research
- Scholarships: https://www.kiu.edu.pk/center/scholarships-2
- Campus Facilities: https://www.kiu.edu.pk/facilities/campus-facilities
- Faculty of Life Sciences: https://www.kiu.edu.pk/faculty/faculty-of-life-sciences
- Faculty of Natural Sciences: https://www.kiu.edu.pk/faculty/faculty-of-natural-sciences
- Faculty of Social Sciences & Humanities: https://www.kiu.edu.pk/faculty/faculty-of-social-sciences-and-humanities
- KIU LMS FAQs: https://lms.kiu.edu.pk/faqs
- Location: Gilgit-Baltistan, Pakistan

ESSA WALI INFO:
- Essa Wali is a web developer currently working in the KIU IT Section.

ADMISSIONS INFORMATION:
- Spring Admissions 2025 are open with bridging semester options.
- Online application portal available at admissions.kiu.edu.pk
- Multiple undergraduate and graduate programs available
- Merit-based selection process
- Document verification required
- Entrance test may be required for certain programs

FEE STRUCTURE (Fall 2024 & Spring 2025):
- Approved fee structure available at: https://admissions.kiu.edu.pk/p/approved-fee-structure-for-academic-semester-fall-2024-and-spring-2025-GB9BXA
- Different fee structures for different programs
- Installment payment options available
- Scholarships and financial aid programs offered
- Fee varies by program and semester

ACADEMIC PROGRAMS:
- Business Administration
- Computer Science & IT
- Engineering programs
- Social Sciences
- Natural Sciences
- Graduate programs (Masters/PhD)
- Professional development courses

CAMPUS LIFE & STUDENT AFFAIRS:
- Modern campus facilities
- Student societies and clubs
- Sports and recreational facilities
- Hostel accommodation available
- Library and research facilities
- Student support services
- Cultural and academic events

CONTACT INFORMATION:
- Main campus in Gilgit-Baltistan
- Multiple contact numbers for different departments
- Email support available
- Online inquiry system through website

FREQUENTLY ASKED QUESTIONS:
- Admission requirements vary by program
- International students welcome
- Transfer credit policies available
- Academic calendar follows semester system
- Degree verification services provided
`;

const LMS_FAQS = [
  { q: "How do I log in to the LMS?", a: "Use your KIU registration number as username and provided password at https://lms.kiu.edu.pk" },
  { q: "I forgot my LMS password. What do I do?", a: "Click on 'Forgot Password' on the LMS login page or contact IT support." },
  { q: "How can I register my courses on LMS?", a: "After logging in, go to 'My Courses' and click 'Register New Course'." },
  { q: "Why can’t I access my course materials?", a: "Courses may be unavailable until the instructor publishes them or after successful registration." },
  { q: "Can I access LMS on my mobile?", a: "Yes, open https://lms.kiu.edu.pk in your browser; some features work on mobile." },
  { q: "Technical issue/bug?", a: "Contact KIU IT Support via the Helpdesk or email." }
];

function answerFromFAQ(message) {
  const msg = message.toLowerCase();
  for (const {q, a} of LMS_FAQS) {
    if (msg.includes(q.toLowerCase().split(' ')[0])) return `Q: ${q}\nA: ${a}`;
  }
  return null;
}

const getSystemPrompt = (language: 'en' | 'ur') => {
  if (language === 'ur') {
    return `آپ KIU Student Sage ہیں، قراقرم انٹرنیشنل یونیورسٹی کے آفیشل ورچوئل اسسٹنٹ۔ طلبا کی LMS, سکالرشپ، فیکلٹی، کیلنڈر، ریسرچ، ہاسٹل، فیس، داخلہ وغیرہ سے متعلق معلومات میں مدد کریں۔
جب کوئی لنک دیں تو اس فارمیٹ کا استعمال کریں: 👉 [لنک]
نئے لنکس: LMS: https://lms.kiu.edu.pk، کیلنڈر: https://www.kiu.edu.pk/calendar، وظائف: https://www.kiu.edu.pk/center/scholarships-2، سہولات: https://www.kiu.edu.pk/facilities/campus-facilities، فیکلٹی: (اوپر دیکھیں)
Essa Wali: "Essa Wali KIU IT سیکشن میں ویب ڈیولپر ہیں۔"
${KNOWLEDGE_BASE}`;
  }

  return `You are KIU Student Sage, the official virtual assistant for Karakoram International University. Help students by answering about LMS, scholarships, faculty, calendar, research, hostel matters, fees, admissions, etc.
When giving a link, use this format (not markdown): 👉 [link]
New reference links: LMS: https://lms.kiu.edu.pk, Calendar: https://www.kiu.edu.pk/calendar, Scholarships: https://www.kiu.edu.pk/center/scholarships-2, Campus Facilities: https://www.kiu.edu.pk/facilities/campus-facilities, Faculty: (see above)
Essa Wali: "Essa Wali is a web developer currently working in the KIU IT Section."
${KNOWLEDGE_BASE}`;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, language = 'en' }: ChatRequest = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // --- On LMS related queries, try to answer from FAQ directly then fallback to OpenAI ---
    let aiResponse;
    let fromFaq = false;
    let relatedFaq = null;
    if (message.toLowerCase().includes('lms')) {
      relatedFaq = answerFromFAQ(message);
      if (relatedFaq) {
        aiResponse = relatedFaq;
        fromFaq = true;
      }
    }

    // If not directly answered from FAQ, go to OpenAI
    if (!aiResponse) {
      const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
      if (!openaiApiKey) {
        console.error('OpenAI API key not found');
        return new Response(
          JSON.stringify({ error: 'AI service not configured' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('Processing message:', message, 'Language:', language);

      const completionPrompt = getSystemPrompt(language);
      if (message.toLowerCase().includes('lms')) {
        completionPrompt += '\n\nRecent LMS FAQs:\n';
        for (const f of LMS_FAQS) {
          completionPrompt += `Q: ${f.q}\nA: ${f.a}\n`;
        }
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: completionPrompt
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.3,
          max_tokens: 600,
          stream: false
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('OpenAI API error:', errorData);
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      aiResponse = data.choices[0]?.message?.content;

      if (!aiResponse) {
        throw new Error('No response from AI');
      }

      // Remove asterisks and markdown list syntax from the AI's response
      // Also remove any bullet characters or bracket-link format (e.g., [text](url))
      function sanitizeResponse(resp: string): string {
        // Remove leading and inline asterisks or bullet-style chars
        let cleaned = resp.replace(/^[\s*•\-]+/gm, ''); // line-start *, •, -
        cleaned = cleaned.replace(/\*\*/g, ''); // remove bold markdown
        cleaned = cleaned.replace(/\*/g, ''); // remove any stray asterisks
        cleaned = cleaned.replace(/•/g, ''); // remove bullets

        // Replace markdown-style links [text](url) with raw url appearing
        cleaned = cleaned.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '$2');
        cleaned = cleaned.replace(/\((https?:\/\/[^\s]+)\)/g, '$1');
        cleaned = cleaned.replace(/\s+(https?:\/\/)/g, '\n$1');
        // --- IMPROVEMENT: Add single blank line after every numbering/bullet/line that starts with a number or a dash.
        // 1. X
        cleaned = cleaned.replace(/(^|\n)(\d+\.\s.*)/g, '$1$2\n');
        // - X (if any remain after bullet replace)
        cleaned = cleaned.replace(/(^|\n)(-\s.*)/g, '$1$2\n');
        // Then, collapse more than two blank lines into just two
        cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
        // Trim whole result
        return cleaned.trim();
      }

      aiResponse = sanitizeResponse(aiResponse);

      // Add relevant links based on the message content
      const links = [];
      const messageLower = message.toLowerCase();
      
      // ADJUSTED: Only add fee structure link if message specifically mentions fee/cost/tuition/payment
      if (
        messageLower.includes('fee') ||
        messageLower.includes('cost') ||
        messageLower.includes('tuition') ||
        messageLower.includes('payment')
      ) {
        links.push({
          text: language === 'en' ? '📄 Fee Structure Details' : '📄 فیس کی تفصیلات',
          url: 'https://admissions.kiu.edu.pk/p/approved-fee-structure-for-academic-semester-fall-2024-and-spring-2025-GB9BXA',
          icon: 'file'
        });
      }
      
      // Admissions: ONLY respond to 'admission', 'apply', 'enrollment' (not fee)
      if (
        messageLower.includes('admission') ||
        messageLower.includes('apply') ||
        messageLower.includes('enrollment')
      ) {
        links.push({
          text: language === 'en' ? '🎓 Admissions Portal' : '🎓 داخلہ پورٹل',
          url: 'https://admissions.kiu.edu.pk/',
          icon: 'external'
        });
      }
      
      // Ensure campus facilities always uses the correct, naked URL and button
      // (link logic is already correct, but as a fallback, always add a plain naked link if not present)
      const alwaysCheckLinks = [
        { keyword: 'campus facilities', url: 'https://www.kiu.edu.pk/facilities/campus-facilities' },
        { keyword: 'hostel', url: 'https://www.kiu.edu.pk/facilities/campus-facilities' },
        { keyword: 'admission', url: 'https://admissions.kiu.edu.pk/' },
      ];
      alwaysCheckLinks.forEach(item => {
        if (
          messageLower.includes(item.keyword) &&
          !links.some(link => link.url === item.url)
        ) {
          links.push({
            text: item.url,
            url: item.url,
            icon: 'external'
          });
        }
      });
      
      if (messageLower.includes('lms')) {
        links.push({
          text: language === 'en' ? 'KIU LMS Portal' : 'KIU LMS پورٹل',
          url: 'https://lms.kiu.edu.pk',
          icon: 'external'
        });
        if (messageLower.includes('faq') || messageLower.includes('problem') || messageLower.includes('help')) {
          links.push({
            text: language === 'en' ? 'LMS FAQs' : 'LMS اکثر پوچھے گئے سوالات',
            url: 'https://lms.kiu.edu.pk/faqs',
            icon: 'file' // file for FAQs for visual difference
          });
        }
      }
      
      if (messageLower.includes('faculty')) {
        links.push({
          text: language === 'en' ? '👩‍🔬 Faculty of Life Sciences' : '👩‍🔬 فیکلٹی آف لائف سائنسز',
          url: 'https://www.kiu.edu.pk/faculty/faculty-of-life-sciences',
          icon: 'external'
        });
        links.push({
          text: language === 'en' ? '🔬 Faculty of Natural Sciences' : '🔬 فیکلٹی آف نیچرل سائنسز',
          url: 'https://www.kiu.edu.pk/faculty/faculty-of-natural-sciences',
          icon: 'external'
        });
        links.push({
          text: language === 'en' ? '📚 Faculty of Social Sciences & Humanities' : '📚 فیکلٹی آف سوشل سائنسز اینڈ ہیومینیٹیز',
          url: 'https://www.kiu.edu.pk/faculty/faculty-of-social-sciences-and-humanities',
          icon: 'external'
        });
      }
      
      if (messageLower.includes('scholarship')) {
        links.push({
          text: language === 'en' ? '🎓 Scholarships' : '🎓 وظائف',
          url: 'https://www.kiu.edu.pk/center/scholarships-2',
          icon: 'external'
        });
      }
      
      if (messageLower.includes('calendar')) {
        links.push({
          text: language === 'en' ? '🗓️ Academic Calendar' : '🗓️ تعلیمی کیلنڈر',
          url: 'https://www.kiu.edu.pk/calendar',
          icon: 'external'
        });
      }
      
      if (messageLower.includes('advance studies') || messageLower.includes('research')) {
        links.push({
          text: language === 'en' ? '📖 Advance Studies & Research' : '📖 ایڈوانس سٹڈیز و ریسرچ',
          url: 'https://www.kiu.edu.pk/office/advance-studies-research',
          icon: 'external'
        });
      }
      
      if (messageLower.includes('facilit') || messageLower.includes('campus')) {
        links.push({
          text: language === 'en' ? '🏫 Campus Facilities' : '🏫 کیمپس کی سہولتیں',
          url: 'https://www.kiu.edu.pk/facilities/campus-facilities',
          icon: 'external'
        });
      }
      
      if (messageLower.includes('essa wali')) {
        // This will be handled by AI, but do not add a broken link.
        // Instead, optionally, refer to official website if desired.
        if (!links.some(link => link.url.includes('kiu.edu.pk'))) {
          links.push({
            text: language === 'en' ? '🌐 KIU Official Website' : '🌐 KIU آفیشل ویب سائٹ',
            url: 'https://kiu.edu.pk',
            icon: 'external'
          });
        }
      }
      
      // Always include the main website link with correct URL as naked fallback if nothing else
      if (!links.some(link => link.url.includes('kiu.edu.pk'))) {
        links.push({
          text: 'https://kiu.edu.pk',
          url: 'https://kiu.edu.pk',
          icon: 'external'
        });
      }

      console.log('AI response generated successfully');

      return new Response(
        JSON.stringify({
          response: aiResponse,   // sanitized (or from FAQ)
          links: links
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

  } catch (error) {
    console.error('Error in kiu-ai-chat function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process request',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
