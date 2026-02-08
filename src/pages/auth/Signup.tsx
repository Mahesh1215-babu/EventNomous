import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Building2, Briefcase } from 'lucide-react';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-6 py-20 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="w-full max-w-lg space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black text-brand-obsidian dark:text-white uppercase tracking-tighter transition-colors duration-300">Apply for <span className="text-luxury-gradient">Membership.</span></h2>
                    <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors duration-300">Join the elite network of event professionals.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-luxury bg-white dark:bg-slate-800/50 rounded-[40px] p-10 space-y-8 border-slate-100 dark:border-slate-700/50 shadow-2xl transition-all duration-300"
                >
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/40 dark:text-slate-500" />
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-600"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Last Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/40 dark:text-slate-500" />
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-600"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40 dark:text-slate-500" />
                                <input
                                    type="email"
                                    className="block w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-600"
                                    placeholder="john@example.com"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40 dark:text-slate-500" />
                                <input
                                    type="password"
                                    className="block w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-600"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Organization</label>
                            <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40 dark:text-slate-500" />
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian dark:text-white font-bold placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-600"
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={() => navigate('/auth/login')}
                        className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                    >
                        <span>Submit Application</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </motion.div>

                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40">
                    Already a member? {' '}
                    <button onClick={() => navigate('/auth/login')} className="text-brand-gold hover:underline">
                        Access Account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
