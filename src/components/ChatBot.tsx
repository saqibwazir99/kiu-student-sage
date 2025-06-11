
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

  const createWelcomeMessage = (): Message => ({
    id: Date.now().toString(),
    text: language === 'en' 
      ? "👋 Hello! I'm KIU Assistant, powered by AI. I can help you with admissions, academics, campus life, fees, and any other questions about Karakoram International University. How can I assist you today?"
      : "👋 السلام علیکم! میں KIU اسسٹنٹ ہوں، AI کی طاقت سے بنایا گیا۔ میں آپ کو داخلہ، تعلیمی، کیمپس لائف، فیس، اور قراقرم انٹرنیشنل یونیورسٹی کے بارے میں کسی بھی سوال میں مدد کر سکتا ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
    isBot: true,
    timestamp: new Date(),
    buttons: [
      { text: language === 'en' ? "📋 Admissions" : "📋 داخلہ", action: "admissions" },
      { text: language === 'en' ? "📚 Academics" : "📚 تعلیمی", action: "academics" },
      { text: language === 'en' ? "🏫 Campus Life" : "🏫 کیمپس لائف", action: "campus" },
      { text: language === 'en' ? "💰 Fee Structure" : "💰 فیس کی تفصیلات", action: "fees" },
    ],
    links: []
  });

  useEffect(() => {
    setMessages([createWelcomeMessage()]);
  }, [language]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      console.log('Sending message to AI:', userMessage);
      
      const { data, error } = await supabase.functions.invoke('kiu-ai-chat', {
        body: { 
          message: userMessage,
          language: language
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('AI response received:', data);
      return data.response || (language === 'en' ? 
        "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team." :
        "معذرت، میں فی الوقت آپ کی درخواست پر کارروائی کرنے میں مشکل کا سامنا کر رہا ہوں۔ دوبارہ کوشش کریں یا ہماری سپورٹ ٹیم سے رابطہ کریں۔"
      );
    } catch (error) {
      console.error('Error getting AI response:', error);
      return language === 'en' ? 
        "I'm experiencing some technical difficulties. Please try again in a moment." :
        "مجھے کچھ تکنیکی مشکلات کا سامنا ہے۔ کرپیا ایک لمحے میں دوبارہ کوشش کریں۔";
    }
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

    try {
      const aiResponse = await getAIResponse(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isBot: true,
        timestamp: new Date(),
        links: []
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleButtonClick = (action: string) => {
    const actionMessages = {
      admissions: language === 'en' ? "Tell me about admissions at KIU" : "KIU میں داخلے کے بارے میں بتائیں",
      academics: language === 'en' ? "What academic programs does KIU offer?" : "KIU کیا تعلیمی پروگرام پیش کرتا ہے؟",
      campus: language === 'en' ? "Tell me about campus life at KIU" : "KIU میں کیمپس لائف کے بارے میں بتائیں",
      fees: language === 'en' ? "What is the fee structure at KIU?" : "KIU میں فیس کی تفصیلات کیا ہیں؟"
    };
    
    handleSendMessage(actionMessages[action as keyof typeof actionMessages] || action);
  };

  const handleRestart = () => {
    setMessages([createWelcomeMessage()]);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const handleHumanSupport = () => {
    handleSendMessage(language === 'en' ? "I need human support" : "مجھے انسانی مدد چاہیے");
  };

  return (
    <Card className="w-full max-w-5xl mx-auto h-[700px] flex flex-col bg-gradient-to-b from-white to-gray-50 shadow-2xl border-0 rounded-2xl overflow-hidden">
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
