import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    TrendingUp, Download, ArrowLeft, Zap,
    ArrowUpRight, Target, Clock, ArrowRight
} from 'lucide-react';

const Reports = () => {
    const navigate = useNavigate();

    const metrics = [
        { label: 'Event ROI', value: '24.8%', icon: TrendingUp, trend: '+4.2%', color: 'text-green-500' },
        { label: 'Capital Efficiency', value: '0.94', icon: Target, trend: '+0.12', color: 'text-brand-gold' },
        { label: 'Avg. Vendor Delta', value: '-$8.4k', icon: Clock, trend: '-12%', color: 'text-brand-accent' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Intelligence</span>
                        </button>
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Reports <span className="text-luxury-gradient"> & Analytics.</span></h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors">Institutional-grade data visualization for strategic event portfolios.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="btn-premium border-slate-200 dark:border-slate-700 text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 group flex items-center space-x-2 shadow-sm transition-all">
                            <Download className="w-4 h-4" />
                            <span>Export Audit</span>
                        </button>
                        <button className="btn-premium bg-brand-gold text-white shadow-lg shadow-brand-gold/20">
                            Generate Insights
                        </button>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {metrics.map((metric, i) => (
                        <div key={i} className="glass-luxury p-10 rounded-[48px] border-slate-100 dark:border-slate-700 space-y-6 group hover:border-brand-gold/20 transition-all bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-xl duration-300">
                            <div className="flex justify-between items-center">
                                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-gold transition-colors">
                                    <metric.icon className="w-6 h-6" />
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 transition-colors ${metric.color}`}>
                                    {metric.trend}
                                </span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40 dark:text-slate-500 mb-1 transition-colors">{metric.label}</p>
                                <p className="text-4xl font-black text-brand-obsidian dark:text-white transition-colors">{metric.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Analytics Panels */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Revenue Visualization */}
                    <div className="glass-luxury p-12 rounded-[56px] border-slate-100 dark:border-slate-700 space-y-10 relative overflow-hidden bg-white dark:bg-slate-800/50 shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors">Financial <span className="text-brand-gold">Flow.</span></h3>
                            <div className="flex bg-slate-50 dark:bg-slate-900 p-1 rounded-xl shadow-inner border border-slate-100 dark:border-slate-700 transition-colors">
                                <button className="px-4 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest bg-brand-gold text-white shadow-sm">Monthly</button>
                                <button className="px-4 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 hover:text-brand-obsidian dark:hover:text-white transition-colors">Quarterly</button>
                            </div>
                        </div>

                        {/* Mock Chart Visualization */}
                        <div className="h-64 flex items-end justify-between px-4 pb-4 border-b border-slate-100 dark:border-slate-700 transition-colors">
                            {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-4 bg-gradient-to-t from-brand-gold/10 to-brand-gold rounded-t-lg group relative cursor-pointer hover:shadow-lg transition-all"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[8px] font-black px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                                        ${(h * 1.5).toFixed(1)}k
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2.5 h-2.5 bg-brand-gold rounded-full"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 transition-colors">Institutional Spend</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-2.5 h-2.5 bg-brand-accent rounded-full"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 transition-colors">Partner Payouts</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 text-green-500 font-bold">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-xs uppercase tracking-tighter">12% growth</span>
                            </div>
                        </div>
                    </div>

                    {/* Operational Insights */}
                    <div className="glass-luxury p-12 rounded-[56px] border-slate-100 dark:border-slate-700 flex flex-col justify-between bg-white dark:bg-slate-800/50 shadow-xl transition-all duration-300">
                        <div className="space-y-10">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white line-clamp-1 transition-colors">Operational <span className="text-luxury-gradient">Delta.</span></h3>
                            <div className="space-y-8">
                                {[
                                    { label: 'Venue Utilization', value: '94%', color: 'w-[94%]' },
                                    { label: 'Tech Stack Efficiency', value: '88%', color: 'w-[88%]' },
                                    { label: 'Delegate Satisfaction', value: '92%', color: 'w-[92%]' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 transition-colors">{item.label}</span>
                                            <span className="text-sm font-black text-brand-obsidian dark:text-white transition-colors">{item.value}</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden transition-colors">
                                            <div className={`${item.color} h-full bg-brand-gold rounded-full`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12">
                            <div className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 flex items-center justify-between shadow-sm transition-all duration-300">
                                <div className="flex items-center space-x-6">
                                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-gold shadow-sm transition-colors">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Neural Recommendation</p>
                                        <p className="text-sm font-medium text-brand-obsidian/60 dark:text-slate-400 leading-relaxed max-w-xs transition-colors">Implement 'Institutional Buffers' for the APAC summit to mitigate 4.2% forecast risk.</p>
                                    </div>
                                </div>
                                <button className="p-4 bg-brand-gold text-white rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-brand-gold/20">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
