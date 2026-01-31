import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Users, Briefcase, TrendingUp,
    MessageSquare, Settings, LogOut,
    Bell, Search, Globe, DollarSign,
    Zap, Star, Calendar
} from 'lucide-react';

const VendorDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Active Bookings', value: '12', icon: Briefcase, color: 'text-brand-gold' },
        { label: 'Projected Revenue', value: '$124k', icon: DollarSign, color: 'text-green-500' },
        { label: 'Partner Score', value: '4.98', icon: Star, color: 'text-brand-accent' },
    ];

    const currentProjects = [
        { client: 'Google Cloud Asia', event: 'Global Tech Summit', date: 'Oct 24, 2026', scope: 'Institutional Catering' },
        { client: 'Tesla Motors', event: 'Nexus Launch', date: 'Nov 12, 2026', scope: 'Immersive Setup' },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-obsidian flex">
            {/* Sidebar */}
            <aside className="w-80 border-r border-slate-100 p-8 flex flex-col space-y-10 bg-slate-50/50">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-black uppercase text-sm">E</span>
                    </div>
                    <span className="text-xl font-black uppercase tracking-tighter text-brand-obsidian">EventNomous</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { label: 'Partner Intel', icon: Globe, active: true },
                        { label: 'Client Orders', icon: Briefcase },
                        { label: 'Network', icon: Users },
                        { label: 'Revenue Ops', icon: DollarSign },
                        { label: 'Communications', icon: MessageSquare },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
                            ${item.active ? 'bg-brand-accent text-white shadow-[0_10px_30px_rgba(59,130,246,0.2)]' : 'text-brand-obsidian/40 hover:text-brand-obsidian hover:bg-slate-100'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-10 border-t border-slate-100 space-y-2">
                    <button className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">
                        <Settings className="w-5 h-5" />
                        <span>Partner Configuration</span>
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
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-obsidian">Partner <span className="text-brand-accent">Intelligence.</span></h1>
                        <p className="text-brand-obsidian/60 font-medium text-sm">Operational overview for Global Partners.</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/30 group-focus-within:text-brand-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Search Client Network..."
                                className="bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-accent/50 text-xs font-bold min-w-[300px] text-brand-obsidian placeholder:text-brand-obsidian/30"
                            />
                        </div>
                        <button className="p-3 bg-white rounded-full border border-slate-200 hover:border-brand-accent/30 transition-all text-brand-obsidian/40 hover:text-brand-accent relative shadow-sm">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-accent rounded-full border-2 border-white"></span>
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
                                <TrendingUp className="w-4 h-4 text-brand-obsidian/20" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-1">{stat.label}</p>
                                <p className="text-4xl font-black text-brand-obsidian">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dashboard Sections */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight">Active <span className="text-brand-accent">Contracts.</span></h2>
                        <div className="space-y-4">
                            {currentProjects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="glass-luxury p-8 rounded-[32px] border-slate-100 flex items-center justify-between group hover:border-brand-accent/30 cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent group-hover:rotate-12 transition-transform">
                                            <Calendar className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{project.client}</p>
                                            <h3 className="text-xl font-black uppercase text-brand-obsidian">{project.event}</h3>
                                            <p className="text-brand-obsidian/40 text-xs font-bold">{project.scope}</p>
                                        </div>
                                    </div>
                                    <button className="btn-premium border-brand-accent/20 text-brand-accent py-2 px-6 rounded-full group-hover:bg-brand-accent/10 transition-all">
                                        Manage
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Market <span className="text-brand-accent">Insights.</span></h2>
                        <div className="glass-luxury p-10 rounded-[48px] border-slate-100 relative overflow-hidden h-full bg-white shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl"></div>
                            <div className="space-y-8 relative z-10">
                                <div className="w-14 h-14 bg-brand-accent text-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black uppercase text-brand-obsidian">Service Demand Spike</h3>
                                    <p className="text-brand-obsidian/60 text-sm font-medium leading-relaxed">
                                        Neural analysis indicates a 22% increase in demand for 'Sustainable Immersive Setups' for upcoming Q1 corporate retreats in the EMEA region.
                                    </p>
                                </div>
                                <button className="w-full btn-premium bg-brand-accent text-white shadow-lg shadow-brand-accent/20">Adjust Offerings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VendorDashboard;
