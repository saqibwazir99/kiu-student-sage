
import React, { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { QuickButtons } from './QuickButtons';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: Array<{ text: string; action: string }>;
  links?: Array<{ text: string; url: string; icon?: string }>;
}

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  language: 'en' | 'ur';
  onButtonClick: (action: string) => void;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isTyping,
  language,
  onButtonClick,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-1 bg-gradient-to-b from-gray-50 to-white">
      {messages.map((message) => (
        <div key={message.id}>
          <ChatMessage message={message} language={language} />
          {message.buttons && (
            <QuickButtons
              buttons={message.buttons}
              onButtonClick={onButtonClick}
              language={language}
            />
          )}
        </div>
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};
