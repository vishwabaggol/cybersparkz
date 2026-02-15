import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, RefreshCw, AlertCircle, User, Eye, EyeOff } from 'lucide-react';
import { LogoText } from '../components/Logo';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('user');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState(false);
    const [error, setError] = useState('');


    // New state for 2FA
    const [showTwoFAInput, setShowTwoFAInput] = useState(false);
    const [twoFACode, setTwoFACode] = useState('');
    const [tempUserId, setTempUserId] = useState<number | null>(null);

    const { login, login2FA } = useAuth(); // Added login2FA
    const navigate = useNavigate();

    const generateCaptcha = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(result);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setCaptchaError(false);

        // Handle 2FA submission
        if (showTwoFAInput && tempUserId) {
            try {
                const data = await login2FA(tempUserId, twoFACode);
                login(data.token, data.user);
                navigate(data.user.role === 'recruiter' ? '/recruiter-dashboard' : '/dashboard');
            } catch (err: any) {
                setError(err.message || 'Invalid 2FA code');
            }
            return;
        }

        // Normal login flow
        if (captchaInput.toUpperCase() !== captcha) {
            setCaptchaError(true);
            generateCaptcha();
            setCaptchaInput('');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.twoFactorRequired) {
                    setTempUserId(data.userId);
                    setShowTwoFAInput(true);
                    setError(''); // Clear any previous errors
                    return;
                }

                if (data.user.role !== role) {
                    setError(`Please login with the correct role. This account is registered as a ${data.user.role}.`);
                    return;
                }

                login(data.token, data.user);
                if (data.user.role === 'recruiter') {
                    navigate('/recruiter-dashboard');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-100 relative">
                <div className="flex justify-center mb-8">
                    <LogoText />
                </div>

                <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">Sign in to your account</h2>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center border border-red-100"><AlertCircle className="h-4 w-4 mr-2" />{error}</div>}

                {captchaError && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg flex items-center z-50 animate-bounce">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Invalid Captcha!</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {showTwoFAInput ? (
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Verification Code</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="000000"
                                    value={twoFACode}
                                    onChange={(e) => setTwoFACode(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 py-2.5 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
                            >
                                Verify & Sign In
                            </button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1.5">I am a...</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setRole('user')}
                                        className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${role === 'user' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        Job Seeker
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setRole('recruiter')}
                                        className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${role === 'recruiter' ? 'bg-purple-600 text-white border-purple-600 shadow-sm' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        Recruiter
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Username</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Captcha</label>
                                <div className="flex space-x-3 mb-2">
                                    <div className="flex-1 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-xl font-mono font-bold tracking-widest text-gray-600 select-none">
                                        {captcha}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={generateCaptcha}
                                        className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors"
                                    >
                                        <RefreshCw className="h-5 w-5" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter characters above"
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2.5 rounded-lg text-white font-medium transition-all shadow-md ${role === 'recruiter' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                Sign In
                            </button>

                            <div className="text-center mt-4">
                                <button type="button" onClick={() => alert('Reset password link sent to email!')} className="text-sm text-gray-500 hover:text-gray-700 hover:underline">Forgot password?</button>
                            </div>
                        </>
                    )}
                </form>
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Don't have an account? <Link to="/signup" className={`font-medium hover:underline ${role === 'recruiter' ? 'text-purple-600' : 'text-blue-600'}`}>Sign up</Link>
                </p>
                <div className="mt-4 text-center">
                    <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
