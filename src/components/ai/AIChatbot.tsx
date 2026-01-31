import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const SYSTEM_PROMPT = `You are the PNPL (Post-Now, Pay-Later) AI Advisor. PNPL is a luxury fintech platform for institutional event financing. 
Your tone should be sophisticated, professional, and helpful. 
Answer questions about event planning, financing options, and the PNPL platform.

VENDORS KNOWLEDGE:
- Aether Catering: Culinary services, Singapore-based, Premium level.
- Lumina Visuals: Media and production, Tokyo-based, Elite level.
- Nexus Logistics: Execution and logistics, Dubai-based, Institutional level.
- Sonic Harmony: Entertainment, London-based, Premium level.

If you don't know the answer, politely direct them to the Support section. Keep responses concise and insightful.`;

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Neural Assistant Online. I am the AI advisor for PNPL (Post-Now, Pay-Later), the institutional event financing platform. How may I assist with your planning?' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: SYSTEM_PROMPT
            });

            const chat = model.startChat({
                history: messages.map(msg => ({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.content }],
                })),
                generationConfig: {
                    maxOutputTokens: 500,
                },
            });

            const result = await chat.sendMessage(input);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'assistant', content: text }]);
        } catch (error) {
            console.error('Gemini API Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm experiencing a connectivity glitch with the Neural Engine. This usually happens if the Gemini API Key is missing or invalid. Please check your .env file and ensure VITE_GEMINI_API_KEY is correctly set." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[calc(100vw-2rem)] sm:w-[450px] h-[650px] glass-luxury border-black/5 mb-8 rounded-[40px] flex flex-col overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                    >
                        {/* Header */}
                        <div className="p-8 bg-brand-gold text-white flex items-center justify-between border-b border-black/5 shadow-lg">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-black uppercase tracking-widest">Neural Advisor</h3>
                                    <p className="text-[10px] font-black uppercase opacity-80">Status: Operational</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-slate-50/30 backdrop-blur-xl">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-6 rounded-[28px] text-sm font-medium leading-relaxed
                                        ${m.role === 'user'
                                            ? 'bg-brand-gold text-white shadow-lg'
                                            : 'bg-white border border-slate-100 text-slate-800 shadow-sm'}`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                                        <Loader2 className="w-5 h-5 animate-spin text-brand-gold" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="p-8 bg-white border-t border-slate-100"
                        >
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Consult with Neural Engine..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-6 pr-16 outline-none focus:ring-2 focus:ring-brand-gold/30 text-slate-900 font-bold placeholder:text-slate-400"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold text-white rounded-xl flex items-center justify-center hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-20 h-20 rounded-[32px] flex items-center justify-center transition-all duration-500 shadow-2xl relative group
                    ${isOpen ? 'bg-brand-obsidian border-none' : 'bg-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-110'}`}
            >
                {isOpen ? <X className="w-8 h-8 text-white" /> : (
                    <>
                        <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-4 border-brand-gold flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-brand-obsidian rounded-full animate-ping"></span>
                        </span>
                    </>
                )}
            </button>
        </div>
    );
};

export default AIChatbot;
