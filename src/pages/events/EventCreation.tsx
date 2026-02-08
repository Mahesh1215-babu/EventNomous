import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Users, MapPin,
    Zap, ArrowRight, ArrowLeft,
    ShieldCheck, Sparkles, CreditCard,
    Target, Clock, BarChart3
} from 'lucide-react';

const EventCreation = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [calculating, setCalculating] = useState(false);

    const nextStep = () => {
        if (step === 2) {
            setCalculating(true);
            setTimeout(() => {
                setCalculating(false);
                setStep(3);
            }, 3000);
        } else {
            setStep(s => s + 1);
        }
    };

    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden text-brand-obsidian dark:text-white transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px]"></div>

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                {/* Progress */}
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-2 rounded-3xl border border-slate-100 dark:border-slate-700 max-w-sm mx-auto shadow-sm transition-colors">
                    {[1, 2, 3, 4].map(i => (
                        <div
                            key={i}
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all ${step >= i ? 'bg-brand-gold text-white shadow-[0_10px_20px_rgba(212,175,55,0.3)]' : 'text-brand-obsidian/20 dark:text-slate-600'}`}
                        >
                            {i}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Event <span className="text-luxury-gradient">Genesis.</span></h2>
                                <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors">Define the core parameters of your extraordinary event.</p>
                            </div>

                            <div className="glass-luxury p-12 rounded-[56px] grid md:grid-cols-2 gap-10 border-slate-100 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 shadow-2xl transition-all">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-2">Event Nomenclature</label>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                placeholder="e.g., Global Innovation Summit '27"
                                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-600 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-2">Strategic Venue</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                                            <input
                                                type="text"
                                                placeholder="Singapore, Marina Bay Sands"
                                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl pl-16 pr-6 py-5 outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-600 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-2">Temporal Window</label>
                                        <div className="relative group">
                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                                            <input
                                                type="date"
                                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl pl-16 pr-6 py-5 outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian dark:text-white font-bold shadow-sm transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-2">Delegate Census</label>
                                        <div className="relative group">
                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                                            <input
                                                type="number"
                                                placeholder="e.g., 5000"
                                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl pl-16 pr-6 py-5 outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-600 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={nextStep}
                                    className="btn-premium bg-brand-gold text-white py-5 px-16 group flex items-center space-x-3 shadow-lg shadow-brand-gold/20"
                                >
                                    <span>Advance Configuration</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Budgetary <span className="text-luxury-gradient">Parameters.</span></h2>
                                <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors">Neural engine will optimize based on these constraints.</p>
                            </div>

                            <div className="glass-luxury p-12 rounded-[56px] space-y-12 border-slate-100 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 shadow-2xl transition-all">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-end transition-colors">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-2">Capital Allocation Range</label>
                                        <span className="text-2xl font-black text-brand-obsidian dark:text-white">$50,000 - $250,000</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10000"
                                        max="1000000"
                                        step="10000"
                                        className="w-full h-2 bg-slate-100 dark:bg-slate-900 rounded-full appearance-none cursor-pointer accent-brand-gold border border-slate-200 dark:border-slate-700/50 transition-colors"
                                    />
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Exclusivity', value: 'Ultra Premium', icon: ShieldCheck },
                                        { label: 'Tech Density', value: 'High', icon: Zap },
                                        { label: 'Flexibility', value: 'PNPL Enabled', icon: CreditCard },
                                    ].map((pref, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 text-center space-y-4 hover:border-brand-gold/30 dark:hover:border-brand-gold/50 transition-all cursor-pointer group shadow-sm">
                                            <pref.icon className="w-8 h-8 mx-auto text-brand-gold group-hover:scale-110 transition-transform" />
                                            <div>
                                                <p className="text-[8px] font-black text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-widest transition-colors">{pref.label}</p>
                                                <p className="text-xs font-black uppercase text-brand-obsidian dark:text-white transition-colors">{pref.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {calculating ? (
                                <div className="flex flex-col items-center space-y-6">
                                    <div className="w-16 h-16 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin"></div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold animate-pulse">Neural Engine Calculating Optimized budget...</p>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center max-w-sm mx-auto">
                                    <button onClick={prevStep} className="flex items-center space-x-2 text-brand-obsidian/40 dark:text-slate-500 font-black uppercase text-[10px] tracking-widest hover:text-brand-obsidian dark:hover:text-white transition-colors">
                                        <ArrowLeft className="w-4 h-4" />
                                        <span>Revert</span>
                                    </button>
                                    <button
                                        onClick={nextStep}
                                        className="btn-premium bg-brand-gold text-white py-4 px-12 group flex items-center space-x-3 shadow-lg shadow-brand-gold/20"
                                    >
                                        <span>Initiate Analysis</span>
                                        <Sparkles className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Budget <span className="text-luxury-gradient">Intelligence.</span></h2>
                                <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors">Verified institutional estimate based on real-time market data.</p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-10">
                                <div className="lg:col-span-2 glass-luxury p-12 rounded-[56px] border-slate-100 dark:border-slate-700/50 space-y-10 relative overflow-hidden bg-white dark:bg-slate-800/50 shadow-2xl transition-all">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px]"></div>

                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Calculated Gross Expenditure</p>
                                            <h3 className="text-7xl font-black tracking-tighter text-brand-obsidian dark:text-white transition-colors">$142,500</h3>
                                        </div>
                                        <div className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                                            98% Confidence
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8">
                                        {[
                                            { label: 'Venue & Logistics', value: '$45k', icon: Target },
                                            { label: 'Institutional Tech', value: '$62k', icon: Zap },
                                            { label: 'Strategic Ops', value: '$22k', icon: BarChart3 },
                                            { label: 'Executive Reserves', icon: Clock, value: '$13.5k' }
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex items-center space-x-3 transition-colors">
                                                    <item.icon className="w-4 h-4 text-brand-obsidian/40 dark:text-slate-500" />
                                                    <span className="text-[10px] font-black text-brand-obsidian/40 dark:text-slate-500 uppercase tracking-widest">{item.label}</span>
                                                </div>
                                                <p className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="glass-luxury p-8 rounded-[48px] border-slate-100 dark:border-slate-700/50 space-y-6 bg-slate-50 dark:bg-slate-900/50 shadow-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-gold">PNPL Eligibility</h4>
                                        <div className="space-y-4">
                                            <p className="text-3xl font-black tracking-tight underline decoration-brand-gold/30 text-brand-obsidian dark:text-white transition-colors">Verified.</p>
                                            <p className="text-xs text-brand-obsidian/60 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                                                Your institutional profile qualifies for split-payment financing over 24 months.
                                            </p>
                                        </div>
                                        <button className="w-full py-4 bg-brand-gold text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-gold/20 transition-all">
                                            Analyze Flow
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => navigate('/dashboard/user')}
                                        className="w-full btn-premium bg-brand-gold text-white py-6 text-xs shadow-lg shadow-brand-gold/20"
                                    >
                                        Commit Phase 1
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EventCreation;
