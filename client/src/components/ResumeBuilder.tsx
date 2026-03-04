import { useState } from 'react';
import { Download, Plus, Trash2 } from 'lucide-react';

interface ResumeData {
    personal: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        linkedin: string;
    };
    summary: string;
    experience: {
        id: string;
        company: string;
        role: string;
        startDate: string;
        endDate: string;
        description: string;
    }[];
    education: {
        id: string;
        degree: string;
        institution: string;
        year: string;
        score: string;
    }[];
    skills: string;
    projects: {
        id: string;
        title: string;
        link: string;
        description: string;
    }[];
    certifications: {
        id: string;
        name: string;
        issuer: string;
        year: string;
    }[];
}

interface ResumeBuilderProps {
    initialData?: any;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export default function ResumeBuilder({ initialData }: ResumeBuilderProps) {
    const [data, setData] = useState<ResumeData>({
        personal: {
            fullName: initialData?.name || '',
            email: initialData?.email || '',
            phone: '',
            location: '',
            linkedin: initialData?.social_links?.linkedin || '',
        },
        summary: initialData?.bio || '',
        experience: [],
        education: initialData?.education?.map((e: any) => ({ ...e, id: generateId(), score: '' })) || [],
        skills: initialData?.skills || '',
        projects: [],
        certifications: initialData?.certifications?.map((c: any) => ({ ...c, id: generateId() })) || [],
    });

    const [activeSection, setActiveSection] = useState<keyof ResumeData>('personal');
    const [showPreview, setShowPreview] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    const updatePersonal = (field: keyof ResumeData['personal'], value: string) => {
        setData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
    };

    const addItem = (section: 'experience' | 'education' | 'projects' | 'certifications', emptyItem: any) => {
        setData(prev => ({
            ...prev,
            [section]: [...prev[section], { ...emptyItem, id: generateId() }]
        }));
    };

    const updateItem = (section: 'experience' | 'education' | 'projects' | 'certifications', id: string, field: string, value: string) => {
        setData(prev => ({
            ...prev,
            [section]: prev[section].map((item: any) => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const removeItem = (section: 'experience' | 'education' | 'projects' | 'certifications', id: string) => {
        setData(prev => ({
            ...prev,
            [section]: prev[section].filter((item: any) => item.id !== id)
        }));
    };

    const renderInput = (label: string, value: string, onChange: (val: string) => void, type = "text", placeholder = "") => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            {type === "textarea" ? (
                <textarea
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            )}
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row h-full">
            {/* Print Styles */}
            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    #resume-preview, #resume-preview * { visibility: visible; }
                    #resume-preview {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        background: white;
                        color: black;
                        padding: 20px;
                    }
                    /* Ensure exact ATS colors */
                    #resume-preview h1, #resume-preview h2, #resume-preview h3, #resume-preview p, #resume-preview span, #resume-preview div {
                        color: black !important;
                    }
                    /* Hide scrollbars for printing */
                    ::-webkit-scrollbar { display: none; }
                }
            `}</style>

            {/* Editor Area */}
            <div className="w-full lg:w-1/2 p-4 lg:p-6 overflow-y-auto border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hide-scrollbar hidden-print">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ATS Resume Builder</h2>

                    {!showPreview ? (
                        <button
                            onClick={() => setShowPreview(true)}
                            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            <span>Preview Resume</span>
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setShowPreview(false)}
                                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                <span>Edit Mode</span>
                            </button>
                            <button
                                onClick={handlePrint}
                                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download ATS PDF</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Section Navigation & Forms (Hidden in Preview Mode) */}
                {!showPreview ? (
                    <>
                        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 border-b dark:border-gray-700">
                            {(['personal', 'summary', 'experience', 'education', 'skills', 'projects', 'certifications'] as const).map((section) => (
                                <button
                                    key={section}
                                    onClick={() => setActiveSection(section)}
                                    className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors ${activeSection === section
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                                        }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Forms */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            {activeSection === 'personal' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {renderInput('Full Name', data.personal.fullName, (v) => updatePersonal('fullName', v))}
                                        {renderInput('Email', data.personal.email, (v) => updatePersonal('email', v), 'email')}
                                        {renderInput('Phone', data.personal.phone, (v) => updatePersonal('phone', v), 'tel')}
                                        {renderInput('Location (City, Country)', data.personal.location, (v) => updatePersonal('location', v))}
                                        {renderInput('LinkedIn URL', data.personal.linkedin, (v) => updatePersonal('linkedin', v))}
                                    </div>
                                </div>
                            )}

                            {activeSection === 'summary' && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
                                    {renderInput('Summary Objective', data.summary, (v) => setData({ ...data, summary: v }), 'textarea', 'A brief overview of your professional background and goals (ATS keywords are highly recommended here).')}
                                </div>
                            )}

                            {activeSection === 'skills' && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Skills</h3>
                                    {renderInput('Skills', data.skills, (v) => setData({ ...data, skills: v }), 'textarea', 'Comma separated list of skills (e.g., Python, React, Penetration Testing, Agile)')}
                                </div>
                            )}

                            {activeSection === 'experience' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Work Experience</h3>
                                        <button
                                            onClick={() => addItem('experience', { company: '', role: '', startDate: '', endDate: '', description: '' })}
                                            className="text-sm flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Plus className="w-4 h-4 mr-1" /> Add Experience
                                        </button>
                                    </div>
                                    {data.experience.map((exp) => (
                                        <div key={exp.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                                            <button onClick={() => removeItem('experience', exp.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {renderInput('Company', exp.company, (v) => updateItem('experience', exp.id, 'company', v))}
                                                {renderInput('Job Title', exp.role, (v) => updateItem('experience', exp.id, 'role', v))}
                                                {renderInput('Start Date', exp.startDate, (v) => updateItem('experience', exp.id, 'startDate', v))}
                                                {renderInput('End Date (or Present)', exp.endDate, (v) => updateItem('experience', exp.id, 'endDate', v))}
                                            </div>
                                            {renderInput('Description / Responsibilities (Use bullet points)', exp.description, (v) => updateItem('experience', exp.id, 'description', v), 'textarea')}
                                        </div>
                                    ))}
                                    {data.experience.length === 0 && <p className="text-gray-500 italic text-sm">No experience added yet.</p>}
                                </div>
                            )}

                            {activeSection === 'education' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                                        <button
                                            onClick={() => addItem('education', { degree: '', institution: '', year: '', score: '' })}
                                            className="text-sm flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Plus className="w-4 h-4 mr-1" /> Add Education
                                        </button>
                                    </div>
                                    {data.education.map((edu) => (
                                        <div key={edu.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                                            <button onClick={() => removeItem('education', edu.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {renderInput('Degree / Certificate', edu.degree, (v) => updateItem('education', edu.id, 'degree', v))}
                                                {renderInput('Institution / University', edu.institution, (v) => updateItem('education', edu.id, 'institution', v))}
                                                {renderInput('Passing Year', edu.year, (v) => updateItem('education', edu.id, 'year', v))}
                                                {renderInput('Score / GPA (Optional)', edu.score, (v) => updateItem('education', edu.id, 'score', v))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSection === 'projects' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h3>
                                        <button
                                            onClick={() => addItem('projects', { title: '', link: '', description: '' })}
                                            className="text-sm flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Plus className="w-4 h-4 mr-1" /> Add Project
                                        </button>
                                    </div>
                                    {data.projects.map((proj) => (
                                        <div key={proj.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                                            <button onClick={() => removeItem('projects', proj.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {renderInput('Project Title', proj.title, (v) => updateItem('projects', proj.id, 'title', v))}
                                                {renderInput('Project Link (Optional)', proj.link, (v) => updateItem('projects', proj.id, 'link', v))}
                                            </div>
                                            {renderInput('Description', proj.description, (v) => updateItem('projects', proj.id, 'description', v), 'textarea')}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSection === 'certifications' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h3>
                                        <button
                                            onClick={() => addItem('certifications', { name: '', issuer: '', year: '' })}
                                            className="text-sm flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Plus className="w-4 h-4 mr-1" /> Add Certification
                                        </button>
                                    </div>
                                    {data.certifications.map((cert) => (
                                        <div key={cert.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                                            <button onClick={() => removeItem('certifications', cert.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {renderInput('Certification Name', cert.name, (v) => updateItem('certifications', cert.id, 'name', v))}
                                                {renderInput('Issuing Organization', cert.issuer, (v) => updateItem('certifications', cert.id, 'issuer', v))}
                                                {renderInput('Year', cert.year, (v) => updateItem('certifications', cert.id, 'year', v))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">Ready to Download</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                            Review your resume in the live preview panel on the right. If everything looks good, click Download to generate your ATS-compliant PDF. Otherwise, return to Edit Mode to make changes.
                        </p>
                        <button
                            onClick={handlePrint}
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
                        >
                            <Download className="w-5 h-5" />
                            <span className="font-semibold text-lg">Download ATS PDF</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Live ATS Preview */}
            <div className="w-full lg:w-1/2 bg-gray-200 dark:bg-gray-800 p-4 lg:p-8 overflow-y-auto hidden-print hide-scrollbar flex justify-center">

                <div
                    id="resume-preview"
                    className="bg-white text-black p-8 md:p-10 shadow-2xl mx-auto"
                    style={{
                        width: '210mm',
                        minHeight: '297mm', // A4 aspect
                        fontFamily: '"Times New Roman", Times, serif', // ATS safe font
                        lineHeight: '1.4'
                    }}
                >
                    {/* Header: Personal Info */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-1 pb-1 border-b-2 border-black inline-block min-w-[200px]">
                            {data.personal.fullName || "John Doe"}
                        </h1>
                        <div className="text-sm mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
                            {data.personal.location && <span>{data.personal.location}</span>}
                            {data.personal.phone && <span>• {data.personal.phone}</span>}
                            {data.personal.email && <span>• {data.personal.email}</span>}
                        </div>
                        <div className="text-sm mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1">
                            {data.personal.linkedin && <span>LinkedIn: {data.personal.linkedin}</span>}
                        </div>
                    </div>

                    {/* Summary */}
                    {data.summary && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Professional Summary</h2>
                            <p className="text-sm text-justify whitespace-pre-wrap">{data.summary}</p>
                        </div>
                    )}

                    {/* Experience */}
                    {data.experience.length > 0 && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Professional Experience</h2>
                            <div className="space-y-4">
                                {data.experience.map(exp => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-base">{exp.role || "Role"}</h3>
                                            <span className="text-sm font-medium">{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}</span>
                                        </div>
                                        <div className="text-sm font-medium italic mb-1">{exp.company || "Company"}</div>
                                        {exp.description && (
                                            <div className="text-sm whitespace-pre-wrap ml-4 list-disc space-y-1">
                                                {/* Simple split by newline to render bullets if they typed them without actually using markdown */}
                                                {exp.description.split('\n').filter(p => p.trim()).map((part, i) => (
                                                    <div key={i} className="relative">
                                                        <span className="absolute -left-4">•</span>
                                                        {part.replace(/^[•\-\*]\s*/, '')}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {data.education.length > 0 && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Education</h2>
                            <div className="space-y-3">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-base">{edu.degree || "Degree"}</h3>
                                            <span className="text-sm font-medium">{edu.year}</span>
                                        </div>
                                        <div className="text-sm flex justify-between">
                                            <span className="italic">{edu.institution || "Institution"}</span>
                                            {edu.score && <span>Score: {edu.score}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Projects</h2>
                            <div className="space-y-4">
                                {data.projects.map(proj => (
                                    <div key={proj.id}>
                                        <div className="flex items-baseline space-x-2">
                                            <h3 className="font-bold text-base">{proj.title || "Project Title"}</h3>
                                            {proj.link && <span className="text-sm italic">| {proj.link}</span>}
                                        </div>
                                        {proj.description && (
                                            <div className="text-sm whitespace-pre-wrap ml-4 mt-1">
                                                {proj.description.split('\n').filter(p => p.trim()).map((part, i) => (
                                                    <div key={i} className="relative">
                                                        <span className="absolute -left-4">•</span>
                                                        {part.replace(/^[•\-\*]\s*/, '')}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skills */}
                    {data.skills && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Technical Skills</h2>
                            <p className="text-sm leading-relaxed">{data.skills}</p>
                        </div>
                    )}

                    {/* Certifications */}
                    {data.certifications.length > 0 && (
                        <div className="mb-5">
                            <h2 className="text-lg font-bold uppercase border-b border-black mb-2 tracking-wider">Certifications</h2>
                            <div className="space-y-2">
                                {data.certifications.map(cert => (
                                    <div key={cert.id} className="text-sm flex justify-between items-baseline">
                                        <div>
                                            <span className="font-bold">{cert.name || "Certification"}</span>
                                            {cert.issuer && <span className="italic"> — {cert.issuer}</span>}
                                        </div>
                                        <span>{cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
