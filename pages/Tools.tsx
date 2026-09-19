import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, RotateCcw, ShieldCheck, AlertCircle, HeartPulse, Briefcase, HelpCircle, Bot, User } from 'lucide-react';
import Markdown from 'react-markdown';
import { sendMessageToAdvisor, ChatMessage } from '../services/geminiService';

const SUGGESTED_QUERIES = [
  {
    id: 'ltc',
    label: 'Immediate Care Plan (Long-Term Care)',
    icon: HeartPulse,
    query: 'How does the Immediate Care Plan work if someone is already residing in assisted living or memory care?',
  },
  {
    id: 'biz',
    label: 'Business Tax Strategy',
    icon: Briefcase,
    query: 'What are the corporate tax deduction benefits of setting up a Defined Benefit Plan for business owners?',
  },
  {
    id: 'fiduciary',
    label: 'Fiduciary Difference',
    icon: HelpCircle,
    query: 'How does a fiduciary insurance advisory differ from a commission-based insurance broker?',
  },
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'model',
  text: `Welcome to **Vitannis Questions & Advice**. 

I am here to answer your questions regarding our specialized solutions, including:
* **Immediate Care Plan**: Guaranteed lifetime income solutions for families currently paying facility or memory care expenses.
* **Business Strategies**: Defined Benefit Plans, key person protection, and buy-sell funding.
* **Private Client Advisory**: Independent fiduciary analysis of life insurance and wealth preservation strategies.

Select a suggested prompt below or type your question in the chat box to begin.`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const Tools: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Prepare previous history for the AI model
    const chatHistory = messages
      .filter((msg) => msg.id !== 'welcome')
      .map((msg) => ({ role: msg.role, text: msg.text }));

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const reply = await sendMessageToAdvisor(messageContent, chatHistory);
      const assistantMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'model',
        text: 'I apologize, but I encountered an issue connecting to the advisory server. Please try submitting your question again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Keep focus on input for fluid desktop typing
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInputMessage('');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section className="bg-brand-teal text-white py-14 md:py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="opacity-70">Home</span> / Questions &amp; Advice
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            Questions &amp; Advice <Sparkles className="text-brand-gold w-7 h-7 md:w-8 md:h-8 animate-pulse-slow" />
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl font-light">
            Direct, fiduciary-level intelligence on the Immediate Care Plan, business tax deductions, and wealth protection.
          </p>
        </div>
      </section>

      {/* Main Interactive Chat Section */}
      <section className="py-12 md:py-16 bg-white" id="qa-chat-section">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Outer Chat Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-[740px] md:h-[780px]">
            
            {/* Chat Top Bar */}
            <div className="bg-brand-teal text-white px-6 py-4 flex items-center justify-between border-b border-brand-teal-light">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-lg text-white leading-tight">
                    Questions &amp; Advice
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-brand-cream/70 font-light">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Vitannis Fiduciary AI Advisor &bull; Online
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetChat}
                className="text-xs text-brand-cream/80 hover:text-brand-gold flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-brand-teal-light/50 transition cursor-pointer"
                title="Restart conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-brand-cream-light/40">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isUser
                          ? 'bg-brand-gold text-brand-teal font-semibold'
                          : 'bg-brand-teal text-brand-gold'
                      }`}
                    >
                      {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    {/* Speech Bubble */}
                    <div className={`max-w-[85%] md:max-w-[78%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                      <div
                        className={`rounded-2xl px-5 py-3.5 shadow-sm text-sm leading-relaxed ${
                          isUser
                            ? 'bg-brand-teal text-white rounded-tr-xs'
                            : 'bg-white border border-gray-200 text-brand-dark rounded-tl-xs'
                        }`}
                      >
                        {isUser ? (
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        ) : (
                          <div className="markdown-body">
                            <Markdown>{msg.text}</Markdown>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-teal text-brand-gold flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-xs px-5 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce"></div>
                      <span className="text-xs text-gray-500 ml-2 font-light">Consulting fiduciary intelligence...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Box Input Area with Suggested Entries */}
            <div className="p-4 md:p-5 bg-white border-t border-gray-200">
              
              {/* Suggested Entries in the chat box */}
              <div className="mb-3">
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-gold" /> Suggested Questions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUERIES.map((suggestion) => {
                    const Icon = suggestion.icon;
                    return (
                      <button
                        key={suggestion.id}
                        type="button"
                        onClick={() => handleSendMessage(suggestion.query)}
                        disabled={isLoading}
                        className="text-left text-xs bg-brand-cream-light hover:bg-brand-cream text-brand-teal border border-brand-cream hover:border-brand-gold/50 px-3 py-1.5 rounded-full transition-all duration-150 flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                      >
                        <Icon className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="truncate max-w-[280px] md:max-w-none">{suggestion.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Chat Textarea & Submit */}
              <div className="flex items-end gap-2 bg-brand-cream-light/60 border border-gray-300 focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/20 rounded-xl p-2 transition">
                <textarea
                  ref={inputRef}
                  rows={2}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about the Immediate Care Plan, business tax deductions, or coverage..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent border-0 outline-none text-sm text-brand-dark placeholder-gray-400 resize-none p-2 leading-relaxed"
                />

                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-brand-gold hover:bg-brand-teal text-brand-teal hover:text-white disabled:bg-gray-200 disabled:text-gray-400 p-2.5 rounded-lg transition shadow-sm font-semibold flex items-center justify-center shrink-0 cursor-pointer disabled:cursor-not-allowed"
                  title="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Disclaimer */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-500 font-light">
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-brand-gold shrink-0" />
                  Educational purposes only &bull; Does not constitute binding fiduciary or legal advice.
                </span>
                <span className="hidden sm:inline text-gray-400">
                  Press Enter to send, Shift+Enter for newline
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Tools;
