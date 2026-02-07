import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { AIMessage } from '../../types/types';

const mockAIResponses = [
    "Based on your budget of ₹50L, I recommend allocating 30% to catering, 20% to photography, and 15% to venue. This distribution has shown the best results for similar events.",
    "I've found 3 highly-rated vendors in your area that match your requirements. Would you like me to show you their profiles?",
    "Your event is 38 days away. I suggest finalizing vendor bookings within the next week to avoid premium pricing surge.",
    "I can help you optimize your budget by suggesting cost-effective alternatives that maintain quality. Shall I create a detailed breakdown?",
    "Based on 500 guests, you'll need approximately 8 serving stations for efficient catering. I can connect you with vendors who specialize in large events.",
];

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<AIMessage[]>([
        {
            id: '1',
            role: 'assistant',
            content: "Hello! I'm your AI Event Assistant. I can help you with vendor recommendations, budget optimization, and timeline planning. How can I assist you today?",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: AIMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: AIMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)],
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const quickActions = [
        'Recommend vendors',
        'Optimize budget',
        'Create timeline',
        'Guest management tips',
    ];

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full shadow-2xl shadow-brand-accent/30 flex items-center justify-center text-white hover:scale-110 transition-transform z-50 group"
                    >
                        <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`fixed bottom-8 right-8 glass-luxury bg-white rounded-[32px] border-slate-100 shadow-2xl z-50 flex flex-col overflow-hidden ${isMinimized ? 'w-96 h-20' : 'w-[450px] h-[650px]'
                            } transition-all duration-300`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-brand-accent/5 to-transparent">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-tight text-brand-obsidian">
                                        AI Assistant
                                    </h3>
                                    <p className="text-[10px] text-brand-obsidian/40 font-bold">
                                        {isTyping ? 'Typing...' : 'Online'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-all text-brand-obsidian/40 hover:text-brand-obsidian"
                                >
                                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-all text-brand-obsidian/40 hover:text-brand-obsidian"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-4 rounded-2xl ${message.role === 'user'
                                                        ? 'bg-brand-accent text-white'
                                                        : 'bg-slate-50 text-brand-obsidian border border-slate-100'
                                                    }`}
                                            >
                                                <p className="text-sm font-medium leading-relaxed">{message.content}</p>
                                                <p className={`text-[10px] mt-2 ${message.role === 'user' ? 'text-white/60' : 'text-brand-obsidian/40'}`}>
                                                    {message.timestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                                                <div className="flex space-x-2">
                                                    <div className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <div className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                    <div className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Actions */}
                                {messages.length === 1 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-3">
                                            Quick Actions
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {quickActions.map((action) => (
                                                <button
                                                    key={action}
                                                    onClick={() => setInputValue(action)}
                                                    className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-full text-xs font-bold text-brand-obsidian/60 hover:text-brand-obsidian transition-all"
                                                >
                                                    {action}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <div className="p-6 border-t border-slate-100">
                                    <div className="flex items-center space-x-3">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                            placeholder="Ask me anything..."
                                            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none text-sm font-medium"
                                        />
                                        <button
                                            onClick={handleSend}
                                            disabled={!inputValue.trim()}
                                            className="w-12 h-12 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-slate-200 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center text-white transition-all"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
