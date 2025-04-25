'use client'

import { useState } from "react";
import { FaMapMarkerAlt, FaBuilding, FaChevronDown } from "react-icons/fa"; 

interface JobsCardProp {
    position: string;
    location: string;
    department: string;
    about: string;
    qualifications: string[];
}

const JobsCard: React.FC<JobsCardProp> = ({ position, location, department, about, qualifications }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-6 transition-all duration-300">
            <div 
                className="p-6 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex justify-between items-start">
                    <div>
                        <h5 className="text-xl font-semibold text-gray-900 mb-2">{position}</h5>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-600" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBuilding className="text-blue-600" />
                                <span>{department}</span>
                            </div>
                        </div>
                    </div>
                    <FaChevronDown 
                        className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`}
                    />
                </div>
            </div>

            {isExpanded && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <div className="mb-6">
                        <h6 className="text-lg font-medium text-gray-900 mb-3">About This Job</h6>
                        <p className="text-gray-600">{about}</p>
                    </div>

                    <div className="mb-8">
                        <h6 className="text-lg font-medium text-gray-900 mb-3">Requirements & Qualifications</h6>
                        <ul className="space-y-2 text-gray-600">
                            {qualifications.map((value, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-blue-600 mr-2 mt-1">•</span>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Now
                    </button>
                </div>
            )}
        </div>
    );
};

const Jobs = () => {

        const jobs = [
            {
                id: 1,
                position: "Relationship Manager",
                location: " India",
                department: "Retail Banking",
                about: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
                qualifications: [ "Bachelor's degree in Business, Finance, or a related field", "Minimum of 3 years of experience in sales or relationship management in the banking industry", "Proven track record of meeting and exceeding sales targets", "Excellent interpersonal and negotiation skills", "Strong knowledge of banking products and services" ]
            },
            {
                id: 2,
                position: "Risk Analyst",
                location: "India",
                department: "Risk Management",
                about: "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.",
                qualifications: [ "Bachelor's degree in Finance, Economics, or a related field", "Minimum of 2 years of experience in risk management or a similar role", "Proficiency in risk analysis tools and techniques", "Strong analytical and problem-solving skills", "Knowledge of regulatory requirements and industry best practices" ]
            },
            {
                id: 3,
                position: "IT Security Specialist",
                location: "India",
                department: " Information Technology",
                about: "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
                qualifications: [ "Bachelor's degree in Computer Science, Information Security, or a related field", "Minimum of 5 years of experience in IT security or a similar role", "In-depth knowledge of network security protocols and technologies", "Familiarity with regulatory frameworks such as PCI DSS and GDPR", "Professional certifications such as CISSP or CISM are preferred" ]
            },
        ]

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h4 className="text-3xl font-bold mb-4">Job Openings</h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore exciting job openings at YourBank, where we value talent, innovation, 
                    and a passion for customer service. Join our team and be part of shaping a 
                    brighter future in the banking industry
                </p>
            </div>

            <div className="mb-8">
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All Departments</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Retail Banking</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Risk Management</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Information Technology</button>
                </div>

                {jobs.map(job => (
                    <JobsCard 
                        key={job.id}
                        position={job.position}
                        about={job.about}
                        location={job.location}
                        department={job.department}
                        qualifications={job.qualifications}
                    />
                ))}
            </div>
        </section>
    );
};

export default Jobs;