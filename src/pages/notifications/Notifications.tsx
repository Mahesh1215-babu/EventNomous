import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Bell, CheckCircle2,
    Clock, ArrowLeft,
    Trash2, Zap, ShieldCheck, CreditCard
} from 'lucide-react';

const Notifications = () => {
    const navigate = useNavigate();

    const notifications = [
        {
            id: 1,
            type: 'success',
            title: 'Institutional Auth Verified',
            desc: 'Your corporate identity has been successfully audited. PNPL facility is now active.',
            time: '2 hours ago',
            icon: ShieldCheck,
            read: false
        },
        {
            id: 2,
            type: 'alert',
            title: 'Tranche A-1 Approaching',
            desc: 'Scheduled payment for "Global Tech Summit" is due on Nov 01. Ensure liquidity.',
            time: '5 hours ago',
            icon: CreditCard,
            read: false
        },
        {
            id: 3,
            type: 'info',
            title: 'Neural Insight Generated',
            desc: 'A new cost-saving strategy has been calculated for your Singapore portfolio.',
            time: '1 day ago',
            icon: Zap,
            read: true
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Intelligence</span>
                        </button>
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors">Notification <span className="text-brand-accent">Center.</span></h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors">Real-time institutional alerts and strategic ecosystem updates.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-6 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-[8px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-obsidian dark:hover:text-white transition-all shadow-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Mark all as Read</span>
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {notifications.map((notif, i) => (
                        <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-luxury p-8 rounded-[40px] border-slate-100 dark:border-slate-700 flex items-center justify-between group cursor-pointer transition-all bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-xl duration-300
                            ${notif.read ? 'opacity-60 grayscale-[0.5]' : 'border-brand-accent/20 bg-slate-50 dark:bg-slate-900/50'}`}
                        >
                            <div className="flex items-center space-x-8">
                                <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-all group-hover:scale-110
                                    ${notif.type === 'success' ? 'bg-green-500/10 text-green-500' :
                                        notif.type === 'alert' ? 'bg-brand-gold/10 text-brand-gold' :
                                            'bg-brand-accent/10 text-brand-accent'}`}
                                >
                                    <notif.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors">{notif.title}</h3>
                                        {!notif.read && <span className="w-2 h-2 bg-brand-accent rounded-full"></span>}
                                    </div>
                                    <p className="text-brand-obsidian/60 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-lg transition-colors">{notif.desc}</p>
                                    <div className="flex items-center space-x-2 pt-2 text-[8px] font-black uppercase tracking-widest text-brand-obsidian/30 dark:text-slate-600 transition-colors">
                                        <Clock className="w-3 h-3" />
                                        <span>{notif.time}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl opacity-0 group-hover:opacity-100 hover:bg-red-500/10 hover:text-red-500 transition-all border border-slate-100 dark:border-slate-700">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {notifications.length === 0 && (
                    <div className="text-center py-40 space-y-8 glass-luxury rounded-[64px] border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-brand-obsidian/10 dark:text-slate-600 shadow-sm transition-colors">
                            <Bell className="w-12 h-12" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black uppercase text-brand-obsidian/20 dark:text-slate-600 transition-colors">Sovereign Silence</h3>
                            <p className="text-brand-obsidian/10 dark:text-slate-700 font-medium transition-colors">Your institutional ecosystem is currently in perfect equilibrium.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
