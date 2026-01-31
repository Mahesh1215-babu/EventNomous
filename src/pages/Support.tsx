import {
    CreditCard, User, Search,
    HelpCircle, ShieldCheck, Mail,
    MessageCircle, ChevronRight
} from 'lucide-react';

const Support = () => {

    return (
        <div className="min-h-screen bg-mesh pb-20 pt-20">
            <div className="max-w-7xl mx-auto px-6 space-y-20">
                <header className="text-center space-y-6 max-w-2xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                        <HelpCircle className="w-4 h-4 text-brand-accent" />
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Help & Resource Center</span>
                    </div>
                    <h1 className="text-6xl font-black text-brand-obsidian">How can we help?</h1>
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-obsidian/20 w-5 h-5 group-focus-within:text-brand-accent transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for answers (e.g., BNPL terms, vendor KYC...)"
                            className="w-full h-20 pl-16 pr-6 bg-white rounded-[24px] shadow-2xl shadow-slate-200 border border-slate-100 focus:ring-4 focus:ring-brand-accent/5 outline-none font-bold text-lg text-brand-obsidian placeholder:text-brand-obsidian/20"
                        />
                    </div>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Dashboard Support", desc: "Questions about managing your user or vendor console.", icon: User, color: "text-brand-accent", bg: "bg-slate-50" },
                        { title: "Payments & EMI", desc: "Understanding PNPL, split payments and credit limits.", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-50" },
                        { title: "Vendor Verification", desc: "Guidelines for vendor KYC and safety protocols.", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-50" },
                    ].map((card, i) => (
                        <div key={i} className="glass-luxury p-10 rounded-[40px] text-center space-y-6 card-hover group border-slate-100 hover:border-brand-accent/20 bg-white shadow-sm">
                            <div className={`w-20 h-20 mx-auto rounded-3xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                                <card.icon className={`w-10 h-10 ${card.color}`} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-brand-obsidian">{card.title}</h3>
                                <p className="text-brand-obsidian/60 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                            <button className="text-sm font-bold text-brand-accent hover:underline">View Guides</button>
                        </div>
                    ))}
                </div>

                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-black text-brand-dark leading-tight">Can't find what you're looking for? <br /> Create a support ticket.</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-6 glass rounded-[32px] border-none">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <Mail className="text-blue-500" />
                                </div>
                                <div>
                                    <h5 className="font-bold">Email Support</h5>
                                    <p className="text-sm text-brand-slate">Avg response: 4 hours</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300" />
                            </div>
                            <div className="flex items-center space-x-4 p-6 glass rounded-[32px] border-none">
                                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                                    <MessageCircle className="text-purple-500" />
                                </div>
                                <div>
                                    <h5 className="font-bold">Live Chat</h5>
                                    <p className="text-sm text-brand-slate">Active 24/7 with AI agents</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300" />
                            </div>
                        </div>
                    </div>

                    <div className="glass p-12 rounded-[56px] space-y-8 bg-white shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100">
                        <h3 className="text-2xl font-black uppercase tracking-tight">Open a Ticket</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Subject" className="w-full h-14 px-6 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue" />
                            <select className="w-full h-14 px-6 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue">
                                <option>General Inquiry</option>
                                <option>Technical Issue</option>
                                <option>Billing Question</option>
                            </select>
                            <textarea placeholder="Describe your issue..." className="w-full h-40 p-6 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
                            <button className="w-full btn-primary py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-blue/20">Submit Ticket</button>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="space-y-12">
                    <h2 className="text-4xl font-black text-brand-dark text-center uppercase tracking-tighter">Frequently Asked</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            { q: "How does the BNPL financing work?", a: "Every user goes through a quick 2-minute KYC. Once approved, you get a credit limit that can be used to book vendors instantly. You pay in monthly EMIs." },
                            { q: "Is the AI vendor recommendation really accurate?", a: "Yes! Our AI analyzes market trends, your specific budget inputs, and vendor ratings to find the highest probability of satisfaction for your specific event type." },
                            { q: "Can I cancel a booking through the platform?", a: "Yes, each vendor has their own cancellation policy displayed on their profile. You can initiate cancellations directly through your User Dashboard." }
                        ].map((faq, i) => (
                            <div key={i} className="glass p-8 rounded-[32px] border-none space-y-4 group cursor-pointer hover:bg-white/70 transition-all">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-black text-brand-dark">{faq.q}</h4>
                                    <ChevronRight className="w-5 h-5 group-hover:rotate-90 transition-transform text-brand-blue" />
                                </div>
                                <p className="text-brand-slate font-medium text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Support;
