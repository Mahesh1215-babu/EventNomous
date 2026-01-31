import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, MapPin,
    ArrowLeft, DollarSign,
    Zap, ShieldCheck,
    MessageSquare, Briefcase, Target,
    CheckCircle2
} from 'lucide-react';

const SpecificEventDash = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-white text-brand-obsidian pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header Actions */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Portfolio</span>
                        </button>
                        <div className="flex items-center space-x-4">
                            <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian">Global Tech <span className="text-luxury-gradient">Summit '27.</span></h1>
                            <span className="px-3 py-1 bg-brand-gold text-white rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">Active Planning</span>
                        </div>
                        <div className="flex items-center space-x-6 text-brand-obsidian/60">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-brand-gold" />
                                <span className="text-xs font-bold uppercase tracking-widest">Oct 24, 2026</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-brand-gold" />
                                <span className="text-xs font-bold uppercase tracking-widest">Singapore Expo</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="btn-premium border-slate-200 text-brand-obsidian/40 hover:text-brand-obsidian flex items-center space-x-2 hover:bg-slate-50">
                            <MessageSquare className="w-4 h-4" />
                            <span>Collaborate</span>
                        </button>
                        <button className="btn-premium bg-brand-gold text-white shadow-lg shadow-brand-gold/20">
                            Finalize Brief
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { label: 'Total Allocated', value: '$142,500', icon: DollarSign, color: 'text-brand-gold' },
                        { label: 'Confirmed Vendors', value: '12', icon: Briefcase, color: 'text-brand-accent' },
                        { label: 'Execution Health', value: '94%', icon: Target, color: 'text-green-500' },
                        { label: 'PNPL Status', value: 'Tranche A', icon: ShieldCheck, color: 'text-brand-gold' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-luxury p-8 rounded-[40px] border-slate-100 space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-1">{stat.label}</p>
                                <p className="text-2xl font-black text-brand-obsidian">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Event Logistics & Partners */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Institutional <span className="text-brand-gold">Partners.</span></h3>
                            <button onClick={() => navigate('/vendors')} className="text-[10px] font-black text-brand-gold hover:underline uppercase tracking-widest">Add Vendor</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Aether Catering', role: 'Culinary Master', budget: '$42k', status: 'Confirmed' },
                                { name: 'Lumina Visuals', role: 'Digital Immersive', budget: '$65k', status: 'Draft' },
                                { name: 'Nexus Logistics', role: 'Ground Support', budget: '$18k', status: 'Confirmed' },
                            ].map((partner, i) => (
                                <div key={i} className="glass-luxury p-8 rounded-[32px] border-slate-100 flex items-center justify-between group hover:border-brand-gold/20 transition-all cursor-pointer bg-white shadow-sm hover:shadow-xl">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className={`w-7 h-7 ${partner.status === 'Confirmed' ? 'text-green-500' : 'text-brand-obsidian/20'}`} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{partner.role}</p>
                                            <h4 className="text-xl font-black uppercase text-brand-obsidian">{partner.name}</h4>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <p className="text-xl font-black text-brand-obsidian">{partner.budget}</p>
                                        <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${partner.status === 'Confirmed' ? 'bg-green-500/10 text-green-500' : 'bg-brand-gold/10 text-brand-gold'}`}>
                                            {partner.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Strategy <span className="text-brand-gold">Insights.</span></h3>
                        <div className="glass-luxury p-10 rounded-[56px] border-slate-100 relative overflow-hidden h-full flex flex-col justify-between bg-white shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>

                            <div className="space-y-8 relative z-10">
                                <div className="w-14 h-14 bg-slate-50 text-brand-gold rounded-2xl flex items-center justify-center border border-brand-gold/20 shadow-sm">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-black uppercase leading-tight text-brand-obsidian">Optimization Alert</h4>
                                    <p className="text-brand-obsidian/60 text-sm font-medium leading-relaxed">
                                        Neural engine suggests adjusting "Digital Immersive" scope by 12% to align with original strategic objectives for the Singapore region.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 pt-10 relative z-10">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40">
                                    <span>Strategic Alignment</span>
                                    <span>88%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-[88%] h-full bg-brand-gold rounded-full"></div>
                                </div>
                                <button className="w-full btn-premium bg-brand-gold text-white shadow-lg">Accept Optimization</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificEventDash;
