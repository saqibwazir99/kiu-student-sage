
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, RotateCcw, Phone, Globe, FileText, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { QuickButtons } from './QuickButtons';
import { chatResponses } from '../data/chatResponses';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: Array<{ text: string; action: string }>;
  links?: Array<{ text: string; url: string; icon?: string }>;
}

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: language === 'en' 
        ? "👋 Hello! I'm KIU Assistant. How can I help you today?"
        : "👋 السلام علیکم! میں KIU اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      isBot: true,
      timestamp: new Date(),
      buttons: [
        { text: language === 'en' ? "📋 Admissions" : "📋 داخلہ", action: "admissions" },
        { text: language === 'en' ? "📚 Academics" : "📚 تعلیمی", action: "academics" },
        { text: language === 'en' ? "🏫 Campus Life" : "🏫 کیمپس لائف", action: "campus" },
        { text: language === 'en' ? "💰 Fee Structure" : "💰 فیس کی تفصیلات", action: "fees" },
      ]
    };
    setMessages([welcomeMessage]);
  }, [language]);

  const findResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    const responses = chatResponses[language];
    
    // Check for exact keyword matches first
    for (const [key, response] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    // Default response if no match found
    return responses.default;
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        buttons: response.buttons,
        links: response.links,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleButtonClick = (action: string) => {
    const responses = chatResponses[language];
    const response = responses[action] || responses.default;
    
    handleSendMessage(language === 'en' ? `Tell me about ${action}` : `${action} کے بارے میں بتائیں`);
  };

  const handleRestart = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: language === 'en' 
        ? "👋 Hello! I'm KIU Assistant. How can I help you today?"
        : "👋 السلام علیکم! میں KIU اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      isBot: true,
      timestamp: new Date(),
      buttons: [
        { text: language === 'en' ? "📋 Admissions" : "📋 داخلہ", action: "admissions" },
        { text: language === 'en' ? "📚 Academics" : "📚 تعلیمی", action: "academics" },
        { text: language === 'en' ? "🏫 Campus Life" : "🏫 کیمپس لائف", action: "campus" },
        { text: language === 'en' ? "💰 Fee Structure" : "💰 فیس کی تفصیلات", action: "fees" },
      ]
    };
    setMessages([welcomeMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-white shadow-xl border-green-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=40&h=40&fit=crop&crop=center" 
              alt="KIU Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">KIU Assistant</h3>
            <p className="text-sm text-green-100">
              {language === 'en' ? 'Online • Ready to help' : 'آن لائن • مدد کے لیے تیار'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="text-white hover:bg-white hover:bg-opacity-20"
          >
            <Globe className="h-4 w-4 mr-1" />
            {language === 'en' ? 'اردو' : 'English'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRestart}
            className="text-white hover:bg-white hover:bg-opacity-20"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message} language={language} />
            {message.buttons && (
              <QuickButtons
                buttons={message.buttons}
                onButtonClick={handleButtonClick}
                language={language}
              />
            )}
          </div>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              language === 'en' 
                ? "Type your message..." 
                : "اپنا پیغام ٹائپ کریں..."
            }
            className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500"
            dir={language === 'ur' ? 'rtl' : 'ltr'}
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-2 flex items-center justify-center space-x-4 text-xs text-gray-500">
          <button 
            className="flex items-center space-x-1 hover:text-green-600 transition-colors"
            onClick={() => handleSendMessage("I need human support")}
          >
            <Phone className="h-3 w-3" />
            <span>{language === 'en' ? 'Human Support' : 'انسانی مدد'}</span>
          </button>
          <span>•</span>
          <span>{language === 'en' ? 'Powered by KIU AI' : 'KIU AI کی طرف سے'}</span>
        </div>
      </div>
    </Card>
  );
};
