import { Send, Sparkles } from 'lucide-react';
import { AIMessage } from '../../types/types';
import { useChat } from '../../hooks/useChat';

interface ChatWindowProps {
    minimized?: boolean;
    fullPage?: boolean;
}

export default function ChatWindow({ minimized = false, fullPage = false }: ChatWindowProps) {
    const {
        messages,
        inputValue,
        setInputValue,
        isTyping,
        handleSend,
        messagesEndRef,
    } = useChat();

    const quickActions = [
        'Recommend vendors',
        'Optimize budget',
        'Create timeline',
        'Guest management tips',
    ];

    if (minimized) return null;

    return (
        <>
            {/* Messages */}
            <div className={`flex-1 overflow-y-auto ${fullPage ? 'p-8 space-y-6' : 'p-6 space-y-4'}`}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                                <Sparkles className="w-4 h-4 text-brand-accent" />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] ${fullPage ? 'p-6 text-base' : 'p-4 text-sm'} rounded-2xl ${message.role === 'user'
                                ? 'bg-brand-accent text-white rounded-tr-none'
                                : 'bg-slate-50 text-brand-obsidian border border-slate-100 rounded-tl-none'
                                }`}
                        >
                            <p className="font-medium leading-relaxed">{message.content}</p>
                            <p className={`text-[10px] mt-2 ${message.role === 'user' ? 'text-white/60' : 'text-brand-obsidian/40'}`}>
                                {message.timestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                            <Sparkles className="w-4 h-4 text-brand-accent" />
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-none">
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
                <div className={`${fullPage ? 'px-8 pb-6' : 'px-6 pb-4'}`}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-3">
                        Quick Actions
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action) => (
                            <button
                                key={action}
                                onClick={() => setInputValue(action)}
                                className={`px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-full font-bold text-brand-obsidian/60 hover:text-brand-obsidian transition-all ${fullPage ? 'text-sm' : 'text-xs'}`}
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className={`${fullPage ? 'p-8' : 'p-6'} border-t border-slate-100 bg-white`}>
                <div className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything..."
                        className={`flex-1 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-medium ${fullPage ? 'px-6 py-4 text-base' : 'px-4 py-3 text-sm'}`}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`${fullPage ? 'w-14 h-14' : 'w-12 h-12'} bg-brand-accent hover:bg-brand-accent/90 disabled:bg-slate-200 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center text-white transition-all`}
                    >
                        <Send className={`${fullPage ? 'w-6 h-6' : 'w-5 h-5'}`} />
                    </button>
                </div>
            </div>
        </>
    );
}
