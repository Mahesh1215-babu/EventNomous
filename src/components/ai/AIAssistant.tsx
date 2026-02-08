import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import ChatWindow from './ChatWindow';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const { isTyping } = useChat(); // Only need isTyping for the header status

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
                        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-accent rounded-full shadow-2xl shadow-brand-accent/30 flex items-center justify-center text-white hover:scale-110 transition-transform z-50 group"
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
                            <ChatWindow />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
