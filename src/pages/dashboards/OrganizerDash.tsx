import {
    Plus, CreditCard, Bell, User,
    LayoutDashboard, Users, MessageSquare
} from 'lucide-react';

const OrganizerDash = () => {

    return (
        <div className="min-h-screen bg-white">
            {/* Dashboard Top Nav */}
            <nav className="glass-luxury sticky top-0 z-40 px-8 py-4 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-md">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center shadow-lg shadow-brand-accent/20">
                        <LayoutDashboard className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-brand-obsidian tracking-tighter uppercase">Organizer <span className="text-brand-accent">Pro.</span></span>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-1 p-1 bg-slate-50 border border-slate-100 rounded-xl">
                        {['Overview', 'Events', 'Clients', 'Staff'].map((tab, i) => (
                            <button key={i} className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${i === 0 ? 'bg-white shadow-sm text-brand-accent' : 'text-brand-obsidian/40 hover:text-brand-obsidian'}`}>{tab}</button>
                        ))}
                    </div>
                    <button className="relative p-2 text-brand-obsidian/40 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-brand-obsidian rounded-xl flex items-center justify-center text-white font-black shadow-lg">MP</div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-8 py-10 space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black text-brand-obsidian tracking-tighter uppercase">Agency <span className="text-brand-accent">Overview.</span></h1>
                        <p className="text-brand-obsidian/60 font-medium">Managing 24 active events across 12 clients.</p>
                    </div>
                    <div className="flex space-x-3">
                        <button className="btn-premium border-slate-200 text-brand-obsidian hover:bg-slate-50 px-6 py-3 shadow-sm transition-all">Report</button>
                        <button className="btn-premium bg-brand-accent text-white px-6 py-3 flex items-center space-x-2 shadow-lg shadow-brand-accent/20 transition-all hover:scale-105 active:scale-95">
                            <Plus className="w-5 h-5" />
                            <span>Bulk Create</span>
                        </button>
                    </div>
                </div>

                {/* Organizer Specific Stats */}
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { label: 'Active Clients', value: '12', icon: Users, color: 'text-brand-accent', bg: 'bg-slate-50' },
                        { label: 'Total Managed', value: '$840k', icon: CreditCard, color: 'text-purple-500', bg: 'bg-purple-50' },
                        { label: 'Staff Online', value: '08', icon: User, color: 'text-green-500', bg: 'bg-green-50' },
                        { label: 'New Leads', value: '+14', icon: MessageSquare, color: 'text-amber-500', bg: 'bg-amber-50' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-luxury p-8 rounded-[40px] space-y-4 hover:scale-[1.02] transition-all bg-white border-slate-100 shadow-sm hover:shadow-xl">
                            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center shadow-sm`}>
                                <stat.icon className={`${stat.color} w-6 h-6`} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-brand-obsidian/40 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-brand-obsidian mt-1">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-luxury p-10 rounded-[48px] space-y-8 bg-white border-slate-100 shadow-xl">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian">Active Project <span className="text-brand-accent">Timelines.</span></h3>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                {[
                                    { name: "Global Tech Summit", progress: 85, color: "bg-brand-accent" },
                                    { name: "Royal Wedding 2026", progress: 42, color: "bg-purple-500" },
                                    { name: "Music Fest '26", progress: 68, color: "bg-amber-500" },
                                ].map((project, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-black text-brand-obsidian uppercase tracking-wide text-xs">{project.name}</span>
                                            <span className="font-black text-xs text-brand-accent">{project.progress}%</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                                            <div className={`h-full ${project.color} rounded-full transition-all duration-1000 shadow-sm`} style={{ width: `${project.progress}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="glass-luxury p-8 rounded-[40px] space-y-6 bg-white border-slate-100 shadow-xl">
                            <h3 className="text-xl font-black uppercase tracking-tight text-brand-obsidian">Pending <span className="text-brand-accent">Tasks.</span></h3>
                            <div className="space-y-4">
                                {[
                                    { task: "Vendor KYC Support", priority: "High" },
                                    { task: "Budget Overrun Alert", priority: "Critical" },
                                    { task: "Contract Review", priority: "Medium" }
                                ].map((task, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-sm">
                                        <span className="text-xs font-black text-brand-obsidian/60 uppercase tracking-tighter">{task.task}</span>
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest shadow-sm ${task.priority === 'Critical' ? 'bg-red-500 text-white' : 'bg-white text-brand-obsidian/40 border border-slate-100'}`}>{task.priority}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full btn-premium border-slate-200 text-brand-obsidian hover:bg-slate-50 py-3 text-xs shadow-sm transition-all focus:scale-[0.98]">Manage All Tasks</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerDash;
