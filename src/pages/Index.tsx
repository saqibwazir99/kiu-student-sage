
import React from 'react';
import { ChatBot } from '../components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KIU Assistant</h1>
                <p className="text-sm text-gray-500">AI-Powered Student Support</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Karachi Institute of Economics & Technology
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
