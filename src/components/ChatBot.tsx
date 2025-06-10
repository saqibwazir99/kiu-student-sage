
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
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

  const createWelcomeMessage = (): Message => ({
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
  });

  useEffect(() => {
    setMessages([createWelcomeMessage()]);
  }, [language]);

  const findResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    const responses = chatResponses[language];
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    return responses.default;
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        buttons: response.buttons || undefined,
        links: response.links || undefined,
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
    setMessages([createWelcomeMessage()]);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const handleHumanSupport = () => {
    handleSendMessage("I need human support");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-white shadow-xl border-green-200">
      <ChatHeader
        language={language}
        onLanguageChange={handleLanguageChange}
        onRestart={handleRestart}
      />
      
      <ChatMessages
        messages={messages}
        isTyping={isTyping}
        language={language}
        onButtonClick={handleButtonClick}
      />
      
      <ChatInput
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSendMessage={() => handleSendMessage()}
        onHumanSupport={handleHumanSupport}
        language={language}
      />
    </Card>
  );
};
