import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LogOut, User, Users, BookOpen, Briefcase, Settings, Search, Award, CheckCircle, FileText, Calendar, Upload, Menu, X, Sun, Moon, Bell, ExternalLink, Trash2 } from 'lucide-react';

import JobCard from '../components/JobCard';
import ResumeBuilder from '../components/ResumeBuilder';
import { getStudyModules } from '../data/studyModules';
import { useNavigate } from 'react-router-dom';
import landingLogo from '../assets/landing-logo.jpg';

const translations: any = {
    'English (India)': {
        nav: {
            jobs: 'Find Jobs',
            profile: 'My Profile',
            study: 'Study Corner',
            network: 'My Network',
            settings: 'Settings',
            resume: 'Resume Builder',
            signout: 'Sign Out'
        },
        headers: {
            jobs: 'Find Your Dream Job',
            applications: 'My Applications',
            profile: 'My Profile',
            network: 'My Network',
            study: 'Study Corner',
            settings: 'Settings'
        },
        jobs: {
            searchPlaceholder: 'Search jobs...',
            filterAll: 'All Levels',
            filterFresher: 'Freshers',
            filter1to5: '1-5 Years',
            filter5plus: '5+ Years',
            noJobs: 'No jobs found matching your criteria.'
        },
        profile: {
            save: 'Save Changes',
            edit: 'Edit Profile',
            cancel: 'Cancel',
            socialLinks: 'Social Links',
            aboutMe: 'About Me',
            bio: 'Bio',
            skills: 'Skills',
            experienceLevel: 'Experience Level',
            education: 'Education',
            certifications: 'Certifications',
            resume: 'Resume',
            add: '+ Add',
            remove: 'Remove',
            viewResume: 'View Resume',
            noBio: 'No bio added yet.',
            noSkills: 'No skills added',
            notSpecified: 'Not specified',
            noEducation: 'No education details added.',
            noCertifications: 'No certifications added.',
            noResume: 'No resume link provided.',
            noLinks: 'No links added',
            linkedinPlaceholder: 'LinkedIn URL',
            githubPlaceholder: 'GitHub URL',
            skillsPlaceholder: 'e.g. React, Node.js, Cybersecurity',
            degreePlaceholder: 'Degree',
            institutionPlaceholder: 'Institution',
            yearPlaceholder: 'Year',
            certNamePlaceholder: 'Certification Name',
            issuerPlaceholder: 'Issuer',
            resumeLinkPlaceholder: 'Link to Resume (GDrive, Dropbox, etc)'
        },
        settings: {
            appearance: 'Appearance',
            appearance_desc: 'Choose your preferred theme',
            light_mode: 'Light Mode',
            dark_mode: 'Dark Mode',
            regional: 'Regional Settings',
            language: 'Language',
            language_desc: 'Choose your preferred language',
            privacy: 'Privacy & Security',
            public_profile: 'Public Profile',
            public_profile_desc: 'Allow recruiters to find you.'
        },
        study: {
            learningModules: 'Learning Modules',
            yourProgress: 'Your Progress',
            courseCompletion: 'Course Completion',
            start: 'Start',
            review: 'Review',
            returnToModules: 'Return to Modules',
            filterAll: 'All Levels',
            filterBeginner: 'Beginner',
            filterIntermediate: 'Intermediate',
            filterGraduate: 'Graduate'
        },
        network: {
            invitations: 'Invitations',
            my_network: 'My Network',
            people_you_may_know: 'People you may know',
            connect: 'Connect',
            accept: 'Accept',
            ignore: 'Ignore',
            pending: 'Pending',
            message: 'Message',
            no_invitations: 'No pending invitations',
            no_connections: 'No connections yet',
            no_suggestions: 'No suggestions available',
            discover: 'Discover'
        },
        chat: {
            title: 'Chat',
            placeholder: 'Type a message...',
            send: 'Send',
            noMessages: 'No messages yet. Say hello!'
        }
    },
    'Hindi': {
        nav: {
            jobs: 'नौकरियां खोजें',
            profile: 'मेरी प्रोफ़ाइल',
            study: 'अध्ययन कोना',
            network: 'मेरा नेटवर्क',
            settings: 'सेटिंग्स',
            resume: 'रिज्यूमे बनाएं',
            signout: 'साइन आउट'
        },
        headers: {
            jobs: 'अपनी सपनों की नौकरी खोजें',
            applications: 'मेरे आवेदन',
            profile: 'मेरी प्रोफ़ाइल',
            network: 'मेरा नेटवर्क',
            study: 'अध्ययन कोना',
            settings: 'सेटिंग्स'
        },
        jobs: {
            searchPlaceholder: 'नौकरियां खोजें...',
            filterAll: 'सभी स्तर',
            filterFresher: 'फ्रेशर्स',
            filter1to5: '1-5 साल',
            filter5plus: '5+ साल',
            noJobs: 'आपके मानदंडों से मेल खाने वाली कोई नौकरी नहीं मिली।'
        },
        profile: {
            save: 'बदलाव सहेजें',
            edit: 'प्रोफ़ाइल संपादित करें',
            cancel: 'रद्द करें',
            socialLinks: 'सोशल लिंक्स',
            aboutMe: 'मेरे बारे में',
            bio: 'बायो',
            skills: 'कौशल',
            experienceLevel: 'अनुभव स्तर',
            education: 'शिक्षा',
            certifications: 'प्रमाणपत्र',
            resume: 'रिज्यूमे',
            add: '+ जोड़ें',
            remove: 'हटाएं',
            viewResume: 'रिज्यूमे देखें',
            noBio: 'अभी तक कोई बायो नहीं जोड़ा गया।',
            noSkills: 'कोई कौशल नहीं जोड़ा गया',
            notSpecified: 'निर्दिष्ट नहीं',
            noEducation: 'कोई शिक्षा विवरण नहीं जोड़ा गया।',
            noCertifications: 'कोई प्रमाणपत्र नहीं जोड़ा गया।',
            noResume: 'कोई रिज्यूमे लिंक नहीं दिया गया।',
            noLinks: 'कोई लिंक नहीं जोड़ा गया',
            linkedinPlaceholder: 'LinkedIn URL',
            githubPlaceholder: 'GitHub URL',
            skillsPlaceholder: 'जैसे React, Node.js, Cybersecurity',
            degreePlaceholder: 'डिग्री',
            institutionPlaceholder: 'संस्थान',
            yearPlaceholder: 'वर्ष',
            certNamePlaceholder: 'प्रमाणपत्र का नाम',
            issuerPlaceholder: 'जारीकर्ता',
            resumeLinkPlaceholder: 'रिज्यूमे लिंक (GDrive, Dropbox, आदि)'
        },
        settings: {
            appearance: 'रूप-रंग',
            appearance_desc: 'अपनी पसंदीदा थीम चुनें',
            light_mode: 'लाइट मोड',
            dark_mode: 'डार्क मोड',
            regional: 'क्षेत्रीय सेटिंग्स',
            language: 'भाषा',
            language_desc: 'अपनी पसंदीदा भाषा चुनें',
            privacy: 'गोपनीयता और सुरक्षा',
            public_profile: 'सार्वजनिक प्रोफ़ाइल',
            public_profile_desc: 'भर्तीकर्ताओं को आपको खोजने की अनुमति दें।'
        },
        study: {
            learningModules: 'अध्ययन मॉड्यूल',
            yourProgress: 'आपकी प्रगति',
            courseCompletion: 'पाठ्यक्रम पूरा होना',
            start: 'शुरू करें',
            review: 'समीक्षा करें',
            returnToModules: 'मॉड्यूल पर वापस जाएं',
            filterAll: 'सभी स्तर',
            filterBeginner: 'शुरुआती (Beginner)',
            filterIntermediate: 'मध्यम (Intermediate)',
            filterGraduate: 'स्नातक (Graduate)'
        },
        network: {
            invitations: 'निमंत्रण',
            my_network: 'मेरा नेटवर्क',
            people_you_may_know: 'जिन्हें आप जानते होंगे',
            connect: 'कनेक्ट करें',
            accept: 'स्वीकार करें',
            ignore: 'अनदेखा करें',
            pending: 'लंबित',
            message: 'संदेश',
            no_invitations: 'कोई लंबित निमंत्रण नहीं',
            no_connections: 'अभी तक कोई कनेक्शन नहीं',
            no_suggestions: 'कोई सुझाव उपलब्ध नहीं',
            discover: 'खोजें'
        },
        chat: {
            title: 'चैट',
            placeholder: 'एक संदेश लिखें...',
            send: 'भेजें',
            noMessages: 'अभी तक कोई संदेश नहीं। नमस्ते कहें!'
        }
    },
    'Kannada': {
        nav: {
            jobs: 'ಉದ್ಯೋಗಗಳನ್ನು ಹುಡುಕಿ',
            profile: 'ನನ್ನ ಪ್ರೊಫೈಲ್',
            study: 'ಅಧ್ಯಯನ ಮೂಲೆ',
            network: 'ನನ್ನ ನೆಟ್‌ವರ್ಕ್',
            settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
            resume: 'ರೆಸ್ಯೂಮ್ ರಚನೆಕಾರ',
            signout: 'ಸೈನ್ ಔಟ್'
        },
        headers: {
            jobs: 'ನಿಮ್ಮ ಕನಸಿನ ಉದ್ಯೋಗವನ್ನು ಹುಡುಕಿ',
            applications: 'ನನ್ನ ಅರ್ಜಿಗಳು',
            profile: 'ನನ್ನ ಪ್ರೊಫೈಲ್',
            network: 'ನನ್ನ ನೆಟ್‌ವರ್ಕ್',
            study: 'ಅಧ್ಯಯನ ಮೂಲೆ',
            settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು'
        },
        jobs: {
            searchPlaceholder: 'ಉದ್ಯೋಗಗಳನ್ನು ಹುಡುಕಿ...',
            filterAll: 'ಎಲ್ಲಾ ಹಂತಗಳು',
            filterFresher: 'ಫ್ರೆಶರ್ಸ್',
            filter1to5: '1-5 ವರ್ಷಗಳು',
            filter5plus: '5+ ವರ್ಷಗಳು',
            noJobs: 'ನಿಮ್ಮ ಮಾನದಂಡಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಉದ್ಯೋಗಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
        },
        profile: {
            save: 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
            edit: 'ಪ್ರೊಫೈಲ್ ಎಡಿಟ್ ಮಾಡಿ',
            cancel: 'ರದ್ದುಮಾಡಿ',
            socialLinks: 'ಸಾಮಾಜಿಕ ಲಿಂಕ್‌ಗಳು',
            aboutMe: 'ನನ್ನ ಬಗ್ಗೆ',
            bio: 'ಬಯೋ',
            skills: 'ಕೌಶಲ್ಯಗಳು',
            experienceLevel: 'ಅನುಭವದ ಮಟ್ಟ',
            education: 'ಶಿಕ್ಷಣ',
            certifications: 'ಪ್ರಮಾಣಪತ್ರಗಳು',
            resume: 'ರೆಸ್ಯೂಮ್',
            add: '+ ಸೇರಿಸಿ',
            remove: 'ತೆಗೆದುಹಾಕಿ',
            viewResume: 'ರೆಸ್ಯೂಮ್ ವೀಕ್ಷಿಸಿ',
            noBio: 'ಇನ್ನೂ ಯಾವುದೇ ಬಯೋ ಸೇರಿಸಲಾಗಿಲ್ಲ.',
            noSkills: 'ಯಾವುದೇ ಕೌಶಲ್ಯಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ',
            notSpecified: 'ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿಲ್ಲ',
            noEducation: 'ಯಾವುದೇ ಶಿಕ್ಷಣ ವಿವರಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ.',
            noCertifications: 'ಯಾವುದೇ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ.',
            noResume: 'ಯಾವುದೇ ರೆಸ್ಯೂಮ್ ಲಿಂಕ್ ಒದಗಿಸಲಾಗಿಲ್ಲ.',
            noLinks: 'ಯಾವುದೇ ಲಿಂಕ್‌ಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ',
            linkedinPlaceholder: 'LinkedIn URL',
            githubPlaceholder: 'GitHub URL',
            skillsPlaceholder: 'ಉದಾ. React, Node.js, Cybersecurity',
            degreePlaceholder: 'ಪದವಿ',
            institutionPlaceholder: 'ಸಂಸ್ಥೆ',
            yearPlaceholder: 'ವರ್ಷ',
            certNamePlaceholder: 'ಪ್ರಮಾಣಪತ್ರದ ಹೆಸರು',
            issuerPlaceholder: 'ನೀಡುವವರು',
            resumeLinkPlaceholder: 'ರೆಸ್ಯೂಮ್ ಲಿಂಕ್ (GDrive, Dropbox, ಇತ್ಯಾದಿ)'
        },
        settings: {
            appearance: 'ಗೋಚರತೆ',
            appearance_desc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಥೀಮ್ ಆಯ್ಕೆಮಾಡಿ',
            light_mode: 'ಲೈಟ್ ಮೋಡ್',
            dark_mode: 'ಡಾರ್ಕ್ ಮೋಡ್',
            regional: 'ಪ್ರಾದೇಶಿಕ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
            language: 'ಭಾಷೆ',
            language_desc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆರಿಸಿ',
            privacy: 'ಗೌಪ್ಯತೆ ಮತ್ತು ಭದ್ರತೆ',
            public_profile: 'ಸಾರ್ವಜನಿಕ ಪ್ರೊಫೈಲ್',
            public_profile_desc: 'ನೇಮಕಾತಿದಾರರಿಗೆ ನಿಮ್ಮನ್ನು ಹುಡುಕಲು ಅನುಮತಿಸಿ.'
        },
        study: {
            learningModules: 'ಕಲಿಕಾ ಮಾಡ್ಯೂಲ್‌ಗಳು',
            yourProgress: 'ನಿಮ್ಮ ಪ್ರಗತಿ',
            courseCompletion: 'ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ',
            start: 'ಪ್ರಾರಂಭಿಸಿ',
            review: 'ಪರಿಶೀಲಿಸಿ',
            returnToModules: 'ಮಾಡ್ಯೂಲ್‌ಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
            filterAll: 'ಎಲ್ಲಾ ಹಂತಗಳು',
            filterBeginner: 'ಆರಂಭಿಕ (Beginner)',
            filterIntermediate: 'ಮಧ್ಯಂತರ (Intermediate)',
            filterGraduate: 'ಪದವಿ (Graduate)'
        },
        network: {
            invitations: 'ಆಹ್ವಾನಗಳು',
            my_network: 'ನನ್ನ ನೆಟ್‌ವರ್ಕ್',
            people_you_may_know: 'ನಿಮಗೆ ತಿಳಿದಿರಬಹುದಾದ ಜನರು',
            connect: 'ಸಂಪರ್ಕಿಸಿ',
            accept: 'ಸ್ವೀಕರಿಸಿ',
            ignore: 'ನಿರ್ಲಕ್ಷಿಸಿ',
            pending: 'ಬಾಕಿ ಉಳಿದಿದೆ',
            message: 'ಸಂದೇಶ',
            no_invitations: 'ಯಾವುದೇ ಬಾಕಿ ಆಹ್ವಾನಗಳಿಲ್ಲ',
            no_connections: 'ಇನ್ನೂ ಯಾವುದೇ ಸಂಪರ್ಕಗಳಿಲ್ಲ',
            no_suggestions: 'ಯಾವುದೇ ಸಲಹೆಗಳಿಲ್ಲ',
            discover: 'ಅನ್ವೇಷಿಸಿ'
        },
        chat: {
            title: 'ಚಾಟ್',
            placeholder: 'ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
            send: 'ಕಳುಹಿಸಿ',
            noMessages: 'ಇನ್ನೂ ಯಾವುದೇ ಸಂದೇಶಗಳಿಲ್ಲ. ಹಲೋ ಹೇಳಿ!'
        }
    }
};


const DashboardUser = () => {
    const { user, logout, token } = useAuth();

    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('jobs');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [jobs, setJobs] = useState<any[]>([]);
    const [userApplications, setUserApplications] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('All');
    const [studyLevelFilter, setStudyLevelFilter] = useState('All');

    // Profile State
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        skills: '',
        experience_level: '',
        photo_url: '',
        social_links: { linkedin: '', github: '' },
        education: [] as any[],
        certifications: [] as any[],
        resume_url: ''
    });

    // ...

    // Initialize profile from user data
    useEffect(() => {
        if (user) {
            let parsedSocialLinks = { linkedin: '', github: '' };
            let parsedEducation = [];
            let parsedCertifications = [];

            try {
                if (user.social_links) parsedSocialLinks = JSON.parse(user.social_links);
            } catch (e) { console.error("Error parsing social links", e); }

            try {
                if (user.education) parsedEducation = JSON.parse(user.education);
            } catch (e) { console.error("Error parsing education", e); }

            try {
                if (user.certifications) parsedCertifications = JSON.parse(user.certifications);
            } catch (e) { console.error("Error parsing certifications", e); }

            setProfile({
                name: user.name || '',
                bio: user.bio || '',
                skills: user.skills || '',
                experience_level: user.experience_level || '',
                photo_url: user.photo_url || '',
                social_links: parsedSocialLinks,
                education: parsedEducation,
                certifications: parsedCertifications,
                resume_url: user.resume_url || ''
            });
            setLanguage(user.language || 'English (India)');
        }
    }, [user]);

    // ...


    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [language, setLanguage] = useState('English (India)');

    const studyModules = getStudyModules(language);

    // Translation helper function
    const t = (path: string) => {
        const keys = path.split('.');
        let value: any = translations[language as keyof typeof translations];
        for (const key of keys) {
            if (value && typeof value === 'object') {
                value = value[key];
            } else {
                return path; // Fallback to path if translation not found
            }
        }
        return value || path;
    };


    // Study State
    const [completedTopics, setCompletedTopics] = useState<number[]>([]);

    // Session Timer
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes session



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

    // Network State
    const [connections, setConnections] = useState<any[]>([]);
    const [exploreUsers, setExploreUsers] = useState<any[]>([]);

    // Chat State
    const [openChat, setOpenChat] = useState(false);
    const [chatUser, setChatUser] = useState<any>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [messageInput, setMessageInput] = useState('');



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
        } else if (activeTab === 'network') {
            fetchConnections();
            fetchExploreUsers();
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

    // Network Functions
    const fetchConnections = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/connections', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setConnections(data);
        } catch (error) {
            console.error('Failed to fetch connections', error);
        }
    };

    const fetchExploreUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users/explore', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setExploreUsers(data);
        } catch (error) {
            console.error('Failed to fetch explore users', error);
        }
    };

    const sendConnectionRequest = async (receiverId: number) => {
        try {
            const response = await fetch('http://localhost:3000/api/connections/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ receiver_id: receiverId })
            });
            if (response.ok) {
                alert('Connection request sent!');
                fetchConnections();
                fetchExploreUsers();
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to send request');
            }
        } catch (error) {
            console.error('Error sending connection request', error);
        }
    };

    const updateConnectionStatus = async (connectionId: number, status: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/connections/respond', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ connection_id: connectionId, status })
            });
            if (response.ok) {
                alert(`Connection ${status}!`);
                fetchConnections();
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to update connection');
            }
        } catch (error) {
            console.error('Error updating connection', error);
        }
    };

    // Chat Functions
    const fetchMessages = async (userId: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/messages/${userId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Failed to fetch messages', error);
        }
    };

    const handleSendMessage = async () => {
        if (!messageInput.trim() || !chatUser) return;

        try {
            const response = await fetch('http://localhost:3000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    receiver_id: chatUser.id,
                    content: messageInput
                })
            });

            if (response.ok) {
                setMessageInput('');
                fetchMessages(chatUser.id);
            } else {
                const data = await response.json();
                if (response.status === 403) {
                    alert('⚠️ You can only send messages to your connections. Please send a connection request first.');
                    setOpenChat(false);
                } else {
                    alert(data.error || 'Failed to send message');
                }
            }
        } catch (error) {
            console.error('Error sending message', error);
            alert('Network error. Please check your connection and try again.');
        }
    };

    const openChatWindow = (user: any) => {
        setChatUser(user);
        setOpenChat(true);
        fetchMessages(user.id);
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

    const handleAddEducation = () => {
        setProfile({
            ...profile,
            education: [...profile.education, { degree: '', institution: '', year: '' }]
        });
    };

    const handleRemoveEducation = (index: number) => {
        const newEducation = [...profile.education];
        newEducation.splice(index, 1);
        setProfile({ ...profile, education: newEducation });
    };

    const handleEducationChange = (index: number, field: string, value: string) => {
        const newEducation = [...profile.education];
        newEducation[index][field] = value;
        setProfile({ ...profile, education: newEducation });
    };

    const handleAddCertification = () => {
        setProfile({
            ...profile,
            certifications: [...profile.certifications, { name: '', issuer: '', year: '' }]
        });
    };

    const handleRemoveCertification = (index: number) => {
        const newCertifications = [...profile.certifications];
        newCertifications.splice(index, 1);
        setProfile({ ...profile, certifications: newCertifications });
    };

    const handleCertificationChange = (index: number, field: string, value: string) => {
        const newCertifications = [...profile.certifications];
        newCertifications[index][field] = value;
        setProfile({ ...profile, certifications: newCertifications });
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
                console.log('Language preference saved successfully!');
            } else {
                console.error('Failed response:', data);
                console.error(`Failed to save language preference: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error saving language', error);
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
                        <span>{t('nav.jobs')}</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('profile'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <User className="h-5 w-5" />
                        <span>{t('nav.profile')}</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('network'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'network'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <Users className="h-5 w-5" />
                        <span>{t('nav.network')}</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('study'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'study'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <BookOpen className="h-5 w-5" />
                        <span>{t('nav.study')}</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('resume'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'resume'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <FileText className="h-5 w-5" />
                        <span>{t('nav.resume')}</span>
                    </button>
                    <button
                        onClick={() => { setActiveTab('settings'); setActiveModuleId(null); }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings'
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                        <Settings className="h-5 w-5" />
                        <span>{t('nav.settings')}</span>
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

                                            {/* Social Links */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Social Links</label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        {isEditingProfile ? (
                                                            <input
                                                                type="text"
                                                                className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-3 py-2"
                                                                value={profile.social_links?.linkedin || ''}
                                                                onChange={(e) => setProfile({ ...profile, social_links: { ...profile.social_links, linkedin: e.target.value } })}
                                                                placeholder="LinkedIn URL"
                                                            />
                                                        ) : (
                                                            profile.social_links?.linkedin ? (
                                                                <a href={profile.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                                                                    <span className="mr-2">LinkedIn</span>
                                                                    <ExternalLink className="h-4 w-4" />
                                                                </a>
                                                            ) : <span className="text-gray-500 text-sm">No LinkedIn</span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {isEditingProfile ? (
                                                            <input
                                                                type="text"
                                                                className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-3 py-2"
                                                                value={profile.social_links?.github || ''}
                                                                onChange={(e) => setProfile({ ...profile, social_links: { ...profile.social_links, github: e.target.value } })}
                                                                placeholder="GitHub URL"
                                                            />
                                                        ) : (
                                                            profile.social_links?.github ? (
                                                                <a href={profile.social_links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                                                                    <span className="mr-2">GitHub</span>
                                                                    <ExternalLink className="h-4 w-4" />
                                                                </a>
                                                            ) : <span className="text-gray-500 text-sm">No GitHub</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Education */}
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Education</label>
                                                    {isEditingProfile && (
                                                        <button onClick={handleAddEducation} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                                            + Add Education
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="space-y-3">
                                                    {profile.education?.map((edu, index) => (
                                                        <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                                                            {isEditingProfile ? (
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Degree"
                                                                        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                        value={edu.degree}
                                                                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Institution"
                                                                        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                        value={edu.institution}
                                                                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                                                    />
                                                                    <div className="flex space-x-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Year"
                                                                            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                            value={edu.year}
                                                                            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                                                        />
                                                                        <button onClick={() => handleRemoveEducation(index)} className="text-red-500 hover:text-red-700">
                                                                            <Trash2 className="h-4 w-4" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p className="font-medium text-gray-900 dark:text-white">{edu.degree}</p>
                                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution} • {edu.year}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                    {!isEditingProfile && (!profile.education || profile.education.length === 0) && (
                                                        <p className="text-sm text-gray-500 italic">No education details added.</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Certifications */}
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Certifications</label>
                                                    {isEditingProfile && (
                                                        <button onClick={handleAddCertification} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                                            + Add Certification
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="space-y-3">
                                                    {profile.certifications?.map((cert, index) => (
                                                        <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                                                            {isEditingProfile ? (
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Certification Name"
                                                                        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                        value={cert.name}
                                                                        onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Issuer"
                                                                        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                        value={cert.issuer}
                                                                        onChange={(e) => handleCertificationChange(index, 'issuer', e.target.value)}
                                                                    />
                                                                    <div className="flex space-x-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Year"
                                                                            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
                                                                            value={cert.year}
                                                                            onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                                                                        />
                                                                        <button onClick={() => handleRemoveCertification(index)} className="text-red-500 hover:text-red-700">
                                                                            <Trash2 className="h-4 w-4" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                    {!isEditingProfile && (!profile.certifications || profile.certifications.length === 0) && (
                                                        <p className="text-sm text-gray-500 italic">No certifications added.</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Resume URL */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume Link</label>
                                                {isEditingProfile ? (
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm"
                                                        value={profile.resume_url || ''}
                                                        onChange={(e) => setProfile({ ...profile, resume_url: e.target.value })}
                                                        placeholder="https://drive.google.com/..."
                                                    />
                                                ) : (
                                                    profile.resume_url ? (
                                                        <a href={profile.resume_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center text-sm">
                                                            <FileText className="h-4 w-4 mr-2" />
                                                            View Resume
                                                        </a>
                                                    ) : <span className="text-gray-500 text-sm">No resume link provided.</span>
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('study.learningModules')}</h3>

                                        {/* Level Filter */}
                                        <div className="flex flex-wrap gap-2">
                                            {['All', 'Beginner', 'Intermediate', 'Graduate'].map((level) => (
                                                <button
                                                    key={level}
                                                    onClick={() => setStudyLevelFilter(level)}
                                                    className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${studyLevelFilter === level
                                                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
                                                        }`}
                                                >
                                                    {t(`study.filter${level}`)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {studyModules
                                            .filter(m => studyLevelFilter === 'All' || m.level === studyLevelFilter)
                                            .map(module => (
                                                <div key={module.id} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 group">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className={`p-3 rounded-2xl ${completedTopics.includes(module.id) ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                                            {completedTopics.includes(module.id) ? <CheckCircle className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                                                        </div>
                                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${module.level === 'Beginner' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' :
                                                            module.level === 'Intermediate' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20' :
                                                                'bg-rose-50 text-rose-600 dark:bg-rose-900/20'
                                                            }`}>
                                                            {module.level}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{module.title}</h4>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                                                            <Calendar className="h-3 w-3 mr-1" />
                                                            {module.duration}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() => startModule(module.id)}
                                                        className={`mt-6 w-full py-2.5 text-xs font-bold rounded-xl transition-all ${completedTopics.includes(module.id)
                                                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none'}`}
                                                    >
                                                        {completedTopics.includes(module.id) ? t('study.review') : t('study.start')}
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                    {studyModules.filter(m => studyLevelFilter === 'All' || m.level === studyLevelFilter).length === 0 && (
                                        <div className="py-20 text-center">
                                            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                            <p className="text-gray-500 dark:text-gray-400">No modules found for this level.</p>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-fit sticky top-6">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('study.yourProgress')}</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-600 dark:text-gray-400 font-medium">{t('study.courseCompletion')}</span>
                                                <span className="font-bold text-blue-600 dark:text-blue-400">{Math.round((completedTopics.length / studyModules.length) * 100)}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                                                <div
                                                    className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                                                    style={{ width: `${(completedTopics.length / studyModules.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{completedTopics.length}</p>
                                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Completed</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{studyModules.length - completedTopics.length}</p>
                                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Remaining</p>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none text-white overflow-hidden relative group">
                                            <Award className="absolute -right-4 -bottom-4 h-24 w-24 opacity-10 group-hover:scale-110 transition-transform duration-500" />
                                            <p className="text-sm leading-relaxed relative z-10">
                                                Complete all modules to unlock your <span className="font-bold underline decoration-yellow-400 decoration-2 underline-offset-4">Cyber Security Authenticator</span> certificate!
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
                                            {activeModule.videoUrl && (
                                                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-md">
                                                    <iframe
                                                        key={`${activeModule.id}-${activeModule.videoUrl}`}
                                                        src={`${activeModule.videoUrl}${activeModule.videoUrl.includes('?') ? '&' : '?'}enablejsapi=1&origin=${window.location.origin}`}
                                                        title="Course Video"
                                                        className="w-full h-[400px]"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}

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
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('settings.appearance')}</h3>
                                            <p className="text-gray-500 dark:text-gray-400">{t('settings.appearance_desc')}</p>
                                        </div>
                                        <button
                                            onClick={toggleTheme}
                                            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            {theme === 'dark' ? (
                                                <div className="flex items-center space-x-2">
                                                    <Sun className="h-5 w-5 text-yellow-500" />
                                                    <span className="text-gray-900 dark:text-white font-medium">{t('settings.light_mode')}</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <Moon className="h-5 w-5 text-gray-700" />
                                                    <span className="text-gray-900 dark:text-white font-medium">{t('settings.dark_mode')}</span>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-2 mb-4">{t('settings.regional')}</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">{t('settings.language')}</span>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.language_desc')}</p>
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
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-2 pt-4">{t('settings.privacy')}</h3>
                                    <div className="space-y-4 pt-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium text-gray-900 dark:text-white">{t('settings.public_profile')}</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.public_profile_desc')}</p>
                                            </div>
                                            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {activeTab === 'network' && (
                        <div className="max-w-5xl mx-auto">
                            {/* Invitations Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <Bell className="h-5 w-5 mr-2" />
                                    {t('network.invitations')}
                                </h3>
                                <div className="space-y-3">
                                    {connections.filter(conn => conn.status === 'pending' && conn.receiver_id === user?.id).length > 0 ? (
                                        connections.filter(conn => conn.status === 'pending' && conn.receiver_id === user?.id).map(conn => (
                                            <div key={conn.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold overflow-hidden">
                                                        {conn.sender_photo ? (
                                                            <img src={conn.sender_photo} alt={conn.sender_name} className="h-full w-full object-cover" />
                                                        ) : (
                                                            conn.sender_name.charAt(0)
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-white">{conn.sender_name}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{conn.sender_headline || 'User'}</p>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => updateConnectionStatus(conn.id, 'accepted')}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                                                    >
                                                        {t('network.accept')}
                                                    </button>
                                                    <button
                                                        onClick={() => updateConnectionStatus(conn.id, 'rejected')}
                                                        className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 text-sm font-medium"
                                                    >
                                                        {t('network.ignore')}
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400 text-center py-8">{t('network.no_invitations')}</p>
                                    )}
                                </div>
                            </div>

                            {/* Discover Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t('network.discover')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {exploreUsers.length > 0 ? (
                                        exploreUsers.map(u => (
                                            <div key={u.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold mb-3 overflow-hidden">
                                                        {u.photo_url ? (
                                                            <img src={u.photo_url} alt={u.name} className="h-full w-full object-cover" />
                                                        ) : (
                                                            u.name.charAt(0)
                                                        )}
                                                    </div>
                                                    <p className="font-medium text-gray-900 dark:text-white mb-1">{u.name}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{u.headline || 'User'}</p>
                                                    <button
                                                        onClick={() => sendConnectionRequest(u.id)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium w-full"
                                                    >
                                                        {t('network.connect')}
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400 text-center py-8 col-span-full">{t('network.no_suggestions')}</p>
                                    )}
                                </div>
                            </div>

                            {/* My Network Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t('network.my_network')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {connections.filter(conn => conn.status === 'accepted').length > 0 ? (
                                        connections.filter(conn => conn.status === 'accepted').map(conn => {
                                            const otherUser = conn.sender_id === user?.id
                                                ? { id: conn.receiver_id, name: conn.receiver_name, headline: conn.receiver_headline, photo: conn.receiver_photo }
                                                : { id: conn.sender_id, name: conn.sender_name, headline: conn.sender_headline, photo: conn.sender_photo };

                                            return (
                                                <div key={conn.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold overflow-hidden">
                                                            {otherUser.photo ? (
                                                                <img src={otherUser.photo} alt={otherUser.name} className="h-full w-full object-cover" />
                                                            ) : (
                                                                otherUser.name.charAt(0)
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-medium text-gray-900 dark:text-white">{otherUser.name}</p>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{otherUser.headline || 'User'}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => openChatWindow(otherUser)}
                                                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                                                    >
                                                        {t('network.message')}
                                                    </button>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400 text-center py-8 col-span-full">{t('network.no_connections')}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </main >
            </div >

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

            {
                activeTab === 'resume' && (
                    <ResumeBuilder initialData={profile} />
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

            {/* Chat Modal */}
            {openChat && chatUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md flex flex-col h-[500px] overflow-hidden">
                        {/* Header */}
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-blue-600 text-white">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold overflow-hidden">
                                    {chatUser.photo ? (
                                        <img src={chatUser.photo} alt={chatUser.name} className="h-full w-full object-cover" />
                                    ) : (
                                        chatUser.name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{chatUser.name}</p>
                                    <p className="text-xs text-blue-100">{chatUser.headline || 'User'}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpenChat(false)}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <User className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <p className="text-sm">{t('chat.empty_state')}</p>
                                </div>
                            ) : (
                                messages.map((msg: any) => {
                                    const isMe = msg.sender_id === user?.id;
                                    return (
                                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-sm ${isMe
                                                ? 'bg-blue-600 text-white rounded-br-sm'
                                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-100 dark:border-gray-700'
                                                }`}>
                                                <p>{msg.content}</p>
                                                <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-blue-100' : 'text-gray-400'}`}>
                                                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="flex space-x-2 items-center"
                            >
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder={t('chat.placeholder')}
                                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!messageInput.trim()}
                                    className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105 active:scale-95 shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};



export default DashboardUser;
