import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome, Phone, Zap } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [useOtp, setUseOtp] = useState(false);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="w-full max-w-md space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold mb-6 border border-brand-gold/20"
                    >
                        <Zap className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-4xl font-black text-brand-obsidian uppercase tracking-tighter">Executive <span className="text-luxury-gradient">Login.</span></h2>
                    <p className="text-brand-obsidian/60 font-medium">Access your elite event ecosystem.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-luxury bg-white rounded-[40px] p-10 space-y-8 border-slate-100 shadow-2xl"
                >
                    <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                        <button
                            onClick={() => setUseOtp(false)}
                            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${!useOtp ? 'bg-brand-gold text-white shadow-lg' : 'text-brand-obsidian/40 hover:text-brand-obsidian'}`}
                        >
                            Security Key
                        </button>
                        <button
                            onClick={() => setUseOtp(true)}
                            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${useOtp ? 'bg-brand-gold text-white shadow-lg' : 'text-brand-obsidian/40 hover:text-brand-obsidian'}`}
                        >
                            OTP Access
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Identity Identifier</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none group-focus-within:text-brand-gold transition-colors text-brand-obsidian/40">
                                    {useOtp ? <Phone className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all outline-none text-brand-obsidian placeholder:text-brand-obsidian/40 font-bold"
                                    placeholder={useOtp ? "+1 (555) 000-0000" : "executive@eventnomous.com"}
                                />
                            </div>
                        </div>

                        {!useOtp ? (
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Secret Key</label>
                                    <button
                                        onClick={() => navigate('/auth/forgot-password')}
                                        className="text-[10px] font-black text-brand-gold hover:underline uppercase tracking-widest"
                                    >
                                        Recovery
                                    </button>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none group-focus-within:text-brand-gold transition-colors text-brand-obsidian/40">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="password"
                                        className="block w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all outline-none text-brand-obsidian placeholder:text-brand-obsidian/40 font-bold"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        ) : (
                            <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-brand-gold border border-brand-gold/30 rounded-2xl hover:bg-brand-gold/5 transition-all">
                                Dispatch OTP
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => navigate('/dashboard/user')}
                        className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                    >
                        <span>Authorize Access</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                            <span className="px-4 bg-white text-brand-obsidian/40">Institutional Connect</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center space-x-2 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-all group">
                            <Chrome className="h-5 w-5 text-brand-obsidian/40 group-hover:text-brand-obsidian transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 group-hover:text-brand-obsidian">Google</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-all group">
                            <Github className="h-5 w-5 text-brand-obsidian/40 group-hover:text-brand-obsidian transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 group-hover:text-brand-obsidian">GitHub</span>
                        </button>
                    </div>
                </motion.div>

                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40">
                    New to the elite? {' '}
                    <button onClick={() => navigate('/auth/signup')} className="text-brand-gold hover:underline">
                        Apply for Membership
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
