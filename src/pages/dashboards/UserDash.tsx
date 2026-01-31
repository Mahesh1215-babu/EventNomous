import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, Users, Clock,
    TrendingUp, Plus, Search,
    CreditCard, Layout, Settings,
    LogOut, MessageSquare, Bell, Zap
} from 'lucide-react';

const UserDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Active Events', value: '03', icon: Calendar, color: 'text-brand-gold' },
        { label: 'Total Budget', value: '$84k', icon: CreditCard, color: 'text-green-500' },
        { label: 'PNPL Limit', value: '$150k', icon: TrendingUp, color: 'text-brand-accent' },
    ];

    const upcomingEvents = [
        { title: 'Global Tech Summit', date: 'Oct 24, 2026', status: 'Planning', budget: '$45,000' },
        { title: 'Nexus Product Launch', date: 'Nov 12, 2026', status: 'Vendor Booking', budget: '$12,500' },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-obsidian flex">
            {/* Sidebar */}
            <aside className="w-80 border-r border-slate-100 p-8 flex flex-col space-y-10 bg-slate-50/50">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
                        <span className="text-white font-black uppercase text-sm">E</span>
                    </div>
                    <span className="text-xl font-black uppercase tracking-tighter text-brand-obsidian">EventNomous</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { label: 'Intelligence', icon: Layout, active: true },
                        { label: 'Portfolio', icon: Calendar },
                        { label: 'Partnerships', icon: Users },
                        { label: 'Institutional', icon: CreditCard },
                        { label: 'Engagement', icon: MessageSquare },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
                            ${item.active ? 'bg-brand-gold text-white shadow-[0_10px_30px_rgba(212,175,55,0.3)]' : 'text-brand-obsidian/40 hover:text-brand-obsidian hover:bg-slate-100'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-10 border-t border-slate-100 space-y-2">
                    <button className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">
                        <Settings className="w-5 h-5" />
                        <span>Executive Configuration</span>
                    </button>
                    <button onClick={() => navigate('/')} className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-red-500/80 hover:text-red-500 hover:bg-red-500/5 transition-all">
                        <LogOut className="w-5 h-5" />
                        <span>Terminate Session</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-12 space-y-12 overflow-y-auto">
                {/* Header */}
                <header className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-obsidian">Strategic <span className="text-luxury-gradient">Intelligence.</span></h1>
                        <p className="text-brand-obsidian/60 font-medium text-sm">Welcome back, Johnathan. Neural planning engine is operational.</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/30 group-focus-within:text-brand-gold transition-colors" />
                            <input
                                type="text"
                                placeholder="Search Global Database..."
                                className="bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-gold/50 text-xs font-bold min-w-[300px] text-brand-obsidian placeholder:text-brand-obsidian/30"
                            />
                        </div>
                        <button className="p-3 bg-white rounded-full border border-slate-200 hover:border-brand-gold/30 transition-all text-brand-obsidian/40 hover:text-brand-gold relative shadow-sm">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-gold rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="glass-luxury p-8 rounded-[40px] border-slate-100 space-y-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <Clock className="w-4 h-4 text-brand-obsidian/20" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-1">{stat.label}</p>
                                <p className="text-4xl font-black text-brand-obsidian">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Dashboard Section */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Active Portfolio */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Active <span className="text-brand-gold">Portfolio.</span></h2>
                            <button onClick={() => navigate('/events/create')} className="flex items-center space-x-2 px-6 py-2 bg-brand-gold text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
                                <Plus className="w-4 h-4" />
                                <span>Initiate Project</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {upcomingEvents.map((event, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-luxury p-8 rounded-[32px] border-slate-100 flex items-center justify-between group hover:border-brand-gold/20 cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                            <Calendar className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{event.status}</p>
                                            <h3 className="text-xl font-black uppercase text-brand-obsidian">{event.title}</h3>
                                            <p className="text-brand-obsidian/40 text-xs font-bold">{event.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <p className="text-2xl font-black tracking-tighter text-brand-obsidian">{event.budget}</p>
                                        <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest inline-block">On Track</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* AI Advisor Panel */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Neural <span className="text-brand-gold">Advisor.</span></h2>
                        <div className="glass-luxury p-10 rounded-[48px] border-slate-100 relative overflow-hidden h-[500px] flex flex-col justify-between bg-white shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>

                            <div className="space-y-6 relative z-10">
                                <div className="w-14 h-14 bg-brand-gold text-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black uppercase leading-tight text-brand-obsidian">Insight: Strategic Vendor Opportunity</h3>
                                <p className="text-brand-obsidian/60 text-sm font-medium leading-relaxed">
                                    Our engine detected a 15% price variance for high-end audiovisual partners in the Singapore region for Q4. Initiating early booking could yield $8,400 in institutional savings.
                                </p>
                            </div>

                            <button className="w-full btn-premium border-brand-gold/30 text-brand-gold hover:bg-brand-gold/5 relative z-10">
                                Analyze Opportunity
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;
