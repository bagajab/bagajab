import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Bagaja's AI assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2 group"
        >
          <Bot className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
            Chat with AI
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col max-h-[600px] h-[500px] overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <Bot className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100">AI Assistant</h3>
                <p className="text-xs text-slate-400">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-teal-600 text-white rounded-tr-none'
                      : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-slate-600 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Bagaja's skills..."
                className="w-full bg-slate-800 text-slate-200 pl-4 pr-12 py-3 rounded-xl border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 text-teal-500 hover:text-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChat;
