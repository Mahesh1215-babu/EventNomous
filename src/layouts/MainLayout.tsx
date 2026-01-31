import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import AIChatbot from '../components/ai/AIChatbot';


const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
                <div className="max-w-7xl mx-auto glass-luxury rounded-full px-10 py-4 flex items-center justify-between border-black/5 backdrop-blur-3xl">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <span className="text-white font-black text-lg">E</span>
                        </div>
                        <span className="text-xl font-black text-brand-obsidian tracking-tighter uppercase">
                            Event<span className="text-brand-gold">Nomous</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-brand-obsidian/60">
                        <Link to="/events" className="hover:text-brand-gold transition-all">Intelligence</Link>
                        <Link to="/vendors" className="hover:text-brand-gold transition-all">Partnerships</Link>
                        <Link to="/support" className="hover:text-brand-gold transition-all">Support</Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <button
                            onClick={() => navigate('/auth/login')}
                            className="text-[10px] font-black uppercase tracking-widest text-brand-obsidian/50 hover:text-brand-obsidian transition-colors"
                        >
                            Executive Login
                        </button>
                        <button
                            onClick={() => navigate('/auth/signup')}
                            className="btn-premium bg-brand-gold text-white px-6 py-2.5 rounded-full border-none"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <AIChatbot />
        </div>
    );
};

export default MainLayout;
