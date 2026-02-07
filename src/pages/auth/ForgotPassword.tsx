import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
    const [usePhone, setUsePhone] = useState(false);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]" />

            <div className="w-full max-w-md space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold mb-6 border border-brand-gold/20"
                    >
                        <Lock className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-4xl font-black text-brand-obsidian uppercase tracking-tighter">
                        Password <span className="text-luxury-gradient">Recovery.</span>
                    </h2>
                    <p className="text-brand-obsidian/60 font-medium">
                        {step === 'email' && 'Enter your email or phone to receive a recovery code'}
                        {step === 'otp' && 'Enter the 6-digit code we sent you'}
                        {step === 'reset' && 'Create a new secure password'}
                    </p>
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-luxury bg-white rounded-[40px] p-10 space-y-8 border-slate-100 shadow-2xl"
                >
                    {step === 'email' && (
                        <>
                            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                                <button
                                    onClick={() => setUsePhone(false)}
                                    className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${!usePhone
                                        ? 'bg-brand-gold text-white shadow-lg'
                                        : 'text-brand-obsidian/40 hover:text-brand-obsidian'
                                        }`}
                                >
                                    Email
                                </button>
                                <button
                                    onClick={() => setUsePhone(true)}
                                    className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${usePhone
                                        ? 'bg-brand-gold text-white shadow-lg'
                                        : 'text-brand-obsidian/40 hover:text-brand-obsidian'
                                        }`}
                                >
                                    Phone
                                </button>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">
                                    {usePhone ? 'Phone Number' : 'Email Address'}
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none group-focus-within:text-brand-gold transition-colors text-brand-obsidian/40">
                                        {usePhone ? <Phone className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                                    </div>
                                    <input
                                        type={usePhone ? 'tel' : 'email'}
                                        className="block w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all outline-none text-brand-obsidian placeholder:text-brand-obsidian/40 font-bold"
                                        placeholder={usePhone ? '+91 98765 43210' : 'executive@eventnomous.com'}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setStep('otp')}
                                className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                            >
                                <span>Send Recovery Code</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {step === 'otp' && (
                        <>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">
                                    Verification Code
                                </label>
                                <div className="flex space-x-3 justify-center">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            maxLength={1}
                                            className="w-14 h-14 text-center text-2xl font-black bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all outline-none text-brand-obsidian"
                                        />
                                    ))}
                                </div>
                                <p className="text-center text-xs text-brand-obsidian/60">
                                    Didn't receive code?{' '}
                                    <button className="text-brand-gold font-black hover:underline">Resend</button>
                                </p>
                            </div>

                            <button
                                onClick={() => setStep('reset')}
                                className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                            >
                                <span>Verify Code</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {step === 'reset' && (
                        <>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">
                                        New Password
                                    </label>
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

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">
                                        Confirm Password
                                    </label>
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
                            </div>

                            <button
                                onClick={() => navigate('/auth/login')}
                                className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                            >
                                <span>Reset Password</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    <button
                        onClick={() => (step === 'email' ? navigate('/auth/login') : setStep('email'))}
                        className="w-full flex items-center justify-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Login</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ForgotPassword;
