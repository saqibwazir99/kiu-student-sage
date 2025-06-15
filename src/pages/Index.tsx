import React from 'react';
import { ChatBot } from '../components/ChatBot';
import { useEffect } from "react";
import { fetchCrawledContent } from "@/utils/fetchCrawledContent";

const LMS_FAQ_URL = "https://lms.kiu.edu.pk/faqs";

/** Extract and summarize the FAQ content from crawled text */
function summarizeLMSFAQs(text) {
  // Very basic summary extractor: extracts 8-10 top QA pairs, returns as array
  // For a real app, would use AI-powered summarization.
  // For this example, just grab some Q/A like "Q: ... A: ..." pairs from the first chunk
  const pairs = [];
  const regex = /Q(?:\.|:)?\s+([^\n]+)[\n\r]+A(?:\.|:)?\s+([^\n]+)/gi;
  let m;
  while ((m = regex.exec(text)) && pairs.length < 10) {
    pairs.push({ q: m[1].trim(), a: m[2].trim() });
  }
  return pairs;
}

const Index = () => {
  useEffect(() => {
    // Only run once, fetch scholarships and student affair content
    fetchCrawledContent([
      "https://studentaffairs.kiu.edu.pk/",
      "https://www.kiu.edu.pk/center/scholarships-2",
      LMS_FAQ_URL,
    ]).then(results => {
      console.log("Crawled Student Affairs, Scholarships & LMS FAQ content:", results);
      // Find LMS crawled content and store summarized Q/A to localStorage
      const lmsFaq = (results || []).find(r => r.url === LMS_FAQ_URL)?.content;
      if (lmsFaq) {
        const faqs = summarizeLMSFAQs(lmsFaq);
        localStorage.setItem('lms_faq_pairs', JSON.stringify(faqs));
        console.log("Extracted LMS FAQs:", faqs);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-green-200 p-2">
                <img 
                  src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
                  alt="KIU Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KIU Assistant</h1>
                <p className="text-sm text-gray-500">AI-Powered Student Support</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Karakoram International University
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to KIU AI Assistant
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant answers about admissions, courses, campus life, and more. 
            Our AI assistant is here to help current and prospective students 24/7.
          </p>
        </div>

        {/* Chatbot Container */}
        <div className="max-w-4xl mx-auto">
          <ChatBot />
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Admissions</h3>
            <p className="text-gray-600">Learn about admission requirements, deadlines, and application process.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Academics</h3>
            <p className="text-gray-600">Explore departments, programs, and course offerings.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🏫</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Campus Life</h3>
            <p className="text-gray-600">Discover facilities, activities, and student services.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
