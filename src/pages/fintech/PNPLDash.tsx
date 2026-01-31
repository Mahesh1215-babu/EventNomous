import { useNavigate } from 'react-router-dom';
import {
    CreditCard, ShieldCheck,
    Calendar,
    Zap, PieChart, Info, ArrowLeft,
    Clock
} from 'lucide-react';

const PNPLDash = () => {
    const navigate = useNavigate();

    const planDetails = [
        { label: 'Sovereign Credit Limit', value: '$250,000', icon: ShieldCheck, color: 'text-brand-gold' },
        { label: 'Utilized Capital', value: '$142,500', icon: CreditCard, color: 'text-brand-accent' },
        { label: 'Repayment Runway', value: '24 Months', icon: Clock, color: 'text-green-500' },
    ];

    const upcomingDues = [
        { tranche: 'Tranche A-1', date: 'Nov 01, 2026', amount: '$5,937.50', status: 'Pending' },
        { tranche: 'Tranche A-2', date: 'Dec 01, 2026', amount: '$5,937.50', status: 'Scheduled' },
    ];

    return (
        <div className="min-h-screen bg-white text-brand-obsidian pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Intelligence</span>
                        </button>
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian">PNPL <span className="text-luxury-gradient">Financing.</span></h1>
                        <p className="text-brand-obsidian/60 font-medium">Institutional split-payment architecture for elite event scaling.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="btn-premium border-slate-200 text-brand-obsidian/60 hover:bg-slate-50 group flex items-center space-x-2 shadow-sm">
                            <Info className="w-4 h-4" />
                            <span>Facility Terms</span>
                        </button>
                        <button className="btn-premium bg-brand-gold text-white shadow-lg shadow-brand-gold/20">
                            Increase Limit
                        </button>
                    </div>
                </div>

                {/* Capital Overview */}
                <div className="grid md:grid-cols-3 gap-8">
                    {planDetails.map((detail, i) => (
                        <div key={i} className="glass-luxury p-10 rounded-[48px] border-slate-100 space-y-8 relative overflow-hidden group hover:border-brand-gold/20 transition-all bg-white shadow-sm hover:shadow-xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-all"></div>
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${detail.color}`}>
                                <detail.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 mb-1">{detail.label}</p>
                                <p className="text-4xl font-black text-brand-obsidian">{detail.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Repayment Architecture */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Repayment <span className="text-brand-gold">Architecture.</span></h2>
                        <div className="glass-luxury rounded-[48px] border-slate-100 overflow-hidden bg-white shadow-xl">
                            <div className="p-10 bg-slate-50 flex justify-between items-center border-b border-slate-100">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Active Facility</p>
                                    <h3 className="text-xl font-black uppercase text-brand-obsidian">Facility Event-ID: 7729-QX</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-brand-obsidian/40 uppercase tracking-widest">APR Performance</p>
                                    <p className="text-xl font-black text-green-500">0.0% Introductory</p>
                                </div>
                            </div>
                            <div className="p-10 space-y-8">
                                <div className="space-y-4">
                                    {upcomingDues.map((due, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-gold/10 transition-all">
                                            <div className="flex items-center space-x-6">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm">
                                                    <Calendar className="w-6 h-6" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{due.tranche}</p>
                                                    <p className="text-lg font-black text-brand-obsidian">{due.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-8">
                                                <p className="text-xl font-black text-brand-obsidian">{due.amount}</p>
                                                <span className={`px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${due.status === 'Pending' ? 'bg-brand-gold text-white shadow-sm' : 'bg-slate-200 text-brand-obsidian/40'}`}>
                                                    {due.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full btn-premium border-brand-gold/30 text-brand-gold hover:bg-brand-gold/5 flex items-center justify-center space-x-3 shadow-sm hover:shadow-brand-gold/10">
                                    <span>Execute All Tranches Early</span>
                                    <Zap className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Fintech <span className="text-brand-gold">Insights.</span></h2>
                        <div className="glass-luxury p-10 rounded-[48px] border-slate-100 relative overflow-hidden h-[450px] flex flex-col justify-between bg-white shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
                            <div className="space-y-6 relative z-10">
                                <div className="w-14 h-14 bg-slate-50 text-brand-gold rounded-2xl flex items-center justify-center border border-brand-gold/20 shadow-sm">
                                    <PieChart className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black uppercase leading-tight text-brand-obsidian">Liquidity Optimization</h3>
                                <p className="text-brand-obsidian/60 text-sm font-medium leading-relaxed">
                                    By utilizing our PNPL tranches instead of upfront capital, your corporation has retained $142.5k in operational liquidity, generating an estimated $4,200 in yield elsewhere.
                                </p>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-4 shadow-sm">
                                <ShieldCheck className="w-10 h-10 text-brand-gold" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Verification Status</p>
                                    <p className="text-xs font-black text-brand-obsidian uppercase">Sovereign Grade Tier 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PNPLDash;
