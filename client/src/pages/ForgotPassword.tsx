import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Key, AlertCircle, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { LogoText } from '../components/Logo';

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: Request, 2: Verify OTP, 3: Reset Password
    const [identifier, setIdentifier] = useState('');
    const [otp, setOtp] = useState('');
    const [serverOtp, setServerOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Timer state
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);

    const navigate = useNavigate();

    // Timer Logic
    React.useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (step === 2 && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [step, timer]);

    const handleRequestOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/request-otp-reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                if (data.otp) {
                    setServerOtp(data.otp);
                }
                setStep(2);
                setTimer(30); // Reset timer
                setCanResend(false);
            } else {
                setError(data.error || 'Failed to send OTP');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (!canResend) return;
        setError('');
        setMessage('');
        setIsLoading(true);

        // Clear previous OTP from screen to avoid confusion if new one comes
        setServerOtp('');

        try {
            const response = await fetch('http://localhost:3000/api/auth/request-otp-reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('OTP Resent successfully!');
                if (data.otp) {
                    setServerOtp(data.otp);
                }
                setTimer(30);
                setCanResend(false);
            } else {
                setError(data.error || 'Failed to resend OTP');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, otp }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('OTP Verified! Please set your new password.');
                setStep(3);
            } else {
                setError(data.error || 'Invalid OTP');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, otp, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                // Success Popup Logic could be here, or just use the message + redirect
                setTimeout(() => navigate('/login'), 3000);
            } else {
                setError(data.error || 'Failed to reset password');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-100 relative">
                <div className="flex justify-center mb-8">
                    <LogoText />
                </div>

                <h2 className="text-xl font-semibold mb-2 text-center text-gray-700">
                    {step === 1 && 'Reset Password'}
                    {step === 2 && 'Verify OTP'}
                    {step === 3 && 'Set New Password'}
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    {step === 1 && 'Enter your email or username to receive an OTP'}
                    {step === 2 && 'Enter the OTP sent to your email/mobile'}
                    {step === 3 && 'Create a new secure password'}
                </p>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center border border-red-100"><AlertCircle className="h-4 w-4 mr-2" />{error}</div>}
                {message && <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4 text-sm flex items-center border border-green-100"><AlertCircle className="h-4 w-4 mr-2" />{message}</div>}

                {/* Display OTP on Screen (CAPTCHA Style) - Step 2 only */}
                {step === 2 && serverOtp && (
                    <div className="mb-4 bg-blue-50 border border-blue-200 p-3 rounded-lg text-center shadow-sm">
                        <p className="text-[10px] text-blue-600 mb-0.5 uppercase tracking-wide font-bold">Your Code</p>
                        <div className="text-xl font-mono font-bold text-blue-800 tracking-wider bg-white inline-block px-3 py-1.5 rounded border border-blue-100 shadow-sm mt-1 mb-1">
                            {serverOtp}
                        </div>
                        <p className="text-[10px] text-gray-500">Enter this code below</p>
                    </div>
                )}

                {step === 1 && (
                    <form onSubmit={handleRequestOtp} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Email or Username</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter email or username"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-2.5 rounded-lg text-white font-medium transition-all shadow-md bg-blue-600 hover:bg-blue-700 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Sending...' : 'Send OTP'}
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleVerifyOtp} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">OTP</label>
                            <div className="relative">
                                <Key className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-2.5 rounded-lg text-white font-medium transition-all shadow-md bg-blue-600 hover:bg-blue-700 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Verifying...' : 'Verify OTP'}
                            </button>

                            <button
                                type="button"
                                onClick={handleResendOtp}
                                disabled={!canResend || isLoading}
                                className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${canResend
                                    ? 'text-blue-600 hover:bg-blue-50'
                                    : 'text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {canResend ? 'Resend OTP' : `Resend OTP in ${timer}s`}
                            </button>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleResetPassword} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
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
                            <label className="block text-gray-700 text-sm font-medium mb-1">Confirm New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-2.5 rounded-lg text-white font-medium transition-all shadow-md bg-blue-600 hover:bg-blue-700 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                )}

                <div className="mt-6 text-center">
                    <Link to="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center justify-center">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
