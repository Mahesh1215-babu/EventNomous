import {
    CreditCard, User, Search,
    HelpCircle, ShieldCheck, Mail,
    MessageCircle, ChevronRight, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/ui/Modal';

const Support = () => {
    const [selectedGuide, setSelectedGuide] = useState<any>(null);
    const [ticketSubmitted, setTicketSubmitted] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const handleTicketSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setTicketSubmitted(true);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-mesh pb-20 pt-20 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 space-y-20">
                <header className="text-center space-y-6 max-w-2xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                        <HelpCircle className="w-4 h-4 text-brand-accent" />
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Help & Resource Center</span>
                    </div>
                    <h1 className="text-6xl font-black text-brand-obsidian dark:text-white transition-colors duration-300">How can we help?</h1>
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-obsidian/20 dark:text-slate-400 w-5 h-5 group-focus-within:text-brand-accent transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for answers (e.g., BNPL terms, vendor KYC...)"
                            className="w-full h-20 pl-16 pr-6 bg-white dark:bg-slate-800 rounded-[24px] shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-700/50 focus:ring-4 focus:ring-brand-accent/5 outline-none font-bold text-lg text-brand-obsidian dark:text-white placeholder:text-brand-obsidian/20 dark:placeholder:text-slate-500 transition-all duration-300"
                        />
                    </div>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Dashboard Support",
                            desc: "Questions about managing your user or vendor console.",
                            icon: User,
                            color: "text-brand-accent",
                            bg: "bg-slate-50",
                            content: (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">Live Dashboard Statistics</h3>
                                        <p className="text-sm text-brand-slate">Real-time view of your event performance and budget allocation.</p>
                                    </div>

                                    {/* Mock Chart */}
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4 transition-colors">
                                        <div className="flex justify-between items-end h-32 px-2 space-x-2">
                                            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                                    className="w-full bg-brand-accent/20 rounded-t-lg relative group transition-colors"
                                                >
                                                    <div className="absolute bottom-0 inset-x-0 bg-brand-accent/80 h-full rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold text-brand-slate dark:text-slate-500 uppercase tracking-wider transition-colors">
                                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-brand-accent/5 dark:bg-brand-accent/10 border border-brand-accent/10 dark:border-brand-accent/20 transition-colors">
                                            <p className="text-[10px] font-black uppercase text-brand-accent">Active Vendors</p>
                                            <p className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">12</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-500/20 transition-colors">
                                            <p className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">Pending Actions</p>
                                            <p className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors">3</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            title: "Payments & EMI",
                            desc: "Understanding PNPL, split payments and credit limits.",
                            icon: CreditCard,
                            color: "text-purple-500",
                            bg: "bg-purple-50",
                            content: (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold dark:text-white transition-colors">Credit Limit & EMI Calculator</h3>
                                        <p className="text-sm text-brand-slate dark:text-slate-400 transition-colors">Adjust to see your estimated monthly payments.</p>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6 transition-colors">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold transition-colors">
                                                <span className="dark:text-slate-300">Credit Usage</span>
                                                <span className="text-purple-600 dark:text-purple-400">$12,000 / $50,000</span>
                                            </div>
                                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '24%' }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-purple-500 rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700 transition-colors">
                                            <p className="text-xs font-black uppercase tracking-widest text-brand-slate dark:text-slate-500 transition-colors">Select EMI Plan</p>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['3 Months', '6 Months', '12 Months'].map((plan, i) => (
                                                    <button key={i} className={`py-2 rounded-xl text-xs font-bold border transition-all ${i === 1 ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-brand-slate dark:text-slate-400 hover:border-purple-300 dark:hover:border-purple-700'}`}>
                                                        {plan}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors">
                                                <span className="text-sm font-bold text-brand-obsidian dark:text-slate-300 transition-colors">Est. Monthly</span>
                                                <span className="text-xl font-black text-purple-600 dark:text-purple-400 transition-colors">$2,100</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            title: "Vendor Verification",
                            desc: "Guidelines for vendor KYC and safety protocols.",
                            icon: ShieldCheck,
                            color: "text-green-500",
                            bg: "bg-green-50",
                            content: (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold dark:text-white transition-colors">Verification Visualizer</h3>
                                        <p className="text-sm text-brand-slate dark:text-slate-400 transition-colors">Track the 4-step verification status of your partners.</p>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
                                        <div className="space-y-6 relative z-10">
                                            {[
                                                { step: "Business KYC", status: "Verified", date: "Jan 12, 2024" },
                                                { step: "Financial Audit", status: "Verified", date: "Jan 14, 2024" },
                                                { step: "Safety Protocol", status: "In Progress", date: "Pending" },
                                                { step: "Final Approval", status: "Locked", date: "-" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${item.status === 'Verified' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' :
                                                        item.status === 'In Progress' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-500 animate-pulse' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-600'
                                                        }`}>
                                                        {item.status === 'Verified' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 bg-current rounded-full" />}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-center transition-colors">
                                                            <p className="font-bold text-sm text-brand-obsidian dark:text-white transition-colors">{item.step}</p>
                                                            <span className={`text-[10px] font-black uppercase transition-colors ${item.status === 'Verified' ? 'text-green-600 dark:text-green-400' :
                                                                item.status === 'In Progress' ? 'text-orange-500 dark:text-orange-400' : 'text-slate-400 dark:text-slate-600'
                                                                }`}>{item.status}</span>
                                                        </div>
                                                        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-2 transition-colors">
                                                            <div className={`h-full rounded-full transition-all ${item.status === 'Verified' ? 'bg-green-500 w-full shadow-[0_0_8px_rgba(34,197,94,0.4)]' :
                                                                item.status === 'In Progress' ? 'bg-orange-500 w-1/2 shadow-[0_0_8px_rgba(249,115,22,0.4)]' : 'w-0'
                                                                }`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                    ].map((card, i) => (
                        <div key={i} className="glass-luxury p-10 rounded-[40px] text-center space-y-6 card-hover group border-slate-100 hover:border-brand-accent/20 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 shadow-sm transition-all duration-300">
                            <div className={`w-20 h-20 mx-auto rounded-3xl ${card.bg} dark:bg-slate-900/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                                <card.icon className={`w-10 h-10 ${card.color}`} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-brand-obsidian dark:text-white transition-colors duration-300">{card.title}</h3>
                                <p className="text-brand-obsidian/60 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">{card.desc}</p>
                            </div>
                            <button
                                onClick={() => setSelectedGuide(card)}
                                className="text-sm font-bold text-brand-accent hover:underline"
                            >
                                View Guides
                            </button>
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={!!selectedGuide}
                    onClose={() => setSelectedGuide(null)}
                    title={selectedGuide?.title}
                >
                    {selectedGuide?.content}
                </Modal>

                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-black text-brand-obsidian dark:text-white leading-tight transition-colors duration-300">Can't find what you're looking for? <br /> Create a support ticket.</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-6 glass-luxury dark:bg-slate-800/50 rounded-[32px] border-slate-100 dark:border-slate-700/50 cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors shadow-sm" onClick={() => window.location.href = 'mailto:support@eventnomous.com'}>
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center transition-colors">
                                    <Mail className="text-blue-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-brand-obsidian dark:text-white transition-colors">Email Support</h5>
                                    <p className="text-sm text-brand-slate dark:text-slate-400 transition-colors">Avg response: 4 hours</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300 dark:text-slate-600" />
                            </div>
                            <div className="flex items-center space-x-4 p-6 glass-luxury dark:bg-slate-800/50 rounded-[32px] border-slate-100 dark:border-slate-700/50 cursor-pointer hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors shadow-sm" onClick={() => alert('Starting live chat...')}>
                                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center transition-colors">
                                    <MessageCircle className="text-purple-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <h5 className="font-bold text-brand-obsidian dark:text-white transition-colors">Live Chat</h5>
                                    <p className="text-sm text-brand-slate dark:text-slate-400 transition-colors">Active 24/7 with AI agents</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300 dark:text-slate-600" />
                            </div>
                        </div>
                    </div>

                    <div className="glass p-12 rounded-[56px] space-y-8 bg-white dark:bg-slate-800/50 shadow-2xl shadow-gray-200/50 dark:shadow-none ring-1 ring-gray-100 dark:ring-slate-700">
                        <h3 className="text-2xl font-black uppercase tracking-tight text-brand-obsidian dark:text-white">Open a Ticket</h3>
                        {ticketSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-500/20 rounded-3xl p-8 text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-500" />
                                </div>
                                <h4 className="text-xl font-black text-green-800 dark:text-green-400">Ticket Submitted!</h4>
                                <p className="text-green-700 dark:text-green-300 font-medium">We've received your request and will get back to you shortly. Ticket ID: #T-{Math.floor(Math.random() * 10000)}</p>
                                <button
                                    onClick={() => setTicketSubmitted(false)}
                                    className="text-sm font-bold text-green-700 dark:text-green-400 hover:underline mt-4"
                                >
                                    Submit Another Ticket
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleTicketSubmit} className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full h-14 px-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue text-brand-obsidian dark:text-white placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-500"
                                />
                                <select className="w-full h-14 px-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue text-brand-obsidian dark:text-white">
                                    <option>General Inquiry</option>
                                    <option>Technical Issue</option>
                                    <option>Billing Question</option>
                                </select>
                                <textarea
                                    required
                                    placeholder="Describe your issue..."
                                    className="w-full h-40 p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue text-brand-obsidian dark:text-white placeholder:text-brand-obsidian/30 dark:placeholder:text-slate-500"
                                ></textarea>
                                <button type="submit" className="w-full btn-primary py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-blue/20 dark:shadow-none bg-brand-obsidian dark:bg-brand-gold text-white dark:text-brand-obsidian rounded-xl hover:bg-black dark:hover:bg-brand-gold-muted transition-colors">
                                    Submit Ticket
                                </button>
                            </form>
                        )}
                    </div>
                </section>

                {/* FAQs */}
                <section className="space-y-12">
                    <h2 className="text-4xl font-black text-brand-dark dark:text-white text-center uppercase tracking-tighter transition-colors duration-300">Frequently Asked</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            { q: "How does the BNPL financing work?", a: "Every user goes through a quick 2-minute KYC. Once approved, you get a credit limit that can be used to book vendors instantly. You pay in monthly EMIs." },
                            { q: "Is the AI vendor recommendation really accurate?", a: "Yes! Our AI analyzes market trends, your specific budget inputs, and vendor ratings to find the highest probability of satisfaction for your specific event type." },
                            { q: "Can I cancel a booking through the platform?", a: "Yes, each vendor has their own cancellation policy displayed on their profile. You can initiate cancellations directly through your User Dashboard." }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                className={`glass p-8 rounded-[32px] border-none space-y-4 group cursor-pointer hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all ${expandedFaq === i ? 'bg-white dark:bg-slate-800 shadow-lg' : 'bg-transparent'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-black text-brand-dark dark:text-white transition-colors duration-300">{faq.q}</h4>
                                    <ChevronRight className={`w-5 h-5 transition-transform text-brand-blue ${expandedFaq === i ? 'rotate-90' : 'group-hover:rotate-90'}`} />
                                </div>
                                <AnimatePresence>
                                    {expandedFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-brand-slate dark:text-slate-400 font-medium text-sm leading-relaxed pt-2">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Support;
