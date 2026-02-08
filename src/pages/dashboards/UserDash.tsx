import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, Users, Clock,
    TrendingUp, Plus, Search,
    CreditCard, Layout, Settings,
    LogOut, MessageSquare, Bell, Zap,
    Briefcase, PieChart, Activity
} from 'lucide-react';

const UserDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Intelligence');

    const stats = [
        { label: 'Active Events', value: '03', icon: Calendar, color: 'text-brand-gold' },
        { label: 'Total Budget', value: '$84k', icon: CreditCard, color: 'text-green-500' },
        { label: 'PNPL Limit', value: '$150k', icon: TrendingUp, color: 'text-brand-accent' },
    ];

    const upcomingEvents = [
        { title: 'Global Tech Summit', date: 'Oct 24, 2026', status: 'Planning', budget: '$45,000' },
        { title: 'Nexus Product Launch', date: 'Nov 12, 2026', status: 'Vendor Booking', budget: '$12,500' },
    ];

    // Dummy Data for other tabs
    const portfolioProjects = [
        { title: 'Global Tech Summit', client: 'TechFlow Inc.', date: 'Oct 24, 2026', status: 'Planning', budget: '$45,000', progress: 35 },
        { title: 'Nexus Product Launch', client: 'Nexus Corp', date: 'Nov 12, 2026', status: 'Vendor Booking', budget: '$12,500', progress: 60 },
        { title: 'Annual Gala 2026', client: 'Internal', date: 'Dec 15, 2026', status: 'Concept', budget: '$25,000', progress: 10 },
        { title: 'Q1 Strategy Retreat', client: 'Executive Board', date: 'Jan 10, 2027', status: 'Approved', budget: '$8,000', progress: 5 },
    ];

    const partnerships = [
        { name: 'Elite Catering Co.', category: 'Catering', region: 'North America', rating: 4.9, status: 'Preferred' },
        { name: 'Visionary AV', category: 'Audiovisual', region: 'Europe', rating: 4.8, status: 'Active' },
        { name: 'SecureGuard', category: 'Security', region: 'Global', rating: 4.7, status: 'Contracted' },
        { name: 'Grand Venues', category: 'Venue', region: 'Asia Pacific', rating: 4.9, status: 'Preferred' },
    ];

    const institutionalStats = [
        { label: 'YTD Spend', value: '$1.2M', trend: '+12%', color: 'text-brand-obsidian' },
        { label: 'Cost Savings', value: '$145k', trend: '+8%', color: 'text-green-500' },
        { label: 'Vendor Compliance', value: '98%', trend: '+2%', color: 'text-brand-gold' },
    ];

    const engagementMessages = [
        { sender: 'Sarah Jenkins', role: 'Venue Manager', message: 'The contract for the Grand Ballroom has been updated.', time: '2 hrs ago' },
        { sender: 'David Chen', role: 'AV Specialist', message: 'Confirming the equipment list for the Tech Summit.', time: '5 hrs ago' },
        { sender: 'System', role: 'Notification', message: 'Budget approval required for "Nexus Product Launch".', time: '1 day ago' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white flex transition-colors duration-300">
            {/* Sidebar */}
            <aside className="w-80 border-r border-slate-100 dark:border-slate-800 p-8 flex flex-col space-y-10 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
                        <span className="text-white font-black uppercase text-sm">E</span>
                    </div>
                    <span className="text-xl font-black uppercase tracking-tighter text-brand-obsidian">EventNomous</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { label: 'Intelligence', icon: Layout },
                        { label: 'Portfolio', icon: Briefcase },
                        { label: 'Partnerships', icon: Users },
                        { label: 'Institutional', icon: CreditCard },
                        { label: 'Engagement', icon: MessageSquare },
                    ].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(item.label)}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
                            ${activeTab === item.label ? 'bg-brand-gold text-white shadow-[0_10px_30px_rgba(212,175,55,0.3)]' : 'text-brand-obsidian/40 hover:text-brand-obsidian hover:bg-slate-100'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-10 border-t border-slate-100 dark:border-slate-800 space-y-2 transition-colors duration-300">
                    <button onClick={() => navigate('/settings')} className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 hover:text-brand-obsidian dark:hover:text-white transition-all">
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
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors duration-300">
                            {activeTab === 'Intelligence' ? 'Strategic' : activeTab} <span className="text-luxury-gradient">{activeTab === 'Intelligence' ? 'Intelligence.' : 'Overview.'}</span>
                        </h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium text-sm transition-colors duration-300">Welcome back, Johnathan. Neural planning engine is operational.</p>
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

                {/* Conditional Content */}
                {activeTab === 'Intelligence' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass-luxury p-8 rounded-[40px] border-slate-100 dark:border-slate-700/50 space-y-6 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center justify-between">
                                        <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center ${stat.color}`}>
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <Clock className="w-4 h-4 text-brand-obsidian/20 dark:text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 dark:text-slate-400 mb-1">{stat.label}</p>
                                        <p className="text-4xl font-black text-brand-obsidian dark:text-white transition-colors duration-300">{stat.value}</p>
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
                                            className="glass-luxury p-8 rounded-[32px] border-slate-100 dark:border-slate-700 flex items-center justify-between group hover:border-brand-gold/20 cursor-pointer bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="flex items-center space-x-6">
                                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                                    <Calendar className="w-8 h-8" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{event.status}</p>
                                                    <h3 className="text-xl font-black uppercase text-brand-obsidian dark:text-white transition-colors">{event.title}</h3>
                                                    <p className="text-brand-obsidian/40 dark:text-slate-500 text-xs font-bold transition-colors">{event.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-right space-y-2">
                                                <p className="text-2xl font-black tracking-tighter text-brand-obsidian dark:text-white transition-colors">{event.budget}</p>
                                                <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest inline-block">On Track</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Advisor Panel */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors">Neural <span className="text-brand-gold">Advisor.</span></h2>
                                <div className="glass-luxury p-10 rounded-[48px] border-slate-100 dark:border-slate-700 relative overflow-hidden h-[500px] flex flex-col justify-between bg-white dark:bg-slate-800/50 shadow-xl transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>

                                    <div className="space-y-6 relative z-10">
                                        <div className="w-14 h-14 bg-brand-gold text-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <Zap className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-black uppercase leading-tight text-brand-obsidian dark:text-white transition-colors">Insight: Strategic Vendor Opportunity</h3>
                                        <p className="text-brand-obsidian/60 dark:text-slate-400 text-sm font-medium leading-relaxed transition-colors">
                                            Our engine detected a 15% price variance for high-end audiovisual partners in the Singapore region for Q4. Initiating early booking could yield $8,400 in institutional savings.
                                        </p>
                                    </div>

                                    <button className="w-full btn-premium border-brand-gold/30 text-brand-gold hover:bg-brand-gold/5 relative z-10">
                                        Analyze Opportunity
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Portfolio' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {portfolioProjects.map((project, i) => (
                                <div key={i} className="glass-luxury p-8 rounded-[32px] border-slate-100 dark:border-slate-700 space-y-4 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 transition-colors">{project.status}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase text-brand-obsidian dark:text-white transition-colors">{project.title}</h3>
                                        <p className="text-sm text-brand-obsidian/60 dark:text-slate-400 transition-colors">{project.client}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold text-brand-obsidian/60 dark:text-slate-500 transition-colors">
                                            <span>Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden transition-colors">
                                            <div className="h-full bg-brand-gold rounded-full" style={{ width: `${project.progress}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center text-xs font-bold transition-colors">
                                        <span className="text-brand-obsidian/40 dark:text-slate-500">{project.date}</span>
                                        <span className="text-brand-obsidian dark:text-white">{project.budget}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Partnerships' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {partnerships.map((partner, i) => (
                                <div key={i} className="glass-luxury p-8 rounded-[32px] border-slate-100 dark:border-slate-700 flex items-center justify-between bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-brand-obsidian dark:text-white font-black text-xl transition-colors">
                                            {partner.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-brand-obsidian dark:text-white transition-colors">{partner.name}</h3>
                                            <p className="text-xs font-bold text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-wider transition-colors">{partner.category}</p>
                                            <div className="flex items-center space-x-1 mt-1">
                                                <Activity className="w-3 h-3 text-brand-gold fill-brand-gold" /> {/* Changed from Settings to Activity for rating */}
                                                <span className="text-xs font-bold text-brand-obsidian dark:text-white transition-colors">{partner.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">{partner.status}</span>
                                        <span className="text-xs font-bold text-brand-obsidian/40 dark:text-slate-500">{partner.region}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Institutional' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            {institutionalStats.map((stat, i) => (
                                <div key={i} className="glass-luxury p-8 rounded-[32px] border-slate-100 dark:border-slate-700 text-center space-y-2 bg-white dark:bg-slate-800/50 shadow-sm transition-all duration-300">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 transition-colors">{stat.label}</p>
                                    <h3 className={`text-4xl font-black ${stat.color === 'text-brand-obsidian' ? 'text-brand-obsidian dark:text-white' : stat.color} transition-colors`}>{stat.value}</h3>
                                    <p className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-500/10 inline-block px-2 py-1 rounded-lg">{stat.trend} from last year</p>
                                </div>
                            ))}
                        </div>
                        <div className="glass-luxury p-12 rounded-[40px] border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-center space-y-4 transition-all duration-300">
                            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                                <PieChart className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">Financial Overview</h3>
                            <p className="text-brand-obsidian/60 dark:text-slate-400 max-w-md mx-auto transition-colors">Detailed financial breakdowns and quarterly reports are available in the dedicated Reports module.</p>
                            <button onClick={() => navigate('/reports')} className="btn-premium bg-brand-obsidian text-white dark:bg-white dark:text-brand-obsidian font-bold">View Full Reports</button>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'Engagement' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        {engagementMessages.map((msg, i) => (
                            <div key={i} className="glass-luxury p-6 rounded-[24px] border-slate-100 dark:border-slate-700 flex items-start space-x-4 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-black text-brand-obsidian dark:text-white transition-colors">{msg.sender} <span className="text-brand-obsidian/40 dark:text-slate-500 font-normal text-xs ml-2 transition-colors">{msg.role}</span></h4>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/30 dark:text-slate-600 transition-colors">{msg.time}</span>
                                    </div>
                                    <p className="text-sm font-medium text-brand-obsidian/70 dark:text-slate-400 transition-colors">{msg.message}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default UserDashboard;
