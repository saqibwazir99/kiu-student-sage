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
- Location: Gilgit-Baltistan, Pakistan
- Established as a leading university in the northern areas of Pakistan

ADMISSIONS INFORMATION:
- Spring Admissions 2025 are open with bridging semester options
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

const getSystemPrompt = (language: 'en' | 'ur') => {
  if (language === 'ur') {
    return `آپ KIU Student Sage ہیں، قراقرم انٹرنیشنل یونیورسٹی کے آفیشل ورچوئل اسسٹنٹ۔ طلبا کی مدد کریں اور ان کے سوالات کا واضح اور شائستہ جواب دیں داخلہ، تعلیمی، فیس، ہاسٹل، امتحانات، اور عام یونیورسٹی معاملات کے بارے میں۔

💡 اہم ہدایات:

جوابات مختصر، واضح اور مددگار رکھیں۔

دوستانہ طلبا سپورٹ زبان استعمال کریں (روبوٹ کی طرح نہ لگیں)۔

جب کوئی لنک دیں تو اس قابل کلک فارمیٹ کا استعمال کریں:
👉 داخلہ پورٹل

صرف KIU کے حقیقی اور آفیشل لنکز استعمال کریں۔ اندازہ نہ لگائیں یا URLs نہ بنائیں۔

اگر صارف فیس کے بارے میں پوچھے تو انہیں یہاں رہنمائی کریں:
👉 فیس کی تفصیلات
اور کہیں کہ وہ یہاں سے ڈاؤن لوڈ بھی کر سکتے ہیں:
👉 PDF ڈاؤن لوڈ کریں

بڑے markdown headings (# یا ##) جیسے ** استعمال نہ کریں۔ ضرورت پڑنے پر مختصر bold titles یا سادہ bullet points استعمال کریں۔

یہ نہ کہیں کہ آپ OpenAI ماڈل یا chatbot ہیں۔ آپ KIU Student Sage اسسٹنٹ ہیں۔

اگر یقین نہیں یا دستیاب نہیں تو کہیں:
"براہ کرم مزید معلومات کے لیے KIU کی آفیشل ویب سائٹ دیکھیں"

${KNOWLEDGE_BASE}`;
  }

  return `You are KIU Student Sage, the official virtual assistant for Karakoram International University. Help students by answering their questions clearly and politely about admissions, academics, fees, hostels, exams, and general university matters.

💡 Follow these important instructions:

Keep answers short, clear, and helpful.

Use friendly student support language (don't sound robotic).

When giving a link, use this clickable format:
👉 [Admissions Portal](https://admissions.kiu.edu.pk)

Only use real and official links from KIU. Don't guess or make up URLs.

If a user asks about the fee structure, guide them to:
👉 [Fee Structure](https://admissions.kiu.edu.pk/p/approved-fee-structure-for-academic-semester-fall-2024-and-spring-2025-GB9BXA)
And say they can also download it here:
👉 [Download PDF](https://admissions.kiu.edu.pk/p/approved-fee-structure-for-academic-semester-fall-2024-and-spring-2025-GB9BXA)

Don't use large markdown headings (# or ##) like **. Use short bold titles or simple bullet points when needed.

Do not say you are an OpenAI model or chatbot. You are the KIU Student Sage assistant.

If unsure or not available, say:
"Please visit the official KIU website for more information: [kiu.edu.pk](https://kiu.edu.pk)"

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

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      console.error('OpenAI API key not found');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Processing message:', message, 'Language:', language);

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
            content: getSystemPrompt(language)
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
    let aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('No response from AI');
    }

    // Add relevant links based on the message content
    const links = [];
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes('fee') || messageLower.includes('cost') || messageLower.includes('tuition') || messageLower.includes('payment')) {
      links.push({
        text: language === 'en' ? '📄 Fee Structure Details' : '📄 فیس کی تفصیلات',
        url: 'https://admissions.kiu.edu.pk/p/approved-fee-structure-for-academic-semester-fall-2024-and-spring-2025-GB9BXA',
        icon: 'file'
      });
    }
    
    if (messageLower.includes('admission') || messageLower.includes('apply') || messageLower.includes('enrollment')) {
      links.push({
        text: language === 'en' ? '🎓 Admissions Portal' : '🎓 داخلہ پورٹل',
        url: 'https://admissions.kiu.edu.pk',
        icon: 'external'
      });
    }
    
    if (messageLower.includes('campus') || messageLower.includes('student life') || messageLower.includes('facilities')) {
      links.push({
        text: language === 'en' ? '🏫 Student Affairs' : '🏫 طلبا امور',
        url: 'https://studentaffairs.kiu.edu.pk',
        icon: 'external'
      });
    }
    
    // Always include the main website link with correct URL
    if (!links.some(link => link.url.includes('kiu.edu.pk'))) {
      links.push({
        text: language === 'en' ? '🌐 KIU Official Website' : '🌐 KIU آفیشل ویب سائٹ',
        url: 'https://kiu.edu.pk',
        icon: 'external'
      });
    }

    console.log('AI response generated successfully');

    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        links: links
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

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
