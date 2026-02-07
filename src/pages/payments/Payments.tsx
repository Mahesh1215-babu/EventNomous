import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard, Clock, CheckCircle2,
    TrendingUp, Calendar, Filter, Search, Plus,
    ArrowRight, Download
} from 'lucide-react';
import StatCard from '../../components/ui/StatCard';
import Table from '../../components/ui/Table';
import Modal from '../../components/ui/Modal';
import { mockPayments, mockDashboardStats } from '../../data/mockData';
import { Payment } from '../../types/types';

const Payments = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'completed' | 'scheduled'>('all');

    const filteredPayments = mockPayments.filter(payment => {
        if (selectedFilter === 'all') return true;
        return payment.status === selectedFilter;
    });

    const totalPending = mockPayments
        .filter(p => p.status === 'pending' || p.status === 'scheduled')
        .reduce((sum, p) => sum + p.amount, 0);

    const totalCompleted = mockPayments
        .filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + p.amount, 0);

    const formatCurrency = (amount: number) => {
        return `₹${(amount / 100000).toFixed(2)}L`;
    };

    const formatDate = (date?: Date) => {
        if (!date) return '-';
        return new Date(date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const getStatusBadge = (status: string) => {
        const styles = {
            completed: 'bg-green-50 text-green-700 border-green-200',
            pending: 'bg-amber-50 text-amber-700 border-amber-200',
            scheduled: 'bg-blue-50 text-blue-700 border-blue-200',
            failed: 'bg-red-50 text-red-700 border-red-200',
        };
        return (
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles[status as keyof typeof styles]}`}>
                {status}
            </span>
        );
    };

    const paymentColumns = [
        {
            key: 'vendorName',
            header: 'Vendor',
            render: (payment: Payment) => (
                <div className="space-y-1">
                    <p className="font-black text-brand-obsidian">{payment.vendorName}</p>
                    <p className="text-xs text-brand-obsidian/40">{payment.description}</p>
                </div>
            ),
        },
        {
            key: 'amount',
            header: 'Amount',
            render: (payment: Payment) => (
                <span className="font-black text-brand-obsidian">{formatCurrency(payment.amount)}</span>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            render: (payment: Payment) => getStatusBadge(payment.status),
        },
        {
            key: 'dueDate',
            header: 'Due Date',
            render: (payment: Payment) => (
                <span className="text-sm">{formatDate(payment.dueDate || payment.paidDate)}</span>
            ),
        },
        {
            key: 'splitType',
            header: 'Type',
            render: (payment: Payment) => (
                <span className="text-xs text-brand-obsidian/60 uppercase tracking-wide">
                    {payment.splitType || 'Full'}
                    {payment.installments && ` (${payment.currentInstallment}/${payment.installments})`}
                </span>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian">
                            Payment <span className="text-brand-accent">Intelligence.</span>
                        </h1>
                        <p className="text-brand-obsidian/60 font-medium">
                            Manage all event payments with institutional-grade PNPL financing.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="btn-premium border-brand-accent/20 text-brand-accent hover:bg-brand-accent/10 flex items-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>Export Report</span>
                        </button>
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="btn-premium bg-brand-accent text-white hover:shadow-brand-accent/20 flex items-center space-x-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Make Payment</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Spent"
                        value={formatCurrency(mockDashboardStats.totalSpent)}
                        icon={TrendingUp}
                        color="accent"
                        subtitle="Across all events"
                        trend={{ value: 12.5, isPositive: true }}
                    />
                    <StatCard
                        title="Pending Payments"
                        value={formatCurrency(totalPending)}
                        icon={Clock}
                        color="gold"
                        subtitle={`${mockPayments.filter(p => p.status === 'pending').length} payments due`}
                    />
                    <StatCard
                        title="Completed"
                        value={formatCurrency(totalCompleted)}
                        icon={CheckCircle2}
                        color="green"
                        subtitle="Successfully processed"
                    />
                    <StatCard
                        title="Scheduled"
                        value={mockPayments.filter(p => p.status === 'scheduled').length}
                        icon={Calendar}
                        color="purple"
                        subtitle="Future payments"
                    />
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-3">
                        {(['all', 'pending', 'completed', 'scheduled'] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedFilter === filter
                                    ? 'bg-brand-accent text-white border-brand-accent shadow-lg'
                                    : 'bg-slate-50 text-brand-obsidian/40 border-slate-100 hover:border-brand-accent/20'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/20" />
                            <input
                                type="text"
                                placeholder="Search payments..."
                                className="bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-accent/50 text-xs font-bold min-w-[300px]"
                            />
                        </div>
                        <button className="p-3 bg-slate-50 rounded-full border border-slate-200 hover:border-brand-accent/30 transition-all">
                            <Filter className="w-5 h-5 text-brand-obsidian/40" />
                        </button>
                    </div>
                </div>

                {/* Payments Table */}
                <Table
                    data={filteredPayments}
                    columns={paymentColumns}
                    emptyMessage="No payments found"
                />

                {/* PNPL Info Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-luxury p-10 rounded-[48px] border-brand-accent/20 bg-gradient-to-r from-brand-accent/5 to-transparent relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">
                                    PNPL Financing Available
                                </h3>
                            </div>
                            <p className="text-brand-obsidian/60 font-medium leading-relaxed">
                                Split your event expenses into flexible installments with our Pay Now, Pay Later solution.
                                Get instant approval for up to ₹50L with competitive rates.
                            </p>
                        </div>
                        <button className="btn-premium bg-brand-accent text-white hover:shadow-brand-accent/20 flex items-center space-x-2">
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Make Payment Modal */}
            <Modal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
                title="Make Payment"
                size="lg"
            >
                <div className="space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                            Select Vendor
                        </label>
                        <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold">
                            <option>Aether Catering</option>
                            <option>Lumina Visuals</option>
                            <option>Sonic Harmony</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                            Amount
                        </label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                            Payment Type
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            {['Full Payment', 'Partial Payment', 'Schedule Payment'].map((type) => (
                                <button
                                    key={type}
                                    className="px-4 py-3 rounded-2xl border border-slate-200 hover:border-brand-accent/30 hover:bg-slate-50 transition-all text-xs font-bold"
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                            Payment Method
                        </label>
                        <div className="grid grid-cols-4 gap-4">
                            {['PNPL', 'Card', 'UPI', 'Bank'].map((method) => (
                                <button
                                    key={method}
                                    className="px-4 py-3 rounded-2xl border border-slate-200 hover:border-brand-accent/30 hover:bg-slate-50 transition-all text-xs font-bold"
                                >
                                    {method}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="w-full btn-premium bg-brand-accent text-white py-5 flex items-center justify-center space-x-3">
                        <span>Process Payment</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Payments;
