import React from 'react';
import { MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';

interface Job {
    id: number;
    title: string;
    company_name: string;
    location: string;
    salary_range: string;
    experience_level: string;
    description: string;
    requirements: string;
    created_at: string;
}

interface JobCardProps {
    job: Job;
    onApply: (jobId: number) => void;
    isApplied?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply, isApplied = false }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <h4 className="text-lg text-blue-600 font-medium">{job.company_name}</h4>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {job.experience_level}
                </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                </div>
                <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary_range}
                </div>
                <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Full-time
                </div>
                <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {new Date(job.created_at).toLocaleDateString()}
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-700 line-clamp-3">{job.description}</p>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={() => !isApplied && onApply(job.id)}
                    disabled={isApplied}
                    className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${isApplied
                            ? 'bg-green-100 text-green-700 cursor-not-allowed border border-green-200'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {isApplied ? 'Applied' : 'Apply Now'}
                </button>
            </div>
        </div>
    );
};

export default JobCard;
