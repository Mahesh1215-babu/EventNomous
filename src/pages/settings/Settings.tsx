import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User, Mail, Phone, MapPin,
    Lock, Shield, Bell, Eye,
    Save, Camera
} from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'privacy'>('profile');

    const tabs = [
        { id: 'profile' as const, label: 'Profile & Account', icon: User },
        { id: 'security' as const, label: 'Security', icon: Shield },
        { id: 'notifications' as const, label: 'Notifications', icon: Bell },
        { id: 'privacy' as const, label: 'Privacy', icon: Eye },
    ];

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-obsidian">
                        Account <span className="text-brand-accent">Settings.</span>
                    </h1>
                    <p className="text-brand-obsidian/60 font-medium">
                        Manage your profile, security, and preferences.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex space-x-2 border-b border-slate-100 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-6 py-4 text-xs font-black uppercase tracking-widest transition-all border-b-2 ${activeTab === tab.id
                                ? 'border-brand-accent text-brand-accent'
                                : 'border-transparent text-brand-obsidian/40 hover:text-brand-obsidian'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    {activeTab === 'profile' && (
                        <div className="space-y-8">
                            {/* Profile Picture */}
                            <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm">
                                <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian mb-6">
                                    Profile Picture
                                </h3>
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full flex items-center justify-center text-white text-3xl font-black">
                                        PS
                                    </div>
                                    <div className="space-y-3">
                                        <button className="btn-premium border-brand-accent/20 text-brand-accent hover:bg-brand-accent/10 flex items-center space-x-2">
                                            <Camera className="w-4 h-4" />
                                            <span>Upload New Photo</span>
                                        </button>
                                        <p className="text-xs text-brand-obsidian/40">JPG, PNG or GIF. Max size 2MB.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm space-y-6">
                                <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                                    Personal Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="text"
                                                defaultValue="Priya Sharma"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="email"
                                                defaultValue="priya.sharma@example.com"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="tel"
                                                defaultValue="+91 98765 43210"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="text"
                                                defaultValue="Mumbai, Maharashtra"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-premium bg-brand-accent text-white flex items-center space-x-2">
                                    <Save className="w-4 h-4" />
                                    <span>Save Changes</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-8">
                            {/* Change Password */}
                            <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm space-y-6">
                                <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                                    Change Password
                                </h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Current Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold ml-1">
                                            Confirm New Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-obsidian/40" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-brand-accent/50 outline-none font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-premium bg-brand-accent text-white">
                                    Update Password
                                </button>
                            </div>

                            {/* Two-Factor Authentication */}
                            <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                                            Two-Factor Authentication
                                        </h3>
                                        <p className="text-sm text-brand-obsidian/60 font-medium">
                                            Add an extra layer of security to your account
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-accent/50 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-accent"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                                Notification Preferences
                            </h3>
                            {[
                                { label: 'Event Updates', desc: 'Receive notifications about your events' },
                                { label: 'Payment Alerts', desc: 'Get notified about payment due dates' },
                                { label: 'Vendor Messages', desc: 'Notifications when vendors message you' },
                                { label: 'AI Recommendations', desc: 'Receive AI-powered suggestions' },
                                { label: 'Marketing Emails', desc: 'Updates about new features and offers' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                                    <div>
                                        <p className="font-black text-brand-obsidian">{item.label}</p>
                                        <p className="text-sm text-brand-obsidian/60">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                                        <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-accent/50 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-accent"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'privacy' && (
                        <div className="glass-luxury bg-white p-8 rounded-[32px] border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">
                                Privacy Settings
                            </h3>
                            {[
                                { label: 'Profile Visibility', desc: 'Make your profile visible to vendors' },
                                { label: 'Event History', desc: 'Show your past events on your profile' },
                                { label: 'Data Sharing', desc: 'Share anonymized data for platform improvement' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                                    <div>
                                        <p className="font-black text-brand-obsidian">{item.label}</p>
                                        <p className="text-sm text-brand-obsidian/60">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-accent/50 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-accent"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;
