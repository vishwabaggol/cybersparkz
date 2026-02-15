import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, Briefcase, MapPin, Building, Phone, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { LogoText } from '../components/Logo';

const Signup = () => {
    const [role, setRole] = useState<'user' | 'recruiter'>('user');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        company_name: '',
        company_address: '',
        designation: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');


    const [showSuccess, setShowSuccess] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showSuccess && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (showSuccess && countdown === 0) {
            if (role === 'recruiter') {
                // For now redirect to login, as per user request "redirect into signin page"
                navigate('/login');
            } else {
                navigate('/login');
            }
        }
        return () => clearTimeout(timer);
    }, [showSuccess, countdown, navigate, role]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateUsername = (username: string) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(username);
    };

    const validatePassword = (password: string) => {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongRegex.test(password);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (role === 'user') {
            if (!validateUsername(formData.username)) {
                setError('Username must contain only letters and numbers.');
                return;
            }
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (role === 'user' && !validatePassword(formData.password)) {
            setError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, role })
            });

            const data = await response.json();

            if (response.ok) {
                setShowSuccess(true);
            } else {
                setError(data.error || 'Signup failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
            {showSuccess && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl border border-green-100 text-center max-w-sm mx-auto">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                            <span className="text-3xl">🎉</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h3>
                        <p className="text-gray-500 mb-6">Your account has been successfully registered.</p>
                        <div className="text-sm font-medium text-blue-600 bg-blue-50 py-2 px-4 rounded-full inline-block">
                            Redirecting to login in {countdown}s...
                        </div>
                    </div>
                </div>
            )}
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <div className="flex justify-center">
                    <LogoText />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center text-sm">
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        {error}
                    </div>
                )}

                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => setRole('user')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${role === 'user'
                            ? 'bg-blue-600 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        Job Seeker
                    </button>
                    <button
                        onClick={() => setRole('recruiter')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${role === 'recruiter'
                            ? 'bg-purple-600 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        Recruiter
                    </button>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {role === 'user' ? (
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Username</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                        placeholder="Mobile Number or Alphabets"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-1 ml-1">Allowed: Letters, Numbers (Mobile), or Mixed.</p>
                            </div>
                        ) : (
                            // Recruiter might still use email for login as username or we force username too? 
                            // Let's stick to username for consistency or just email if user didn't specify. 
                            // The prompt specifically said "in signup page modify for jobseekr/student...".
                            // But server expects username now. So I MUST add username field for Recruiter too or auto-fill it.
                            // I'll add Username for everyone for consistency.
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Username</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className={`focus:ring-${role === 'recruiter' ? 'purple' : 'blue'}-500 focus:border-${role === 'recruiter' ? 'purple' : 'blue'}-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border`}
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className={`focus:ring-${role === 'recruiter' ? 'purple' : 'blue'}-500 focus:border-${role === 'recruiter' ? 'purple' : 'blue'}-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border`}
                                    placeholder="Strong Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Confirm Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    className={`focus:ring-${role === 'recruiter' ? 'purple' : 'blue'}-500 focus:border-${role === 'recruiter' ? 'purple' : 'blue'}-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border`}
                                    placeholder="Re-enter Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                </div>
                            </div>
                        </div>

                        {role === 'recruiter' && (
                            <>
                                <div className="relative">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Company Name</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Building className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            name="company_name"
                                            type="text"
                                            required
                                            className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                            placeholder="CyberSec Inc."
                                            value={formData.company_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Designation</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Briefcase className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            name="designation"
                                            type="text"
                                            required
                                            className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                            placeholder="HR Manager"
                                            value={formData.designation}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Address</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MapPin className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            name="company_address"
                                            type="text"
                                            required
                                            className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg p-2.5 border"
                                            placeholder="123 Tech Park"
                                            value={formData.company_address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Agree to Terms & Conditions
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${role === 'recruiter'
                                ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg`}
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className={`font-medium ${role === 'recruiter' ? 'text-purple-600 hover:text-purple-500' : 'text-blue-600 hover:text-blue-500'}`}>
                            Sign in
                        </Link>
                    </p>
                    <div className="mt-4">
                        <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
