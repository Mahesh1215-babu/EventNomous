import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Globe,
    CreditCard, BarChart3, Settings,
    LogOut, Bell, Search, Zap,
    ShieldCheck, PieChart, Users
} from 'lucide-react';

const CorporateDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Institutional Spend', value: '$1.2M', icon: CreditCard, color: 'text-brand-gold' },
        { label: 'Global Summits', value: '08', icon: Globe, color: 'text-brand-accent' },
        { label: 'Network Efficiency', value: '94%', icon: BarChart3, color: 'text-green-500' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white flex transition-colors duration-300">
            {/* Sidebar */}
            <aside className="w-80 border-r border-slate-100 dark:border-slate-700 p-8 flex flex-col space-y-10 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg shadow-brand-gold/20">
                        <span className="text-white font-black uppercase text-sm">E</span>
                    </div>
                    <span className="text-xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">EventNomous</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { label: 'Global Control', icon: Globe, active: true },
                        { label: 'Expenditure', icon: PieChart },
                        { label: 'Institutional Auth', icon: ShieldCheck },
                        { label: 'Division Network', icon: Users },
                        { label: 'Reporting', icon: BarChart3 },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
                            ${item.active ? 'bg-brand-gold text-white shadow-[0_10px_30px_rgba(212,175,55,0.3)]' : 'text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-10 border-t border-slate-100 dark:border-slate-700 space-y-2">
                    <button className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white transition-all">
                        <Settings className="w-5 h-5" />
                        <span>Infrastructure Config</span>
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
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Institutional <span className="text-luxury-gradient">Control.</span></h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium text-sm transition-colors">Managing global event logistics for Google Cloud.</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/30 dark:text-slate-500 group-focus-within:text-brand-gold transition-colors" />
                            <input
                                type="text"
                                placeholder="Audit Global Divisions..."
                                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-3 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-gold/50 text-xs font-bold min-w-[300px] text-brand-obsidian dark:text-white placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-500 transition-all duration-300"
                            />
                        </div>
                        <button className="p-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-brand-gold/30 transition-all text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-gold relative shadow-sm">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-gold rounded-full border-2 border-white dark:border-slate-800"></span>
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="glass-luxury p-8 rounded-[40px] border-slate-100 dark:border-slate-700 space-y-6 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center ${stat.color} shadow-sm`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <TrendingUp className="w-4 h-4 text-brand-obsidian/20 dark:text-slate-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 dark:text-slate-500 mb-1">{stat.label}</p>
                                <p className="text-4xl font-black text-brand-obsidian dark:text-white transition-colors">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regional Performance */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors">Divisional <span className="text-brand-gold">Operations.</span></h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { region: 'North America', summits: 12, spend: '$420k', health: 98 },
                                { region: 'APAC Region', summits: 8, spend: '$310k', health: 92 },
                                { region: 'EMEA Division', summits: 15, spend: '$512k', health: 89 },
                                { region: 'LATAM Market', summits: 4, spend: '$84k', health: 95 },
                            ].map((region, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-luxury p-8 rounded-[40px] border-slate-100 dark:border-slate-700 space-y-6 cursor-pointer bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-black uppercase tracking-tight text-brand-gold">{region.region}</h3>
                                        <span className="text-[8px] font-black bg-white/10 dark:bg-slate-700/50 px-2 py-1 rounded-full uppercase tracking-widest text-brand-obsidian/60 dark:text-slate-400">Live Audit</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[8px] font-black text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-widest">Active Summits</p>
                                            <p className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">{region.summits}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-widest">Gross Expenditure</p>
                                            <p className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">{region.spend}</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-brand-gold h-full" style={{ width: `${region.health}%` }}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors">Institutional <span className="text-brand-gold">Radar.</span></h2>
                        <div className="glass-luxury p-10 rounded-[48px] border-slate-100 dark:border-slate-700 relative overflow-hidden h-full flex flex-col justify-between bg-white dark:bg-slate-800/50 shadow-xl transition-all duration-300">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
                            <div className="space-y-8 relative z-10">
                                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 text-brand-gold rounded-2xl flex items-center justify-center border border-brand-gold/20 shadow-sm">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black uppercase leading-tight text-brand-obsidian dark:text-white transition-colors">Policy Alignment Detected</h3>
                                    <p className="text-brand-obsidian/60 dark:text-slate-400 text-sm font-medium leading-relaxed transition-colors">
                                        Institutional spend for Q4 is trending 12% below budget boundaries. Neural advisor suggests reallocating $45k into 'Executive Engagement' for the EMEA summit.
                                    </p>
                                </div>
                                <button className="w-full btn-premium bg-brand-gold text-white shadow-lg shadow-brand-gold/20">Execute Realignment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CorporateDashboard;

const TrendingUp = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>
)
