import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LogOut, User, BookOpen, Briefcase, Settings, Search, Award, CheckCircle, FileText, Calendar, Upload, Menu, X, Sun, Moon, Bell } from 'lucide-react';


import JobCard from '../components/JobCard';
import { studyModules } from '../data/studyModules';
import { useNavigate } from 'react-router-dom';
import landingLogo from '../assets/landing-logo.jpg';

const DashboardUser = () => {
    const { user, logout, token, setup2FA, verify2FA, disable2FA } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('jobs');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [jobs, setJobs] = useState<any[]>([]);
    const [userApplications, setUserApplications] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('All');

    // Profile State
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        skills: '',
        experience_level: '',
        photo_url: ''
    });

    // ...

    // Initialize profile from user data
    useEffect(() => {
        if (user) {
            setProfile({
                name: user.name || '',
                bio: user.bio || '',
                skills: user.skills || '',
                experience_level: user.experience_level || '',
                photo_url: user.photo_url || ''
            });
            setLanguage(user.language || 'English (India)');
        }
    }, [user]);

    // ...


    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [language, setLanguage] = useState('English (India)');

    // Study State
    const [completedTopics, setCompletedTopics] = useState<number[]>([]);

    // Session Timer
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes session

    // 2FA State
    const [showTwoFAModal, setShowTwoFAModal] = useState(false);
    const [twoFASecret, setTwoFASecret] = useState<{ secret: string, imageUrl: string } | null>(null);
    const [twoFACode, setTwoFACode] = useState('');

    // Application State
    const [applicationJob, setApplicationJob] = useState<any | null>(null);
    const [appStep, setAppStep] = useState(1);
    const [appForm, setAppForm] = useState({
        email: '',
        full_name: '',
        contact_number: '',
        alt_contact_number: '',
        resume: null as File | null
    });
    const [interviewNotifications, setInterviewNotifications] = useState<any[]>([]);
    const [showInterviewAlert, setShowInterviewAlert] = useState(false);

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

    // Session Warning
    useEffect(() => {
        if (timeLeft === 120) {
            // Using setTimeout to ensure it doesn't block the render cycle immediately
            setTimeout(() => alert("Warning: Your session will expire in 2 minutes."), 0);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    useEffect(() => {
        if (activeTab === 'jobs') {
            fetchJobs();
            fetchUserApplications();
        } else if (activeTab === 'applications') {
            fetchUserApplications();
        }
    }, [activeTab]);

    // Check for interview notifications on load
    useEffect(() => {
        checkInterviewNotifications();
    }, []);

    const checkInterviewNotifications = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/user/applications', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const applications = await response.json();
                const scheduledInterviews = applications.filter(
                    (app: any) => app.status === 'interview_scheduled' && app.interview_date
                );
                if (scheduledInterviews.length > 0) {
                    setInterviewNotifications(scheduledInterviews);
                    setShowInterviewAlert(true);
                }
            }
        } catch (error) {
            console.error('Error checking interview notifications:', error);
        }
    };

    const fetchUserApplications = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/user/applications', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setUserApplications(data);
        } catch (error) {
            console.error('Failed to fetch applications', error);
        }
    };

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/jobs');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error('Failed to fetch jobs', error);
        }
    };

    const handleApplyClick = (job: any) => {
        setApplicationJob(job);
        setAppStep(1);
        setAppForm({
            email: user?.email || '',
            full_name: user?.name || '',
            contact_number: '',
            alt_contact_number: '',
            resume: null
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type !== 'application/pdf') {
                alert('Only PDF files are allowed.');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                alert('File size must be less than 2MB.');
                return;
            }
            setAppForm({ ...appForm, resume: file });
        }
    };

    const handleAppSubmit = async () => {
        if (!processData()) return;

        const formData = new FormData();
        formData.append('job_id', applicationJob.id);
        formData.append('email', appForm.email);
        formData.append('full_name', appForm.full_name);
        formData.append('contact_number', appForm.contact_number);
        formData.append('alt_contact_number', appForm.alt_contact_number);
        if (appForm.resume) {
            formData.append('resume', appForm.resume);
        }

        try {
            const response = await fetch('http://localhost:3000/api/apply', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                    // Content-Type is set automatically with FormData
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                alert('Application submitted successfully!');
                setApplicationJob(null);
            } else {
                alert(data.error || 'Failed to apply');
            }
        } catch (error) {
            console.error('Error applying', error);
            alert('Failed to submit application');
        }
    };

    const processData = () => {
        if (!appForm.email || !appForm.full_name || !appForm.contact_number || !appForm.resume) {
            alert('Please fill all required fields and upload a resume.');
            return false;
        }
        return true;
    };

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company_name.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesExperience = true;
        if (experienceFilter !== 'All') {
            if (experienceFilter === 'Freshers') {
                matchesExperience = job.experience_level === 'Entry Level';
            } else if (experienceFilter === '1-5 Years') {
                matchesExperience = job.experience_level === 'Mid Level';
            } else if (experienceFilter === '5+ Years') {
                matchesExperience = job.experience_level === 'Senior Level';
            }
        }

        return matchesSearch && matchesExperience;
    });



    const completeTopic = (id: number) => {
        if (!completedTopics.includes(id)) {
            setCompletedTopics([...completedTopics, id]);
        }
    };





    const handleSaveProfile = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(profile)
            });

            if (response.ok) {
                // ideally we reload user from context or update context)
                // A quick hack is to reload the page or trigger a re-fetch in AuthContext. 
                // For now, we assume the user object won't update immediately in UI without reload/refetch
                // so we might want to manually update the displayed user name if we changed it.
                // But simply toggling off edit mode is a good first step.
                setIsEditingProfile(false);
                alert("Profile updated successfully!");
                // Trigger a generic reload to see changes if context doesn't auto-update? 
                // Better: The AuthContext should provide a way to refreshUser() but for now we skip.
                window.location.reload();
            } else {
                alert("Failed to update profile");
            }
        } catch (error) {
            console.error("Error saving profile", error);
            alert("Error saving profile");
        }
    };

    // ... existing ...

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, photo_url: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLanguageChange = async (newLanguage: string) => {
        setLanguage(newLanguage);
        try {
            console.log('Attempting to save language:', newLanguage);
            console.log('Token:', token);

            const response = await fetch('http://localhost:3000/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ language: newLanguage })
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                alert('Language preference saved successfully!');
            } else {
                console.error('Failed response:', data);
                alert(`Failed to save language preference: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error saving language', error);
            alert('Error saving language preference');
        }
    };

    // ... existing ...



    const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
    const [quizTimer, setQuizTimer] = useState(300); // 5 minutes
    const [moduleAttempts, setModuleAttempts] = useState<Record<number, number>>({});

    const [quizState, setQuizState] = useState({
        isActive: false,
        currentQuestionIndex: 0,
        score: 0,
        showResults: false,
        answers: {} as Record<number, number>, // questionId -> selectedOptionIndex
        passed: false,
        shuffledQuestions: [] as any[]
    });

    // Quiz Timer Effect
    useEffect(() => {
        let interval: any;
        if (quizState.isActive && quizTimer > 0) {
            interval = setInterval(() => {
                setQuizTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        submitQuiz();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [quizState.isActive, quizTimer]);

    const activeModule = studyModules.find(m => m.id === activeModuleId);

    const handleEnable2FA = async () => {
        try {
            const data = await setup2FA();
            setTwoFASecret(data);
            setShowTwoFAModal(true);
        } catch (error) {
            console.error(error);
            alert("Failed to initiate 2FA setup");
        }
    };

    const submit2FAVerification = async () => {
        try {
            await verify2FA(twoFACode);
            setShowTwoFAModal(false);
            setTwoFASecret(null);
            setTwoFACode('');
            alert("Two-Factor Authentication enabled successfully!");
        } catch (error) {
            alert("Invalid verification code. Please try again.");
        }
    };



    const downloadCertificate = () => {
        try {
            // Create PDF in landscape mode (A4)
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            // Dimensions (A4 landscape is 297mm x 210mm)
            const width = doc.internal.pageSize.getWidth();
            const height = doc.internal.pageSize.getHeight();

            // Background
            doc.setFillColor(255, 255, 255);
            doc.rect(0, 0, width, height, 'F');

            // Ornamental Border (Double Border)
            // Outer Gold Border
            doc.setDrawColor(250, 204, 21); // yellow-500 #facc15
            doc.setLineWidth(1.5);
            doc.rect(10, 10, width - 20, height - 20);

            // Inner Gold Border
            doc.setLineWidth(0.5);
            doc.rect(12, 12, width - 24, height - 24);

            // Title: Certificate of Completion
            doc.setTextColor(31, 41, 55); // gray-800 #1f2937
            doc.setFont("times", "bold");
            doc.setFontSize(36);
            doc.text("Certificate of Completion", width / 2, 60, { align: "center" });

            // Subtitle: This certifies that
            doc.setTextColor(75, 85, 99); // gray-600 #4b5563
            doc.setFont("helvetica", "normal");
            doc.setFontSize(14);
            doc.text("This certifies that", width / 2, 85, { align: "center" });

            // User Name
            doc.setTextColor(30, 58, 138); // blue-900 #1e3a8a
            doc.setFont("helvetica", "bold");
            doc.setFontSize(30);
            doc.text(user?.name || "User Name", width / 2, 105, { align: "center" });

            // Underline for Name
            const nameWidth = doc.getTextWidth(user?.name || "User Name");
            doc.setDrawColor(209, 213, 219); // gray-300 #d1d5db
            doc.setLineWidth(0.5);
            doc.line((width / 2) - (nameWidth / 2) - 10, 108, (width / 2) + (nameWidth / 2) + 10, 108);

            // Text: has successfully completed the module
            doc.setTextColor(75, 85, 99); // gray-600
            doc.setFont("helvetica", "normal");
            doc.setFontSize(14);
            doc.text("has successfully completed the module", width / 2, 125, { align: "center" });

            // Module Title
            doc.setTextColor(31, 41, 55); // gray-800
            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.text(activeModule?.title || "Module Title", width / 2, 145, { align: "center" });

            // Footer Section
            const bottomY = 175;
            doc.setFontSize(12);
            doc.setTextColor(107, 114, 128); // gray-500

            // Date Signature Line
            const dateX = width / 2 - 60;
            doc.setDrawColor(156, 163, 175); // gray-400
            doc.line(dateX - 25, bottomY, dateX + 25, bottomY);
            doc.text("Date", dateX, bottomY + 6, { align: "center" });
            doc.text(new Date().toLocaleDateString(), dateX, bottomY - 5, { align: "center" });

            // Instructor Signature Line
            const instructorX = width / 2 + 60;
            doc.line(instructorX - 25, bottomY, instructorX + 25, bottomY);
            doc.text("Cybersparkz", instructorX, bottomY + 6, { align: "center" });
            doc.text("Instructor", instructorX, bottomY - 5, { align: "center" });

            // Save
            doc.save(`Cybersparkz_Certificate_${user?.name || 'User'}.pdf`);

        } catch (err: any) {
            console.error("Error generating PDF:", err);
            alert(`Failed to generate certificate: ${err.message || 'Unknown error'}`);
        }
    };

    const startModule = (id: number) => {
        setActiveModuleId(id);
        setQuizState({ ...quizState, isActive: false, showResults: false });
    };

    const startQuiz = () => {
        if (!activeModule) return;

        const currentAttempts = moduleAttempts[activeModule.id] || 0;
        if (currentAttempts >= 3) {
            alert("You have reached the maximum number of attempts (3) for this module.");
            return;
        }

        // Increment attempts
        setModuleAttempts(prev => ({
            ...prev,
            [activeModule.id]: currentAttempts + 1
        }));

        // Reset timer
        setQuizTimer(300); // 5 minutes

        // Simple shuffle for options could be added here, for now using static order from data but logic supports mapping
        setQuizState({
            isActive: true,
            currentQuestionIndex: 0,
            score: 0,
            showResults: false,
            answers: {},
            passed: false,
            shuffledQuestions: [...activeModule.quiz].sort(() => Math.random() - 0.5)
        });
    };

    const handleAnswer = (questionId: number, optionIndex: number) => {
        setQuizState(prev => ({
            ...prev,
            answers: { ...prev.answers, [questionId]: optionIndex }
        }));
    };

    const nextQuestion = () => {
        setQuizState(prev => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1
        }));
    };

    const prevQuestion = () => {
        if (quizState.currentQuestionIndex > 0) {
            setQuizState(prev => ({
                ...prev,
                currentQuestionIndex: prev.currentQuestionIndex - 1
            }));
        }
    };

    const submitQuiz = () => {
        if (!activeModule) return;

        let correctCount = 0;
        activeModule.quiz.forEach(q => {
            if (quizState.answers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        // 90% required to pass
        const passed = (correctCount / activeModule.quiz.length) >= 0.9;

        setQuizState(prev => ({
            ...prev,
            isActive: false, // Stop timer
            score: correctCount,
            showResults: true,
            passed
        }));

        if (passed) {
            completeTopic(activeModule.id);
        }
    };

    const retakeQuiz = () => {
        startQuiz();
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-transform duration-300 transform 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:relative md:translate-x-0
            `}>
                <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">

                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img src={landingLogo} alt="Logo" className="h-full w-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Cybersparkz</h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Job Seeker Portal</p>
                        </div>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => { setActiveTab('jobs'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'jobs'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <Briefcase className="h-5 w-5" />
                        <span>Find Jobs</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('profile'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <User className="h-5 w-5" />
                        <span>My Profile</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('study'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'study'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <BookOpen className="h-5 w-5" />
                        <span>Study Corner</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('settings'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                    </button>
                </nav>

                <div className="p-4 border-t dark:border-gray-700">
                    <div className="flex items-center space-x-3 mb-4 px-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold overflow-hidden">
                            {profile.photo_url ? (
                                <img src={profile.photo_url} alt="Profile" className="h-full w-full object-cover" />
                            ) : (
                                user?.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</p>
                        </div>
                    </div>
                    {/* Session timer styled */}
                    <div className="px-4 mb-2">
                        <div className="text-xs text-gray-400 dark:text-gray-500 text-center border-t border-gray-100 dark:border-gray-700 pt-2">
                            Session expires in: <span className={timeLeft < 300 ? 'text-red-500 font-bold' : 'font-medium'}>{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors text-sm"
                    >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 p-4 flex justify-between items-center z-10">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="mr-4 text-gray-500 md:hidden"
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {activeTab === 'jobs' && 'Find Your Dream Job'}
                            {activeTab === 'applications' && 'My Applications'}
                            {activeTab === 'profile' && 'My Profile'}
                            {activeTab === 'study' && 'Study Corner'}
                            {activeTab === 'settings' && 'Settings'}
                        </h2>
                    </div>
                    {activeTab === 'jobs' && (
                        <div className="hidden md:flex flex-1 max-w-md ml-8 relative space-x-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <select
                                className="border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={experienceFilter}
                                onChange={(e) => setExperienceFilter(e.target.value)}
                            >
                                <option value="All">All Levels</option>
                                <option value="Freshers">Freshers</option>
                                <option value="1-5 Years">1-5 Years</option>
                                <option value="5+ Years">5+ Years</option>
                            </select>
                        </div>
                    )}
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
                    {activeTab === 'jobs' && (
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredJobs.map(job => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    onApply={() => handleApplyClick(job)}
                                    isApplied={userApplications.some(app => app.job_id === job.id)}
                                />
                            ))}
                            {filteredJobs.length === 0 && (
                                <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
                                    No jobs found matching your criteria.
                                </div>
                            )}
                        </div>
                    )}

                    {
                        activeTab === 'applications' && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                                {userApplications.length > 0 ? (
                                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {userApplications.map(app => (
                                            <div key={app.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.job_title}</h3>
                                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{app.company_name}</p>
                                                        <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-500">
                                                            <Calendar className="h-3 w-3 mr-1" />
                                                            Applied on {new Date(app.applied_at).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                                    ${app.status === 'shortlisted' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                                                            app.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                                                                app.status === 'interview_scheduled' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                                                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                                                        {app.status.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                                    </span>
                                                </div>

                                                {app.status === 'interview_scheduled' && (
                                                    <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                                                        <h4 className="text-sm font-bold text-purple-800 dark:text-purple-300 flex items-center mb-2">
                                                            <Calendar className="h-4 w-4 mr-2" />
                                                            Interview Scheduled
                                                        </h4>
                                                        <div className="text-sm text-gray-700 dark:text-gray-300">
                                                            <p><span className="font-semibold">Date & Time:</span> {new Date(app.interview_date).toLocaleString()}</p>
                                                            {app.interview_notes && (
                                                                <p className="mt-1"><span className="font-semibold">Notes:</span> {app.interview_notes}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500 dark:text-gray-400">You haven't applied to any jobs yet.</p>
                                    </div>
                                )}
                            </div>
                        )
                    }

                    {
                        activeTab === 'profile' && !activeModuleId && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 max-w-3xl">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Left Column: Photo & Actions */}
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="relative group">
                                            <div className="h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-700 shadow-md flex items-center justify-center overflow-hidden">
                                                {profile.photo_url ? (
                                                    <img src={profile.photo_url} alt="Profile" className="h-full w-full object-cover" />
                                                ) : (
                                                    <User className="h-16 w-16 text-blue-500 dark:text-blue-300" />
                                                )}
                                            </div>

                                            {isEditingProfile && (
                                                <>
                                                    {/* Upload Overlay */}
                                                    <label className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                                                        <Settings className="h-8 w-8 text-white opacity-80" /> {/* Using Settings as placeholder for Camera if Camera not imported, checking imports... Wait, Camera is not imported. I'll use Upload or verify imports. Upload is imported. */}
                                                        {/* Re-checking imports: Upload is imported. Settings is imported. Let's use Upload. */}
                                                    </label>

                                                    {/* Delete Button */}
                                                    {profile.photo_url && (
                                                        <button
                                                            onClick={() => setProfile({ ...profile, photo_url: '' })}
                                                            className="absolute -top-1 -right-1 bg-red-500 text-white p-1.5 rounded-full shadow-sm hover:bg-red-600 transition-colors"
                                                            title="Remove Photo"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        <div className="w-full">
                                            <button
                                                onClick={isEditingProfile ? handleSaveProfile : () => setIsEditingProfile(true)}
                                                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${isEditingProfile
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600'
                                                    }`}
                                            >
                                                {isEditingProfile ? 'Save Changes' : 'Edit Profile'}
                                            </button>

                                            {isEditingProfile && (
                                                <button
                                                    onClick={() => setIsEditingProfile(false)}
                                                    className="w-full mt-2 py-2 px-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 font-medium text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Details */}
                                    <div className="flex-1 space-y-5">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-3 mb-4">Profile Details</h3>

                                        <div className="grid grid-cols-1 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                                                {isEditingProfile ? (
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-4 py-2"
                                                        value={profile.name}
                                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                                    />
                                                ) : (
                                                    <p className="text-lg font-medium text-gray-900 dark:text-white">{user?.name}</p>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Username</label>
                                                    <p className="text-base text-gray-900 dark:text-white">@{user?.username}</p>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Role</label>
                                                    <p className="text-base text-gray-900 dark:text-white capitalize">{user?.role}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Bio</label>
                                                {isEditingProfile ? (
                                                    <textarea
                                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                                        rows={3}
                                                        value={profile.bio}
                                                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                                        placeholder="Tell recruiters about yourself..."
                                                    />
                                                ) : (
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">{profile.bio || "No bio added yet."}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Skills</label>
                                                {isEditingProfile ? (
                                                    <input
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                                        value={profile.skills}
                                                        onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                                                        placeholder="React, Node.js, Python..."
                                                    />
                                                ) : (
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {profile.skills ? profile.skills.split(',').map((skill, i) => (
                                                            <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                                                {skill.trim()}
                                                            </span>
                                                        )) : <span className="text-gray-500 text-sm">No skills listed.</span>}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab === 'study' && !activeModuleId && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Learning Modules</h3>
                                    {studyModules.map(module => (
                                        <div key={module.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center transition-all hover:shadow-md">
                                            <div className="flex items-center space-x-3">
                                                <div className={`p-2 rounded-lg ${completedTopics.includes(module.id) ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                                    {completedTopics.includes(module.id) ? <CheckCircle className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 dark:text-white">{module.title}</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{module.duration}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => startModule(module.id)}
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${completedTopics.includes(module.id)
                                                    ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                            >
                                                {completedTopics.includes(module.id) ? 'Review' : 'Start'}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Award className="h-6 w-6 text-yellow-500" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Progress</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600 dark:text-gray-400">Course Completion</span>
                                                <span className="font-bold text-gray-900 dark:text-white">{Math.round((completedTopics.length / studyModules.length) * 100)}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                                <div
                                                    className="bg-green-500 h-2.5 rounded-full transition-all duration-1000"
                                                    style={{ width: `${(completedTopics.length / studyModules.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                            <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                                                Complete all modules to unlock your <span className="font-bold">Cyber Security Authenticator</span> certificate!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* Active Module View */}
                    {
                        activeTab === 'study' && activeModule && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-[calc(100vh-8rem)]">
                                <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                                    <button onClick={() => setActiveModuleId(null)} className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                        &larr; Back to Modules
                                    </button>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{activeModule.title}</h3>
                                    <div className="w-20"></div> {/* Spacer */}
                                </div>

                                <div className="flex-1 overflow-auto p-6">
                                    {!quizState.isActive && !quizState.showResults && (
                                        <div className="space-y-8 max-w-4xl mx-auto">
                                            {/* Video Section */}
                                            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-md">
                                                <iframe
                                                    src={activeModule.videoUrl}
                                                    title="Course Video"
                                                    className="w-full h-[400px]"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>

                                            {/* Case Study */}
                                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Case Study: {activeModule.caseStudy.title}</h4>
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                                    {activeModule.caseStudy.scenario}
                                                </p>
                                            </div>

                                            <div className="flex justify-center pt-4 space-x-4">
                                                <button
                                                    onClick={startQuiz}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
                                                >
                                                    {completedTopics.includes(activeModule.id) ? "Retake Quiz" : "Take Quiz"}
                                                </button>

                                                {completedTopics.includes(activeModule.id) && (
                                                    <button
                                                        onClick={() => setQuizState({ ...quizState, showResults: true, passed: true, score: activeModule.quiz.length })}
                                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center space-x-2"
                                                    >
                                                        <Award className="h-5 w-5" />
                                                        <span>View Certificate</span>
                                                    </button>
                                                )}

                                                {/* Show attempts info if not passed yet */}
                                                {!completedTopics.includes(activeModule.id) && (
                                                    <div className="mt-2 text-sm text-gray-500 text-center w-full">
                                                        Attempts left: {3 - (moduleAttempts[activeModule.id] || 0)}/3
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {quizState.isActive && !quizState.showResults && (
                                        <div className="max-w-2xl mx-auto">
                                            <div className="mb-6 flex justify-between items-center bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                        Question {quizState.currentQuestionIndex + 1} of {activeModule.quiz.length}
                                                    </span>
                                                    <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">Attempt {(moduleAttempts[activeModule.id] || 0)} of 3</span>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-xl font-mono font-bold ${quizTimer < 30 ? 'text-red-600 animate-pulse' : 'text-gray-700 dark:text-gray-300'}`}>
                                                        {Math.floor(quizTimer / 60)}:{(quizTimer % 60).toString().padStart(2, '0')}
                                                    </span>
                                                    <span className="text-xs text-gray-400">90% required to pass</span>
                                                </div>
                                            </div>

                                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg card">
                                                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                                                    {quizState.shuffledQuestions[quizState.currentQuestionIndex]?.text}
                                                </h4>

                                                <div className="space-y-3">
                                                    {quizState.shuffledQuestions[quizState.currentQuestionIndex]?.options.map((option: string, idx: number) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleAnswer(quizState.shuffledQuestions[quizState.currentQuestionIndex].id, idx)}
                                                            className={`w-full text-left p-4 rounded-lg border transition-all ${quizState.answers[quizState.shuffledQuestions[quizState.currentQuestionIndex].id] === idx
                                                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-1 ring-blue-500'
                                                                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                                }`}
                                                        >
                                                            <span className="text-gray-700 dark:text-gray-300">{option}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-8 flex justify-between">
                                                <button
                                                    onClick={prevQuestion}
                                                    disabled={quizState.currentQuestionIndex === 0}
                                                    className={`px-6 py-2 rounded-lg transition-colors ${quizState.currentQuestionIndex === 0
                                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                                                        }`}
                                                >
                                                    Previous
                                                </button>

                                                {quizState.currentQuestionIndex < activeModule.quiz.length - 1 ? (
                                                    <button
                                                        onClick={nextQuestion}
                                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                                                    >
                                                        {quizState.answers[quizState.shuffledQuestions[quizState.currentQuestionIndex].id] !== undefined ? 'Next Question' : 'Skip'}
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={submitQuiz}
                                                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                                                    >
                                                        Submit Quiz
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {quizState.showResults && (
                                        <div className="max-w-2xl mx-auto text-center space-y-8">
                                            <div className={`p-8 rounded-full h-32 w-32 mx-auto flex items-center justify-center ${quizState.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                                {quizState.passed ? <Award className="h-16 w-16" /> : <div className="text-4xl font-bold">{Math.round((quizState.score / activeModule.quiz.length) * 100)}%</div>}
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {quizState.passed ? 'Congratulations!' : 'Keep Learning!'}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {quizState.passed
                                                        ? `You passed the assessment with a score of ${Math.round((quizState.score / activeModule.quiz.length) * 100)}%.`
                                                        : `You scored ${Math.round((quizState.score / activeModule.quiz.length) * 100)}%. You need 90% to pass and earn your certificate.`
                                                    }
                                                </p>
                                                {!quizState.passed && (
                                                    <p className="text-sm font-bold text-red-500">
                                                        Attempts remaining: {3 - (moduleAttempts[activeModule.id] || 0)}
                                                    </p>
                                                )}
                                            </div>

                                            {quizState.passed ? (
                                                <div className="flex flex-col items-center space-y-4">
                                                    <div
                                                        className="relative overflow-hidden w-full max-w-3xl mx-auto"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            border: '4px double #facc15',
                                                            borderRadius: '12px',
                                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                                            padding: '2rem',
                                                            textAlign: 'center',
                                                            color: '#1f2937' // Explicit color to prevent oklch inheritance
                                                        }}
                                                    >
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 0,
                                                            padding: '1rem',
                                                            opacity: 0.1
                                                        }}>
                                                            <Award className="h-48 w-48" color="#facc15" />
                                                        </div>
                                                        <h2 style={{
                                                            fontSize: '1.875rem',
                                                            lineHeight: '2.25rem',
                                                            fontWeight: 700,
                                                            fontFamily: 'serif',
                                                            marginBottom: '1rem',
                                                            color: '#1f2937'
                                                        }}>Certificate of Completion</h2>
                                                        <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>This certifies that</p>
                                                        <p style={{
                                                            fontSize: '1.5rem',
                                                            lineHeight: '2rem',
                                                            fontWeight: 700,
                                                            display: 'inline-block',
                                                            paddingLeft: '2rem',
                                                            paddingRight: '2rem',
                                                            paddingBottom: '0.25rem',
                                                            marginBottom: '1.5rem',
                                                            color: '#1e3a8a',
                                                            borderBottom: '2px solid #d1d5db'
                                                        }}>{user?.name}</p>
                                                        <p style={{ marginBottom: '0.5rem', color: '#4b5563' }}>has successfully completed the module</p>
                                                        <h4 style={{
                                                            fontSize: '1.25rem', // text-xl
                                                            lineHeight: '1.75rem',
                                                            fontWeight: 700, // font-bold
                                                            marginBottom: '2rem',
                                                            color: '#1f2937'
                                                        }}>{activeModule.title}</h4>
                                                        <div style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            gap: '3rem',
                                                            fontSize: '0.875rem', // text-sm
                                                            lineHeight: '1.25rem',
                                                            color: '#6b7280'
                                                        }}>
                                                            <div>
                                                                <p style={{ paddingTop: '0.25rem', width: '8rem', borderTop: '1px solid #9ca3af' }}>Date</p>
                                                                <p>{new Date().toLocaleDateString()}</p>
                                                            </div>
                                                            <div>
                                                                <p style={{ paddingTop: '0.25rem', width: '8rem', borderTop: '1px solid #9ca3af' }}>Cybersparkz</p>
                                                                <p>Instructor</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={downloadCertificate}
                                                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                                    >
                                                        <Award className="h-4 w-4" />
                                                        <span>Download Certificate</span>
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={retakeQuiz}
                                                    disabled={(moduleAttempts[activeModule.id] || 0) >= 3}
                                                    className={`px-8 py-3 rounded-lg font-medium ${(moduleAttempts[activeModule.id] || 0) >= 3
                                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                                        }`}
                                                >
                                                    {(moduleAttempts[activeModule.id] || 0) >= 3 ? "Run out of attempts" : "Retake Quiz"}
                                                </button>
                                            )}

                                            <button
                                                onClick={() => setActiveModuleId(null)}
                                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white underline"
                                            >
                                                Return to Modules
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab === 'settings' && !activeModuleId && (
                            <div className="space-y-6 max-w-5xl mx-auto">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Appearance</h3>
                                            <p className="text-gray-500 dark:text-gray-400">Choose your preferred theme</p>
                                        </div>
                                        <button
                                            onClick={toggleTheme}
                                            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            {theme === 'dark' ? (
                                                <div className="flex items-center space-x-2">
                                                    <Sun className="h-5 w-5 text-yellow-500" />
                                                    <span className="text-gray-900 dark:text-white font-medium">Light Mode</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <Moon className="h-5 w-5 text-gray-700" />
                                                    <span className="text-gray-900 dark:text-white font-medium">Dark Mode</span>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-2 mb-4">Regional Settings</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">Language</span>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred language</p>
                                        </div>
                                        <select
                                            value={language}
                                            onChange={(e) => handleLanguageChange(e.target.value)}
                                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="English (India)">English (India)</option>
                                            <option value="Hindi">हिंदी (Hindi)</option>
                                            <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-2 pt-4">Privacy & Security</h3>
                                    <div className="space-y-4 pt-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium text-gray-900 dark:text-white">Public Profile</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Allow recruiters to find you.</p>
                                            </div>
                                            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {user?.is_two_factor_enabled ? "Your account is secured with 2FA." : "Add an extra layer of security."}
                                                </p>
                                            </div>
                                            {user?.is_two_factor_enabled ? (
                                                <button
                                                    onClick={async () => {
                                                        if (confirm("Are you sure you want to disable 2FA?")) {
                                                            try {
                                                                await disable2FA();
                                                                alert("2FA disabled successfully.");
                                                            } catch (err) {
                                                                alert("Failed to disable 2FA");
                                                            }
                                                        }
                                                    }}
                                                    className="text-sm text-red-600 dark:text-red-400 hover:underline"
                                                >
                                                    Disable
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleEnable2FA}
                                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Enable
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </main >
            </div >

            {/* 2FA Setup Modal */}
            {
                showTwoFAModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Setup 2-Factor Authentication</h3>

                            {twoFASecret && (
                                <div className="flex flex-col items-center space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                                        Scan this QR code with your authenticator app (e.g., Google Authenticator).
                                    </p>
                                    <div className="bg-white p-2 rounded-lg">
                                        <img src={twoFASecret.imageUrl} alt="2FA QR Code" className="w-48 h-48" />
                                    </div>
                                    <p className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                        Secret: {twoFASecret.secret}
                                    </p>

                                    <div className="w-full pt-4">
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Enter Verification Code</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 123456"
                                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                            value={twoFACode}
                                            onChange={e => setTwoFACode(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    onClick={() => setShowTwoFAModal(false)}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={submit2FAVerification}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Verify & Enable
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Application Modal */}
            {
                applicationJob && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Apply for {applicationJob.title}
                            </h3>

                            {appStep === 1 ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                            value={appForm.full_name}
                                            onChange={(e) => setAppForm({ ...appForm, full_name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                            value={appForm.email}
                                            onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number *</label>
                                        <input
                                            type="tel"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                            value={appForm.contact_number}
                                            onChange={(e) => setAppForm({ ...appForm, contact_number: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alternative Contact Number</label>
                                        <input
                                            type="tel"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                            value={appForm.alt_contact_number}
                                            onChange={(e) => setAppForm({ ...appForm, alt_contact_number: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume (PDF, max 2MB) *</label>
                                        <div className={`mt-1 flex justify-center px-4 py-2 border-2 border-dashed rounded-md transition-colors ${appForm.resume ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-gray-300 dark:border-gray-600 hover:border-blue-500'}`}>
                                            <div className="space-y-1 text-center w-full">
                                                {appForm.resume ? (
                                                    <div className="flex flex-col items-center justify-center py-1">
                                                        <FileText className="h-6 w-6 text-green-600 dark:text-green-400 mb-1" />
                                                        <p className="text-sm font-medium text-green-700 dark:text-green-300 truncate max-w-[200px]">
                                                            {appForm.resume.name}
                                                        </p>
                                                        <p className="text-xs text-green-600 dark:text-green-400/80 mb-1">
                                                            {(appForm.resume.size / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white dark:bg-gray-800 px-2 py-0.5 rounded-md text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-500 border border-green-200 dark:border-green-800 shadow-sm"
                                                        >
                                                            <span>Change File</span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                accept="application/pdf"
                                                                className="sr-only"
                                                                onChange={handleFileChange}
                                                            />
                                                        </label>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Upload className="mx-auto h-6 w-6 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                    accept="application/pdf"
                                                                    className="sr-only"
                                                                    onChange={handleFileChange}
                                                                />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500 dark:text-gray-500">
                                                            PDF up to 2MB
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Please review your details before submitting.</p>
                                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md space-y-2 mb-4">
                                        <p><strong>Full Name:</strong> {appForm.full_name}</p>
                                        <p><strong>Email:</strong> {appForm.email}</p>
                                        <p><strong>Contact:</strong> {appForm.contact_number}</p>
                                        <p><strong>Alt Contact:</strong> {appForm.alt_contact_number || 'N/A'}</p>
                                        <p><strong>Resume:</strong> {appForm.resume?.name}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    onClick={() => setApplicationJob(null)}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </button>

                                {appStep === 1 ? (
                                    <button
                                        onClick={() => {
                                            if (processData()) setAppStep(2);
                                        }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Preview
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => setAppStep(1)}
                                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={handleAppSubmit}
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                        >
                                            Submit Application
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Interview Notification Popup */}
            {showInterviewAlert && interviewNotifications.length > 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                <Bell className="h-6 w-6 text-blue-600 mr-2" />
                                Interview Scheduled!
                            </h3>
                            <button onClick={() => setShowInterviewAlert(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {interviewNotifications.map((interview, index) => (
                                <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <p className="font-semibold text-gray-900 dark:text-white mb-2">{interview.job_title}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                                        <strong>Company:</strong> {interview.company_name}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                                        <strong>Date & Time:</strong> {new Date(interview.interview_date).toLocaleString()}
                                    </p>
                                    {interview.interview_notes && (
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                                            <strong>Notes:</strong> {interview.interview_notes}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setShowInterviewAlert(false)}
                            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div >
    );
};



export default DashboardUser;
