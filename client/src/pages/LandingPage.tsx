import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, UserPlus } from 'lucide-react';
import landingLogo from '../assets/landing-logo.jpg';
import talforLogo from '../assets/talfor-logo.png';

const LandingPage = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const characters = '0101010101CYBERSPARKZABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const fontSize = 12;
        const columns = Math.ceil(width / fontSize);
        const drops: number[] = new Array(columns).fill(1);

        const draw = () => {
            // Light theme background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Light theme color palette
                const colors = ['#cbd5e1', '#94a3b8', '#64748b', '#475569'];
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        let animationFrameId: number;
        const render = () => {
            draw();
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative selection:bg-blue-200 selection:text-gray-900 font-sans">

            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white z-0 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">

                <div className="backdrop-blur-sm bg-white/80 p-6 md:p-10 rounded-2xl border border-gray-200 shadow-2xl max-w-5xl w-full">

                    {/* Logo */}
                    <div className="flex justify-center mb-6 animate-zoom-in">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full animate-pulse-slow"></div>
                            <img
                                src={landingLogo}
                                alt="Cybersparkz Logo"
                                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full relative z-10 drop-shadow-xl ring-2 ring-gray-300 group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-8 space-y-2 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                            Welcome to <span className="inline-block text-gray-700 animate-tracking-expand" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>Cybersparkz</span>
                        </h1>

                        {/* Powered By Section */}
                        <div className="flex flex-col items-center space-y-2 pt-4 animate-fade-in-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
                            <p className="text-xs text-gray-600 uppercase tracking-wide">Powered by</p>
                            <img
                                src={talforLogo}
                                alt="Talfor Logo"
                                className="h-12 md:h-14 w-12 md:w-14 rounded-full object-cover ring-2 ring-gray-300"
                            />

                        </div>

                    </div>



                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '1.4s', opacity: 0, animationFillMode: 'forwards' }}>
                        <button
                            onClick={() => navigate('/login')}
                            className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <div className="flex items-center justify-center space-x-2 relative">
                                <Lock className="w-4 h-4" />
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </div>
                        </button>

                        <button
                            onClick={() => navigate('/signup')}
                            className="group relative px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-blue-500 text-gray-700 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <UserPlus className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                <span>Create Account</span>
                            </div>
                        </button>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} Cybersparkz Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
