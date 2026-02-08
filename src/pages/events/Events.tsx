import { useNavigate } from 'react-router-dom';
import {
    Heart, Music, Mic2, Laptop,
    PartyPopper, Gamepad2,
    Sparkles, ArrowRight, Video,
    CheckCircle2
} from 'lucide-react';
import EventCarousel from '../../components/ui/EventCarousel';

const categories = [
    { name: 'Marriage', icon: Heart, count: '1.2k+', color: 'text-pink-500', bg: 'bg-pink-50' },
    { name: 'Sangeeth', icon: Music, count: '850+', color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Haldi & Mehendi', icon: Sparkles, count: '640+', color: 'text-amber-500', bg: 'bg-amber-50' },
    { name: 'Reception', icon: PartyPopper, count: '920+', color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Engagement', icon: Heart, count: '450+', color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Carnival & Games', icon: Gamepad2, count: '300+', color: 'text-green-500', bg: 'bg-green-50' },
    { name: 'Corporate Events', icon: Laptop, count: '2.4k+', color: 'text-slate-500', bg: 'bg-slate-50' },
    { name: 'Musical Concerts', icon: Mic2, count: '1.1k+', color: 'text-blue-500', bg: 'bg-blue-50' },
];

const Events = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FDFCFD] dark:bg-slate-900 pb-32 pt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {/* Hero Section */}
                <section className="glass-luxury rounded-[64px] p-20 text-brand-obsidian dark:text-white relative overflow-hidden ring-1 ring-slate-100 dark:ring-slate-700 bg-white dark:bg-slate-800/50 shadow-xl transition-all duration-300">
                    <div className="relative z-10 space-y-8 max-w-3xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                            <Video className="w-4 h-4 text-brand-accent" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">3D Immersive Discovery</span>
                        </div>
                        <h1 className="text-7xl font-black leading-tight text-brand-obsidian dark:text-white transition-colors duration-300">Your Event, <br /> Our <span className="text-luxury-gradient">Immersive</span> Vision.</h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 text-xl font-medium transition-colors duration-300">Browse categories to see AI-generated roadmaps and 3D venue previews instantly.</p>
                        <div className="flex space-x-4 pt-4">
                            <button onClick={() => navigate('/events/create')} className="btn-premium py-4 px-10 text-xs font-black uppercase tracking-widest bg-brand-accent text-white shadow-lg shadow-brand-accent/20 hover:bg-brand-accent/90">Quick Start Plan</button>
                            <button onClick={() => navigate('/chatbot')} className="px-10 py-4 glass-luxury text-brand-obsidian dark:text-white text-xs font-black uppercase tracking-widest border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all bg-white dark:bg-slate-900 shadow-sm">Talk to AI Agent</button>
                        </div>
                    </div>

                    {/* Abstract Visuals */}
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-blue/5 to-transparent"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px]"></div>
                </section>

                {/* Featured Gallery Section with Sliding Images */}
                <section className="space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-brand-dark dark:text-white tracking-tight transition-colors duration-300">Featured Moments</h2>
                            <p className="text-brand-slate dark:text-slate-400 font-medium transition-colors duration-300">Explore high-fidelity outcomes from our most successful AI-planned events.</p>
                        </div>
                        <button className="btn-outline flex items-center space-x-2 dark:text-white dark:border-white/20 dark:hover:bg-white/10">
                            <span>View All Gallery</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <EventCarousel />
                </section>

                {/* Categories Grid */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black text-brand-dark dark:text-white tracking-tight transition-colors duration-300">Interactive Categories</h2>
                        <p className="text-brand-slate dark:text-slate-400 font-medium transition-colors duration-300">Built with specialized AI workflows for different event types.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                onClick={() => navigate('/events/create')}
                                className="glass-luxury p-10 rounded-[48px] text-center space-y-6 card-hover border-slate-100 hover:border-brand-accent/20 cursor-pointer group bg-white dark:bg-slate-800/50 dark:border-slate-700/50 shadow-sm transition-all duration-300"
                            >
                                <div className={`w-24 h-24 mx-auto rounded-[32px] ${cat.bg} dark:bg-slate-900/50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-sm`}>
                                    <cat.icon className={`w-12 h-12 ${cat.color}`} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-brand-obsidian dark:text-white leading-tight transition-colors duration-300">{cat.name}</h3>
                                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{cat.count} Active Plans</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-brand-obsidian/40 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black uppercase tracking-widest">Start Plan</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feature Preview */}
                <section className="glass rounded-[64px] p-20 grid lg:grid-cols-2 gap-20 items-center dark:bg-slate-800/50 dark:border-slate-700/50 transition-colors duration-300">
                    <div className="space-y-10">
                        <h2 className="text-5xl font-black text-brand-dark dark:text-white leading-tight transition-colors duration-300">Experience venues <br /> in <span className="text-brand-purple italic">Phygital</span> 3D.</h2>
                        <p className="text-brand-slate dark:text-slate-400 text-lg font-medium leading-relaxed transition-colors duration-300">
                            Don't just look at photos. Our platform uses WebGL to render high-fidelity 3D models of venues,
                            allowing you to test seating arrangements and lighting before the actual day.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Instant Shadow & Lighting simulation",
                                "Real-scale guest count placement",
                                "VR-ready for Oculus/Apple Vision"
                            ].map((f, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                                    <span className="font-bold text-brand-dark dark:text-white uppercase tracking-tight text-sm transition-colors duration-300">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-brand-purple/10 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="relative h-full glass rounded-[40px] border-white overflow-hidden shadow-2xl flex items-center justify-center p-12">
                            <div className="w-full aspect-video bg-slate-900 rounded-3xl border border-white/5 flex flex-col items-center justify-center space-y-6 relative group cursor-pointer overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-20"></div>
                                <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center shadow-2xl shadow-brand-blue/40 relative z-10 group-hover:scale-110 transition-transform">
                                    <Video className="text-white w-10 h-10" />
                                </div>
                                <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] relative z-10">Launch 3D Venue Preview</p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-12 left-12 p-3 glass-dark rounded-xl text-[8px] font-black text-white uppercase tracking-widest border-white/20">60 FPS Render</div>
                            <div className="absolute bottom-12 right-12 p-3 glass-dark rounded-xl text-[8px] font-black text-white uppercase tracking-widest border-white/20">1:1 Scale</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;
