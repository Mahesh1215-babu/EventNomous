import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search, Filter, Star,
    MapPin, ShieldCheck,
    ChevronRight, Zap, ArrowLeft,
    Camera,
    Music, Utensils
} from 'lucide-react';

const vendors = [
    { id: 1, name: 'Aether Catering', category: 'Culinary', rating: 4.9, location: 'Singapore', price: 'Premium', icon: Utensils, image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop' },
    { id: 2, name: 'Lumina Visuals', category: 'Media', rating: 5.0, location: 'Tokyo', price: 'Elite', icon: Camera, image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, name: 'Nexus Logistics', category: 'Execution', rating: 4.8, location: 'Dubai', price: 'Institutional', icon: Zap, image: 'https://images.unsplash.com/photo-1475721027785-f7f57925c3b4?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, name: 'Sonic Harmony', category: 'Entertainment', rating: 4.9, location: 'London', price: 'Premium', icon: Music, image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2670&auto=format&fit=crop' },
    { id: 5, name: 'Obsidian Guard', category: 'Security', rating: 5.0, location: 'New York', price: 'Institutional', icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=2664&auto=format&fit=crop' },
    { id: 6, name: 'Velvet Keys', category: 'Entertainment', rating: 4.8, location: 'Paris', price: 'Elite', icon: Music, image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2670&auto=format&fit=crop' },
    { id: 7, name: 'Saffron & Silk', category: 'Culinary', rating: 4.9, location: 'Mumbai', price: 'Premium', icon: Utensils, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop' },
    { id: 8, name: 'Blueprint Events', category: 'Execution', rating: 4.7, location: 'Berlin', price: 'Institutional', icon: Zap, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop' },
];

const VendorBrowse = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Culinary', 'Media', 'Execution', 'Entertainment', 'Security'];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-brand-obsidian dark:text-white pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 dark:text-slate-500 hover:text-brand-obsidian dark:hover:text-white transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Intelligence</span>
                        </button>
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white transition-colors duration-300">Partner <span className="text-brand-accent">Marketplace.</span></h1>
                        <p className="text-brand-obsidian/60 dark:text-slate-400 font-medium transition-colors duration-300">Verified institutional partners for high-net-worth event execution.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/20 dark:text-slate-500 group-focus-within:text-brand-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Neural Partner Search..."
                                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-3.5 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-accent/50 text-xs font-bold min-w-[350px] text-brand-obsidian dark:text-white placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-500 transition-all duration-300"
                            />
                        </div>
                        <button className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-brand-accent/30 transition-all text-brand-obsidian/40 dark:text-slate-400 hover:text-brand-accent shadow-sm">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 pt-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border
                            ${selectedCategory === cat ? 'bg-brand-accent text-white border-brand-accent shadow-[0_10px_20px_rgba(59,130,246,0.2)]' : 'bg-slate-50 dark:bg-slate-800 text-brand-obsidian/40 dark:text-slate-500 border-slate-100 dark:border-slate-700 hover:border-brand-accent/20 dark:hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Trust Center Banner */}
                <div className="glass-luxury p-8 rounded-[48px] border-slate-100 flex items-center justify-between relative overflow-hidden group hover:border-brand-accent/30 transition-all cursor-pointer bg-white dark:bg-slate-800/50 dark:border-slate-700/50 shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
                    <div className="flex items-center space-x-8 relative z-10">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform shadow-sm">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white transition-colors duration-300">Institutional Trust Center</h3>
                            <p className="text-brand-obsidian/60 dark:text-slate-400 text-sm font-medium transition-colors duration-300">All partners are verified for PNPL execution and ISO:9001 quality standards.</p>
                        </div>
                    </div>
                    <button className="btn-premium border-brand-accent/20 text-brand-accent hover:bg-brand-accent/10 relative z-10">
                        Audit Protocol
                    </button>
                </div>

                {/* Vendor Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vendors
                        .filter(vendor => selectedCategory === 'All' || vendor.category === selectedCategory)
                        .map((vendor, i) => (
                            <motion.div
                                key={vendor.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => navigate(`/vendors/${vendor.id}`)}
                                className="glass-luxury rounded-[40px] overflow-hidden border-slate-100 flex flex-col group hover:border-brand-accent/30 transition-all bg-white dark:bg-slate-800/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl cursor-pointer"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={vendor.image}
                                        alt={vendor.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-80"></div>
                                    <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-100 dark:border-slate-700 flex items-center space-x-2 shadow-sm">
                                        <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                                        <span className="text-[10px] font-black text-brand-obsidian dark:text-white">{vendor.rating}</span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white scale-90 shadow-lg">
                                            <vendor.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian dark:text-white">{vendor.category}</span>
                                    </div>
                                </div>

                                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-obsidian dark:text-white group-hover:text-brand-accent transition-colors">{vendor.name}</h3>
                                        <div className="flex items-center justify-between text-brand-obsidian/40 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="w-3 h-3" />
                                                <span>{vendor.location}</span>
                                            </div>
                                            <span>{vendor.price}</span>
                                        </div>
                                    </div>

                                    <button
                                        className="w-full py-4 rounded-2xl border border-slate-100 dark:border-slate-700 group-hover:border-brand-accent/30 group-hover:bg-slate-50 dark:group-hover:bg-slate-700/50 transition-all text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-3 shadow-sm text-brand-obsidian dark:text-white"
                                    >
                                        <span>Execute Brief</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default VendorBrowse;
