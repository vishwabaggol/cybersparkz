import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LogOut, User, PlusCircle, FileText, Check, X, MapPin, Settings, Calendar, Moon, Sun, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LogoText } from '../components/Logo';

const DashboardRecruiter = () => {
    const { user, logout, token } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('post-job');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [applications, setApplications] = useState<any[]>([]);

    // Session Timer
    const [timeLeft, setTimeLeft] = useState(1200); // 20 mins

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    logout();
                    navigate('/login');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [logout, navigate]);

    useEffect(() => {
        if (timeLeft === 120) {
            setTimeout(() => alert("Warning: Your session will expire in 2 minutes."), 0);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Profile State
    const [profileForm, setProfileForm] = useState({
        company_name: '',
        company_address: '',
        designation: '',
        name: '',
        photo_url: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            setProfileForm({
                company_name: user.company_name || '',
                company_address: user.company_address || '',
                designation: user.designation || '',
                name: user.name || '',
                photo_url: user.photo_url || ''
            });
        }
    }, [user]);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileForm({ ...profileForm, photo_url: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    // Interview Modal State
    const [showInterviewModal, setShowInterviewModal] = useState(false);
    const [selectedAppId, setSelectedAppId] = useState<number | null>(null);
    const [interviewData, setInterviewData] = useState({ date: '', notes: '' });

    // Job Posting State
    const [jobForm, setJobForm] = useState({
        title: '',
        description: '',
        requirements: '',
        location: '',
        salary_range: '',
        experience_level: 'Entry Level'
    });

    useEffect(() => {
        if (activeTab === 'applications') {
            fetchApplications();
        }
    }, [activeTab]);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/recruiter/applications', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error('Failed to fetch applications', error);
        }
    };

    const handleJobSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(jobForm)
            });

            if (response.ok) {
                alert('Job Posted Successfully!');
                setJobForm({
                    title: '',
                    description: '',
                    requirements: '',
                    location: '',
                    salary_range: '',
                    experience_level: 'Entry Level'
                });
            } else {
                alert('Failed to post job');
            }
        } catch (error) {
            console.error('Error posting job', error);
        }
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            const response = await fetch(`http://localhost:3000/api/applications/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });
            if (response.ok) {
                fetchApplications();
            }
        } catch (error) {
            console.error('Error updating status', error);
        }
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/recruiters/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(profileForm)
            });
            if (response.ok) {
                alert('Profile Updated Successfully');
                setIsEditing(false);
                // Ideally refresh user data here or rely on next fetch
            } else {
                alert('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        if (user) {
            setProfileForm({
                company_name: user.company_name || '',
                company_address: user.company_address || '',
                designation: user.designation || '',
                name: user.name || '',
                photo_url: user.photo_url || ''
            });
        }
    };

    const openInterviewModal = (appId: number) => {
        setSelectedAppId(appId);
        setInterviewData({ date: '', notes: '' });
        setShowInterviewModal(true);
    };

    const handleScheduleInterview = async () => {
        if (!selectedAppId || !interviewData.date) {
            alert('Please select a date and time');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/applications/${selectedAppId}/schedule`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    interview_date: interviewData.date,
                    interview_notes: interviewData.notes
                })
            });

            if (response.ok) {
                alert('Interview Scheduled!');
                setShowInterviewModal(false);
                fetchApplications();
            } else {
                alert('Failed to schedule interview');
            }
        } catch (error) {
            console.error('Error scheduling interview', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl h-full flex flex-col transition-transform duration-300 transform 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:relative md:translate-x-0
            `}>
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <LogoText />
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500">
                        <X size={24} />
                    </button>
                </div>
                <nav className="mt-8 flex-1 px-4 space-y-2">
                    <SidebarItem
                        icon={<User size={18} />}
                        label="Company Profile"
                        active={activeTab === 'profile'}
                        onClick={() => setActiveTab('profile')}
                        colorClass="text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300"
                    />
                    <SidebarItem
                        icon={<PlusCircle size={18} />}
                        label="Post a Job"
                        active={activeTab === 'post-job'}
                        onClick={() => setActiveTab('post-job')}
                        colorClass="text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300"
                    />
                    <SidebarItem
                        icon={<FileText size={18} />}
                        label="Applications"
                        active={activeTab === 'applications'}
                        onClick={() => setActiveTab('applications')}
                        colorClass="text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300"
                    />
                    <SidebarItem
                        icon={<Settings size={18} />}
                        label="Settings"
                        active={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                        colorClass="text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300"
                    />
                </nav>
                <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="text-xs text-gray-400 text-center mb-2">
                        Session expires: <span className={timeLeft < 300 ? 'text-red-500 font-bold' : ''}>{formatTime(timeLeft)}</span>
                    </div>
                    <div className="flex items-center mb-4 px-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">
                            {user?.company_name?.charAt(0)}
                        </div>
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{user?.company_name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                        <LogOut className="h-4 w-4 mr-2" /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 dark:bg-gray-900 min-h-screen overflow-y-auto">
                <header className="flex items-center mb-8">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="mr-4 text-gray-500 md:hidden"
                    >
                        <Menu size={24} />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {activeTab === 'profile' && 'Company Profile'}
                            {activeTab === 'post-job' && 'Post a New Opportunity'}
                            {activeTab === 'applications' && 'Candidate Applications'}
                            {activeTab === 'settings' && 'Settings'}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                            {activeTab === 'applications' && `Manage candidates for your open roles`}
                        </p>
                    </div>
                </header>

                <main className="max-w-4xl mx-auto">
                    {activeTab === 'post-job' && (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                            <form onSubmit={handleJobSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                            placeholder="e.g. Senior Security Analyst"
                                            value={jobForm.title}
                                            onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                className="w-full pl-9 border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                                placeholder="e.g. Remote, New York"
                                                value={jobForm.location}
                                                onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                                        <select
                                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                            value={jobForm.experience_level}
                                            onChange={(e) => setJobForm({ ...jobForm, experience_level: e.target.value })}
                                        >
                                            <option>Entry Level</option>
                                            <option>Mid Level</option>
                                            <option>Senior Level</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                            placeholder="e.g. 80,000 - 120,000"
                                            value={jobForm.salary_range}
                                            onChange={(e) => setJobForm({ ...jobForm, salary_range: e.target.value })}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                            placeholder="Detailed description of the role..."
                                            value={jobForm.description}
                                            onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                                        <textarea
                                            rows={3}
                                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
                                            placeholder="Key skills and qualifications..."
                                            value={jobForm.requirements}
                                            onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-sm font-medium"
                                    >
                                        Post Job
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {activeTab === 'applications' && (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                {applications.length > 0 ? (
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Role</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {applications.map((app) => (
                                                <tr key={app.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs mr-3">
                                                                {app.applicant_name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{app.applicant_name}</div>
                                                                <div className="text-sm text-gray-500">{app.applicant_email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{app.job_title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {new Date(app.applied_at).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                        ${app.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                                                                app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                                    'bg-yellow-100 text-yellow-800'}`}>
                                                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            {app.status === 'applied' ? (
                                                                <div className="flex justify-end space-x-2">
                                                                    <button
                                                                        onClick={() => openInterviewModal(app.id)}
                                                                        className="text-purple-600 hover:text-purple-900 bg-purple-50 p-1.5 rounded hover:bg-purple-100 transition-colors"
                                                                        title="Schedule Interview"
                                                                    >
                                                                        <Calendar size={16} />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => updateStatus(app.id, 'shortlisted')}
                                                                        className="text-green-600 hover:text-green-900 bg-green-50 p-1.5 rounded hover:bg-green-100 transition-colors"
                                                                        title="Shortlist"
                                                                    >
                                                                        <Check size={16} />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => updateStatus(app.id, 'rejected')}
                                                                        className="text-red-600 hover:text-red-900 bg-red-50 p-1.5 rounded hover:bg-red-100 transition-colors"
                                                                        title="Reject"
                                                                    >
                                                                        <X size={16} />
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <span className="text-gray-500 italic">
                                                                    {app.status === 'interview_scheduled' ? 'Interview Set' : 'Processed'}
                                                                </span>
                                                            )}
                                                        </td>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="text-center py-12">
                                        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500">No applications received yet.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}


                    {activeTab === 'profile' && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                            <div className="px-8 pb-8 relative">
                                <div className="absolute -top-16 right-8 flex flex-col items-end">
                                    <div className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-gray-400 text-4xl font-bold shadow-md overflow-hidden relative group">
                                        {profileForm.photo_url ? (
                                            <img src={profileForm.photo_url} alt="Profile" className="h-full w-full object-cover" />
                                        ) : (
                                            <span>{user?.company_name?.charAt(0)}</span>
                                        )}
                                        <label className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <span className="text-white text-xs font-medium">Change</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                                        </label>
                                    </div>
                                    {profileForm.photo_url && (
                                        <button
                                            type="button"
                                            onClick={() => setProfileForm({ ...profileForm, photo_url: '' })}
                                            className="mt-2 text-xs text-red-600 hover:text-red-800 bg-red-50 px-2 py-1 rounded shadow-sm"
                                        >
                                            Remove Photo
                                        </button>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Profile Details</h3>
                                        {!isEditing && (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                                            >
                                                Edit Profile
                                            </button>
                                        )}
                                    </div>
                                    <form onSubmit={handleProfileUpdate} className="space-y-6 max-w-2xl">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company Name</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500"
                                                value={profileForm.company_name}
                                                onChange={(e) => setProfileForm({ ...profileForm, company_name: e.target.value })}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company Address</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500"
                                                value={profileForm.company_address}
                                                onChange={(e) => setProfileForm({ ...profileForm, company_address: e.target.value })}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Recruiter Name</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500"
                                                value={profileForm.name}
                                                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Designation</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500"
                                                value={profileForm.designation}
                                                onChange={(e) => setProfileForm({ ...profileForm, designation: e.target.value })}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        {isEditing && (
                                            <div className="flex gap-4">
                                                <button type="button" onClick={handleCancelEdit} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                                                    Cancel
                                                </button>
                                                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                                                    Save Changes
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Appearance</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Choose your preferred theme</p>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    {theme === 'dark' ? (
                                        <div className="flex items-center space-x-2">
                                            <Sun className="h-5 w-5 text-yellow-500" />
                                            <span className="text-gray-900 dark:text-white">Light Mode</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <Moon className="h-5 w-5 text-gray-700" />
                                            <span className="text-gray-900 dark:text-white">Dark Mode</span>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Interview Modal */}
                    {showInterviewModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Schedule Interview</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                            value={interviewData.date}
                                            onChange={(e) => setInterviewData({ ...interviewData, date: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Notes / Instructions</label>
                                        <textarea
                                            rows={3}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                            placeholder="e.g. Google Meet link..."
                                            value={interviewData.notes}
                                            onChange={(e) => setInterviewData({ ...interviewData, notes: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex justify-end gap-3 mt-4">
                                        <button
                                            onClick={() => setShowInterviewModal(false)}
                                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleScheduleInterview}
                                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                                        >
                                            Schedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick, colorClass }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void, colorClass: string }) => (
    <div
        onClick={onClick}
        className={`flex items-center px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 group ${active
            ? colorClass
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
            }`}
    >
        <span className={`mr-3 ${active ? 'text-inherit' : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'}`}>
            {icon}
        </span>
        <span className="font-medium">{label}</span>
    </div>
);

export default DashboardRecruiter;
