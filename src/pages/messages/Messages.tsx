import { useState } from 'react';
import { Search, Send, MoreVertical, ArrowLeft } from 'lucide-react';
import { mockConversations, mockMessages } from '../../data/mockData';

const Messages = () => {
    const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
    const [messageInput, setMessageInput] = useState('');

    const handleSend = () => {
        if (!messageInput.trim()) return;
        // In a real app, this would send the message
        setMessageInput('');
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto h-[calc(100vh-5rem)] flex">
                {/* Conversations List */}
                <div className="w-96 border-r border-slate-100 flex flex-col">
                    <div className="p-6 border-b border-slate-100 space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">
                            Messages
                        </h2>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/20" />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {mockConversations.map((conversation) => (
                            <button
                                key={conversation.id}
                                onClick={() => setSelectedConversation(conversation)}
                                className={`w-full p-6 border-b border-slate-50 hover:bg-slate-50 transition-all text-left ${selectedConversation.id === conversation.id ? 'bg-slate-50' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-black">
                                            {conversation.participantNames[1][0]}
                                        </div>
                                        <div>
                                            <p className="font-black text-brand-obsidian">
                                                {conversation.participantNames[1]}
                                            </p>
                                            <p className="text-xs text-brand-obsidian/40">
                                                {conversation.lastMessageTime.toLocaleTimeString('en-IN', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    {conversation.unreadCount > 0 && (
                                        <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-white text-xs font-black">
                                            {conversation.unreadCount}
                                        </div>
                                    )}
                                </div>
                                <p className="text-sm text-brand-obsidian/60 line-clamp-2">
                                    {conversation.lastMessage}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="md:hidden">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-black text-lg">
                                {selectedConversation.participantNames[1][0]}
                            </div>
                            <div>
                                <h3 className="font-black text-brand-obsidian">
                                    {selectedConversation.participantNames[1]}
                                </h3>
                                <p className="text-xs text-brand-obsidian/40">Active now</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center">
                            <MoreVertical className="w-5 h-5 text-brand-obsidian/40" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {mockMessages
                            .filter((msg) => msg.conversationId === selectedConversation.id)
                            .map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.senderId === 'user-001' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[70%] p-4 rounded-2xl ${message.senderId === 'user-001'
                                            ? 'bg-brand-accent text-white'
                                            : 'bg-slate-50 text-brand-obsidian border border-slate-100'
                                            }`}
                                    >
                                        <p className="text-sm font-medium leading-relaxed">{message.content}</p>
                                        <p
                                            className={`text-[10px] mt-2 ${message.senderId === 'user-001' ? 'text-white/60' : 'text-brand-obsidian/40'
                                                }`}
                                        >
                                            {message.timestamp.toLocaleTimeString('en-IN', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Input */}
                    <div className="p-6 border-t border-slate-100">
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your message..."
                                className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none text-sm font-medium"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!messageInput.trim()}
                                className="w-14 h-14 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-slate-200 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center text-white transition-all"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
