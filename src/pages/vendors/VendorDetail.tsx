import { useNavigate } from 'react-router-dom';
import {
    Star, MapPin, ShieldCheck,
    ArrowLeft,
    Zap, Users, DollarSign, CreditCard,
    Share2, Heart
} from 'lucide-react';

const VendorDetail = () => {
    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Back & Actions */}
                <div className="flex justify-between items-center">
                    <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 hover:text-brand-obsidian dark:hover:text-white transition-all">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Marketplace</span>
                    </button>
                    <div className="flex items-center space-x-4">
                        <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white transition-all shadow-sm">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 text-brand-obsidian/40 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-500 transition-all shadow-sm">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Hero section */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <span className="px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-accent/20">Elite Partner</span>
                                <div className="flex items-center space-x-1 text-brand-gold">
                                    <Star className="w-4 h-4 fill-brand-gold" />
                                    <span className="text-sm font-black">5.0</span>
                                </div>
                            </div>
                            <h1 className="text-6xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors duration-300">Aether <span className="text-brand-accent">Catering.</span></h1>
                            <p className="text-xl text-brand-obsidian/60 dark:text-slate-400 font-medium leading-relaxed max-w-xl transition-colors duration-300">
                                Delivering Michelin-grade culinary experiences for global summits. Specialized in institutional-scale luxury execution and sustainable sourcing.
                            </p>
                            <div className="flex items-center space-x-8 pt-4">
                                <div className="flex items-center space-x-3 text-brand-obsidian/60 dark:text-slate-500">
                                    <MapPin className="w-5 h-5 text-brand-accent" />
                                    <span className="text-sm font-bold">Singapore & APAC</span>
                                </div>
                                <div className="flex items-center space-x-3 text-brand-obsidian/60 dark:text-slate-500">
                                    <Users className="w-5 h-5 text-brand-accent" />
                                    <span className="text-sm font-bold">Capacity: 5k+</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { label: 'Audit Score', value: '98%', icon: ShieldCheck },
                                { label: 'PNPL Ready', value: 'Yes', icon: CreditCard },
                                { label: 'Min. Budget', value: '$12k', icon: DollarSign }
                            ].map((stat, i) => (
                                <div key={i} className="glass-luxury p-6 rounded-[32px] border-slate-100 dark:border-slate-700 space-y-4 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300">
                                    <stat.icon className="w-6 h-6 text-brand-gold" />
                                    <div>
                                        <p className="text-[8px] font-black text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                        <p className="text-lg font-black text-brand-obsidian dark:text-white transition-colors duration-300">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Booking card */}
                        <div className="glass-luxury p-12 rounded-[56px] border-slate-100 dark:border-slate-700/50 space-y-10 relative overflow-hidden bg-white dark:bg-slate-800/50 shadow-2xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors duration-300">Institutional <span className="text-brand-accent">Briefing.</span></h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brand-accent uppercase tracking-widest ml-1">Event Type Selection</label>
                                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-brand-accent/50 text-brand-obsidian dark:text-white font-bold appearance-none transition-colors duration-300">
                                        <option>Corporate Summit</option>
                                        <option>Technology Launch</option>
                                        <option>Executive Retreat</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-accent uppercase tracking-widest ml-1">Proposed Date</label>
                                        <input type="date" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-brand-accent/50 text-brand-obsidian dark:text-white font-bold shadow-sm transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-accent uppercase tracking-widest ml-1">Delegate Estimate</label>
                                        <input type="number" placeholder="500" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-brand-accent/50 text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-500 transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full btn-premium bg-brand-accent text-white py-5 shadow-lg shadow-brand-accent/20 flex items-center justify-center space-x-3">
                                    <span>Initiate Briefing</span>
                                    <Zap className="w-5 h-5" />
                                </button>
                                <p className="text-center text-[10px] font-black text-brand-obsidian/30 dark:text-slate-500 uppercase tracking-widest">Pricing will be neural-calculated upon briefing</p>
                            </div>
                        </div>

                        {/* Recent Projects */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors duration-300">Institutional <span className="text-brand-gold">Proof.</span></h3>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" className="rounded-3xl h-40 w-full object-cover border border-slate-100 dark:border-slate-700 hover:border-brand-gold/20 transition-all cursor-pointer shadow-sm" alt="project" />
                                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop" className="rounded-3xl h-40 w-full object-cover border border-slate-100 dark:border-slate-700 hover:border-brand-gold/20 transition-all cursor-pointer shadow-sm" alt="project" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDetail;
