import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserCircle, Briefcase, Building2,
    ShieldCheck, CheckCircle2,
    ChevronRight, Zap, ArrowLeft,
    CreditCard, Globe, BarChart3
} from 'lucide-react';

const roles = [
    { id: 'user', title: 'Customer', desc: 'Sovereign individual planning high-net-worth events.', icon: UserCircle, color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
    { id: 'vendor', title: 'Partner', desc: 'Elite service provider specializing in luxury execution.', icon: Briefcase, color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
    { id: 'organizer', title: 'Strategist', desc: 'Professional manager handling diversified event portfolios.', icon: Globe, color: 'text-green-500', bg: 'bg-green-500/10' },
    { id: 'corporate', title: 'Enterprise', desc: 'Institutional entity managing large-scale global summits.', icon: Building2, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState('');

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]"></div>

            <div className="w-full max-w-4xl space-y-12 relative z-10">
                {/* Progress Indicator */}
                <div className="flex justify-center items-center space-x-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center">
                            <motion.div
                                animate={{
                                    scale: step === i ? 1.1 : 1,
                                    backgroundColor: step >= i ? 'rgba(212, 175, 55, 1)' : 'rgba(255, 255, 255, 0.05)'
                                }}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${step >= i ? 'text-white bg-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'text-brand-obsidian/40 bg-slate-50 border border-slate-200'}`}
                            >
                                {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
                            </motion.div>
                            {i < 3 && <div className={`w-16 h-0.5 ${step > i ? 'bg-brand-gold' : 'bg-slate-100'} mx-2 rounded-full transition-all`}></div>}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black text-brand-obsidian uppercase tracking-tighter">Your <span className="text-luxury-gradient">Identity.</span></h2>
                                <p className="text-brand-obsidian/60 font-medium">Select your role within the EventNomous ecosystem.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {roles.map((role) => (
                                    <div
                                        key={role.id}
                                        onClick={() => setSelectedRole(role.id)}
                                        className={`glass-luxury p-10 rounded-[48px] cursor-pointer transition-all duration-500 border-2 flex flex-col space-y-6 bg-white
                        ${selectedRole === role.id ? 'border-brand-gold shadow-[0_40px_100px_rgba(212,175,55,0.1)]' : 'border-slate-100 hover:border-brand-gold/20 hover:shadow-xl'}`}
                                    >
                                        <div className={`w-20 h-20 rounded-3xl ${role.bg} flex items-center justify-center`}>
                                            <role.icon className={`w-10 h-10 ${role.color}`} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">{role.title}</h3>
                                            <p className="text-sm text-brand-obsidian/60 leading-relaxed font-medium">{role.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center pt-8">
                                <button
                                    disabled={!selectedRole}
                                    onClick={nextStep}
                                    className="btn-premium bg-brand-gold text-white py-5 px-16 text-xs disabled:opacity-20 flex items-center space-x-3 shadow-lg"
                                >
                                    <span>Proceed to Intelligence</span>
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="max-w-xl mx-auto space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black text-brand-obsidian uppercase tracking-tighter">Profile <span className="text-luxury-gradient">Setup.</span></h2>
                                <p className="text-brand-obsidian/60 font-medium">Initialize your institutional profile.</p>
                            </div>

                            <div className="glass-luxury p-12 rounded-[56px] space-y-8 border-slate-100 shadow-2xl bg-white">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Full Nomenclature</label>
                                        <input
                                            type="text"
                                            placeholder="Johnathan D. Executive"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Institutional Email</label>
                                        <input
                                            type="email"
                                            placeholder="hq@enterprise.com"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Secure Keyphrase</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••••••"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-1 focus:ring-brand-gold/50 text-brand-obsidian font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="flex space-x-6 pt-4">
                                    <button onClick={prevStep} className="flex-1 py-4 font-black text-[10px] uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-colors flex items-center justify-center space-x-2">
                                        <ArrowLeft className="w-4 h-4" />
                                        <span>Revert</span>
                                    </button>
                                    <button onClick={nextStep} className="flex-[2] btn-premium bg-brand-gold text-white shadow-lg">Initialize Profile</button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="max-w-2xl mx-auto space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-5xl font-black text-brand-obsidian uppercase tracking-tighter">PNPL <span className="text-luxury-gradient">Enabling.</span></h2>
                                <p className="text-brand-obsidian/60 font-medium">Unlock institutional credit lines and split-payment architecture.</p>
                            </div>

                            <div className="glass-luxury p-12 rounded-[64px] text-center space-y-10 border-slate-100 bg-white">
                                <div className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto border border-brand-gold/20">
                                    <ShieldCheck className="w-12 h-12 text-brand-gold" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black uppercase text-brand-obsidian">Institutional KYC</h3>
                                    <p className="text-brand-obsidian/60 font-medium leading-relaxed max-w-sm mx-auto">
                                        Our neural engine verifies your identity instantly to activate the <span className="text-brand-gold">Executive Credit Suite.</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 text-left">
                                    {[
                                        { label: 'Neural Encryption', icon: Zap },
                                        { label: 'Instant Credit', icon: CreditCard },
                                        { label: 'Market Access', icon: Globe },
                                        { label: 'Audit Ready', icon: BarChart3 }
                                    ].map((feat, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-slate-50 flex items-center space-x-3 border border-slate-100">
                                            <feat.icon className="w-5 h-5 text-brand-gold" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/60">{feat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex space-x-6 pt-6">
                                    <button onClick={() => navigate(`/dashboard/user`)} className="flex-1 py-4 font-black text-[10px] uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">Defer Activation</button>
                                    <button
                                        onClick={() => navigate(`/dashboard/${selectedRole}`)}
                                        className="flex-[2] btn-premium bg-brand-gold text-white shadow-lg"
                                    >
                                        Activate Sovereign Suite
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

export default Signup;
