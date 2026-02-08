import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="w-full max-w-md space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <button onClick={() => navigate(-1)} className="flex items-center justify-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all mx-auto mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Login</span>
                    </button>
                    <h2 className="text-4xl font-black text-brand-obsidian uppercase tracking-tighter">Account <span className="text-luxury-gradient">Recovery.</span></h2>
                    <p className="text-brand-obsidian/60 font-medium">Securely reset your access credentials.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-luxury bg-white rounded-[40px] p-10 space-y-8 border-slate-100 shadow-2xl"
                >
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] ml-1">Registered Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none group-focus-within:text-brand-gold transition-colors text-brand-obsidian/40">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-gold/50 outline-none text-brand-obsidian font-bold"
                                        placeholder="executive@eventnomous.com"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-premium bg-brand-gold text-white py-5 flex items-center justify-center space-x-3 shadow-lg hover:shadow-brand-gold/20"
                            >
                                <span>Send Reset Instructions</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    ) : (
                        <div className="text-center space-y-6 py-8">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-brand-obsidian">Check your inbox</h3>
                                <p className="text-brand-obsidian/60">We have sent password recovery instructions to your email address.</p>
                            </div>
                            <button
                                onClick={() => navigate('/auth/login')}
                                className="w-full btn-premium border border-slate-200 text-brand-obsidian hover:bg-slate-50 py-4"
                            >
                                Return to Login
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ForgotPassword;
