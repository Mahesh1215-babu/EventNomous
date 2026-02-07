import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    subtitle?: string;
    color?: 'gold' | 'accent' | 'green' | 'red' | 'purple';
    onClick?: () => void;
}

const colorClasses = {
    gold: {
        bg: 'bg-brand-gold/10',
        text: 'text-brand-gold',
        border: 'border-brand-gold/20',
    },
    accent: {
        bg: 'bg-brand-accent/10',
        text: 'text-brand-accent',
        border: 'border-brand-accent/20',
    },
    green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
    },
    red: {
        bg: 'bg-red-50',
        text: 'text-red-600',
        border: 'border-red-200',
    },
    purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
    },
};

export default function StatCard({
    title,
    value,
    icon: Icon,
    trend,
    subtitle,
    color = 'accent',
    onClick,
}: StatCardProps) {
    const colors = colorClasses[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`glass-luxury p-8 rounded-[32px] border-slate-100 hover:border-${color === 'gold' ? 'brand-gold' : 'brand-accent'}/30 transition-all group ${onClick ? 'cursor-pointer' : ''} bg-white shadow-sm`}
            onClick={onClick}
        >
            <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon className="w-7 h-7" />
                </div>
                {trend && (
                    <div className={`flex items-center space-x-1 text-xs font-black uppercase tracking-widest ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        <span>{trend.isPositive ? '↑' : '↓'}</span>
                        <span>{Math.abs(trend.value)}%</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/40">
                    {title}
                </p>
                <p className="text-4xl font-black text-brand-obsidian tracking-tight">
                    {value}
                </p>
                {subtitle && (
                    <p className="text-xs text-brand-obsidian/60 font-medium">
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
