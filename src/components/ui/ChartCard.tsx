import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ChartCardProps {
    title: string;
    subtitle?: string;
    icon?: LucideIcon;
    children: ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export default function ChartCard({
    title,
    subtitle,
    icon: Icon,
    children,
    action,
}: ChartCardProps) {
    return (
        <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm space-y-6">
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        {Icon && (
                            <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                                <Icon className="w-5 h-5" />
                            </div>
                        )}
                        <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                            {title}
                        </h3>
                    </div>
                    {subtitle && (
                        <p className="text-sm text-brand-obsidian/60 font-medium ml-13">
                            {subtitle}
                        </p>
                    )}
                </div>
                {action && (
                    <button
                        onClick={action.onClick}
                        className="text-[10px] font-black uppercase tracking-widest text-brand-accent hover:text-brand-accent/80 transition-colors"
                    >
                        {action.label}
                    </button>
                )}
            </div>
            <div className="pt-4">
                {children}
            </div>
        </div>
    );
}
