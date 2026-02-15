import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, UserPlus } from 'lucide-react';
import landingLogo from '../assets/landing-logo.jpg';

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
        const fontSize = 14;
        const columns = Math.ceil(width / fontSize);
        const drops: number[] = new Array(columns).fill(1);

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random characters
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Color gradient: Cyan to Purple based on position/random
                const colors = ['#0ea5e9', '#8b5cf6', '#3b82f6', '#06b6d4'];
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top with randomness
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

        // Handle resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-initialize drops if width changes significantly, but simple resize helps avoid blur
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative selection:bg-blue-500 selection:text-white text-center font-sans">

            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 opacity-40"
            />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-0 pointer-events-none" />

            {/* Content Container with Glassmorphism */}
            <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">

                <div className="backdrop-blur-sm bg-slate-900/30 p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl animate-fade-in-down max-w-4xl w-full">

                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                            <img
                                src={landingLogo}
                                alt="Cybersparkz Logo"
                                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full relative z-10 drop-shadow-2xl ring-4 ring-slate-800/50 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="mb-10 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse-slow">
                            Welcome to Cybersparkz
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 font-medium">
                            <span className="inline-block border-r-2 border-blue-500 pr-1 animate-typing overflow-hidden whitespace-nowrap">
                                Secure Your Future.
                            </span>
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg mx-auto">
                        <button
                            onClick={() => navigate('/login')}
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden ring-1 ring-blue-400/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <div className="flex items-center justify-center space-x-2">
                                <Lock className="w-5 h-5" />
                                <span>Sign In</span>
                                <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </div>
                        </button>

                        <button
                            onClick={() => navigate('/signup')}
                            className="group relative px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600 hover:border-slate-500 text-slate-200 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <UserPlus className="w-5 h-5 text-slate-400 group-hover:text-blue-300 transition-colors" />
                                <span>Create Account</span>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 left-0 right-0 text-center z-10 text-slate-500 text-xs md:text-sm">
                <p>© {new Date().getFullYear()} Cybersparkz Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default LandingPage;
