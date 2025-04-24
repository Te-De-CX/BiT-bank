
import JobsCard from "./components/JobsCard";

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
        <>
            <section>
                <div>
                    <h4>job openings</h4>
                    <p>
                    Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry
                    </p>
                </div>
                <div>
                    {
                        jobs.map( job => (
                            <div key={job.id} >
                                <JobsCard position={job.position} about={job.about} location={job.location} department={job.department} qualifications={job.qualifications} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Jobs;