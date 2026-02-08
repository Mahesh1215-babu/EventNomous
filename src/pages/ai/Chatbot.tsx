import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, MoreVertical } from 'lucide-react';
import ChatWindow from '../../components/ai/ChatWindow';
import { useChat } from '../../hooks/useChat';

const Chatbot = () => {
    const navigate = useNavigate();
    const { isTyping } = useChat();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors duration-300">
            {/* Header */}
            <header className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 px-6 py-4 sticky top-0 z-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center transition-all text-brand-obsidian/60 dark:text-slate-400"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-xl font-black text-brand-obsidian dark:text-white tracking-tight transition-colors">Event AI Assistant</h1>
                                <p className="text-xs font-bold text-green-500 flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span>{isTyping ? 'Typing...' : 'Online'}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="w-10 h-10 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center transition-all text-brand-obsidian/40 dark:text-slate-400">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col">
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col transition-all duration-300">
                    <ChatWindow fullPage={true} />
                </div>
            </main>
        </div>
    );
};

export default Chatbot;
