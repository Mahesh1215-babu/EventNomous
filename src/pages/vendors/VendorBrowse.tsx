import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search, Filter, Star,
    MapPin, ShieldCheck, Globe,
    ChevronRight, Zap, ArrowLeft,
    Users, Briefcase, Camera,
    Music, Coffee, Utensils
} from 'lucide-react';

const vendors = [
    { id: 1, name: 'Aether Catering', category: 'Culinary', rating: 4.9, location: 'Singapore', price: 'Premium', icon: Utensils, image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop' },
    { id: 2, name: 'Lumina Visuals', category: 'Media', rating: 5.0, location: 'Tokyo', price: 'Elite', icon: Camera, image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, name: 'Nexus Logistics', category: 'Execution', rating: 4.8, location: 'Dubai', price: 'Institutional', icon: Zap, image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, name: 'Sonic Harmony', category: 'Entertainment', rating: 4.9, location: 'London', price: 'Premium', icon: Music, image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2670&auto=format&fit=crop' },
];

const VendorBrowse = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Culinary', 'Media', 'Execution', 'Entertainment', 'Security'];

    return (
        <div className="min-h-screen bg-white text-brand-obsidian pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-obsidian/40 hover:text-brand-obsidian transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Intelligence</span>
                        </button>
                        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian">Partner <span className="text-brand-accent">Marketplace.</span></h1>
                        <p className="text-brand-obsidian/60 font-medium">Verified institutional partners for high-net-worth event execution.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-obsidian/20 group-focus-within:text-brand-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Neural Partner Search..."
                                className="bg-slate-50 border border-slate-200 rounded-full py-3.5 pl-12 pr-6 outline-none focus:ring-1 focus:ring-brand-accent/50 text-xs font-bold min-w-[350px] text-brand-obsidian placeholder:text-brand-obsidian/20"
                            />
                        </div>
                        <button className="p-3.5 bg-slate-50 rounded-full border border-slate-200 hover:border-brand-accent/30 transition-all text-brand-obsidian/40 hover:text-brand-accent shadow-sm">
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
                            ${selectedCategory === cat ? 'bg-brand-accent text-white border-brand-accent shadow-[0_10px_20px_rgba(59,130,246,0.2)]' : 'bg-slate-50 text-brand-obsidian/40 border-slate-100 hover:border-brand-accent/20'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Trust Center Banner */}
                <div className="glass-luxury p-8 rounded-[48px] border-slate-100 flex items-center justify-between relative overflow-hidden group hover:border-brand-accent/30 transition-all cursor-pointer bg-white shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
                    <div className="flex items-center space-x-8 relative z-10">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform shadow-sm">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">Institutional Trust Center</h3>
                            <p className="text-brand-obsidian/60 text-sm font-medium">All partners are verified for PNPL execution and ISO:9001 quality standards.</p>
                        </div>
                    </div>
                    <button className="btn-premium border-brand-accent/20 text-brand-accent hover:bg-brand-accent/10 relative z-10">
                        Audit Protocol
                    </button>
                </div>

                {/* Vendor Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vendors.map((vendor, i) => (
                        <motion.div
                            key={vendor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-luxury rounded-[40px] overflow-hidden border-slate-100 flex flex-col group hover:border-brand-accent/30 transition-all bg-white shadow-sm hover:shadow-xl"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                                <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-slate-100 flex items-center space-x-2 shadow-sm">
                                    <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                                    <span className="text-[10px] font-black text-brand-obsidian">{vendor.rating}</span>
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white scale-90 shadow-lg">
                                        <vendor.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian">{vendor.category}</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-obsidian group-hover:text-brand-accent transition-colors">{vendor.name}</h3>
                                    <div className="flex items-center justify-between text-brand-obsidian/40 text-[10px] font-black uppercase tracking-widest">
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-3 h-3" />
                                            <span>{vendor.location}</span>
                                        </div>
                                        <span>{vendor.price}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate(`/vendors/${vendor.id}`)}
                                    className="w-full py-4 rounded-2xl border border-slate-100 group-hover:border-brand-accent/30 group-hover:bg-slate-50 transition-all text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-3 shadow-sm"
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
