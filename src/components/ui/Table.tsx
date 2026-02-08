import { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => ReactNode;
    sortable?: boolean;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    onRowClick?: (item: T) => void;
    emptyMessage?: string;
}

export default function Table<T extends Record<string, any>>({
    data,
    columns,
    onRowClick,
    emptyMessage = 'No data available',
}: TableProps<T>) {
    if (data.length === 0) {
        return (
            <div className="glass-luxury bg-white dark:bg-slate-800 rounded-[32px] p-20 text-center border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300">
                <p className="text-brand-obsidian/40 dark:text-slate-500 font-medium">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="glass-luxury bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-700 transition-colors">
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/60 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50 transition-colors"
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>{column.header}</span>
                                        {column.sortable && (
                                            <div className="flex flex-col">
                                                <ChevronUp className="w-3 h-3 -mb-1 text-brand-obsidian/20 dark:text-slate-600" />
                                                <ChevronDown className="w-3 h-3 text-brand-obsidian/20 dark:text-slate-600" />
                                            </div>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => onRowClick?.(item)}
                                className={`border-b border-slate-50 dark:border-slate-700/50 last:border-0 transition-all ${onRowClick
                                    ? 'cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50'
                                    : ''
                                    }`}
                            >
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-8 py-6 text-sm font-medium text-brand-obsidian dark:text-slate-200 transition-colors"
                                    >
                                        {column.render
                                            ? column.render(item)
                                            : String(item[column.key as keyof T] ?? '-')}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
