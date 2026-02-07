import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowRight, Zap,
    Globe, BarChart3, CreditCard, Play, X
} from 'lucide-react';
import ImmersiveHero from '../components/hero/ImmersiveHero';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const navigate = useNavigate();
    const mainRef = useRef(null);
    const [showExperience, setShowExperience] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out"
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="relative bg-white text-brand-obsidian overflow-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-20">
                <ImmersiveHero />
                <div className="relative z-10 text-center space-y-8 max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-luxury border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                        <Zap className="w-4 h-4" />
                        <span>The Future of Event Fintech</span>
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black leading-none reveal-text text-brand-obsidian">
                        Event<span className="text-luxury-gradient">Nomous.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-obsidian/60 max-w-2xl mx-auto font-medium leading-relaxed reveal-text">
                        Immersive planning, autonomous vendor matchmaking, and elite PNPL financing for the world's most ambitious events.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 reveal-text">
                        <button
                            onClick={() => navigate('/auth/signup')}
                            className="btn-premium bg-brand-gold text-white hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] min-w-[240px] border-none"
                        >
                            Launch Your Event
                        </button>
                        <button
                            onClick={() => setShowExperience(true)}
                            className="btn-premium border-brand-obsidian/10 text-brand-obsidian/60 hover:bg-slate-50 min-w-[240px] flex items-center justify-center space-x-2"
                        >
                            <Play className="w-4 h-4" />
                            <span>Watch Experience</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-40 px-6 relative z-10 bg-white">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl font-black text-brand-obsidian">Elite <span className="text-luxury-gradient">Infrastructure.</span></h2>
                        <p className="text-brand-obsidian/50 max-w-2xl mx-auto">Scaling event management with institutional-grade technology.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: 'AI Matchmaking', desc: 'Neural network vendor selection based on over 120 key metrics.', icon: Globe },
                            { title: 'PNPL Financing', desc: 'Secure institutional credit lines for seamless event scaling.', icon: CreditCard },
                            { title: 'Real-time Analytics', desc: 'Live monitoring of budget consumption and vendor performance.', icon: BarChart3 },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="glass-luxury p-12 rounded-[48px] border-black/5 space-y-8 hover:border-brand-gold/20 transition-all group"
                            >
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-obsidian">{service.title}</h3>
                                <p className="text-brand-obsidian/60 leading-relaxed">{service.desc}</p>
                                <button className="flex items-center space-x-2 text-brand-gold text-[10px] font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-luxury rounded-[64px] p-20 text-center relative overflow-hidden border-black/5">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-brand-accent/5"></div>
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-6xl font-black max-w-3xl mx-auto text-brand-obsidian">Ready to build the <span className="text-luxury-gradient">Extraordinary?</span></h2>
                            <p className="text-brand-obsidian/60 text-xl">Join 5,000+ elite planners and corporate organizers.</p>
                            <button className="btn-premium bg-brand-obsidian text-white hover:bg-black border-none">
                                Create Instant Account
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Placeholder */}
            <footer className="py-20 border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <span className="text-2xl font-black tracking-tighter uppercase text-brand-obsidian">EventNomous.</span>
                    <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40">
                        <a href="#" className="hover:text-brand-gold transition-all">Privacy</a>
                        <a href="#" className="hover:text-brand-gold transition-all">Institutional</a>
                        <a href="#" className="hover:text-brand-gold transition-all">Contact</a>
                    </div>
                    <p className="text-[10px] font-bold text-brand-obsidian/20">© 2026 EVENTNOMOUS FINTECH GROUP. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>

            {/* Watch Experience Modal */}
            {showExperience && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-luxury bg-white rounded-[48px] p-12 max-w-4xl w-full relative border-slate-100 shadow-2xl"
                    >
                        <button
                            onClick={() => setShowExperience(false)}
                            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black uppercase tracking-tight text-brand-obsidian">
                                    Elite <span className="text-luxury-gradient">Infrastructure.</span>
                                </h3>
                                <p className="text-brand-obsidian/60 font-medium text-lg">
                                    Experience the future of event management with our institutional-grade platform.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: 'AI Matchmaking', desc: 'Neural network vendor selection', icon: Globe },
                                    { title: 'PNPL Financing', desc: 'Institutional credit lines', icon: CreditCard },
                                    { title: 'Real-time Analytics', desc: 'Live event intelligence', icon: BarChart3 },
                                ].map((feature, i) => (
                                    <div key={i} className="glass-luxury p-6 rounded-[32px] border-slate-100 space-y-3">
                                        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-black text-brand-obsidian">{feature.title}</h4>
                                        <p className="text-sm text-brand-obsidian/60">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center space-x-4 pt-6">
                                <button
                                    onClick={() => navigate('/auth/signup')}
                                    className="btn-premium bg-brand-gold text-white hover:shadow-brand-gold/20 flex items-center space-x-2"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setShowExperience(false)}
                                    className="btn-premium border-brand-obsidian/10 text-brand-obsidian/60 hover:bg-slate-50"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
};

export default Home;
