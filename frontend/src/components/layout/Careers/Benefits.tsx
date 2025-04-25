import { FaDollarSign, FaHeartbeat, FaPiggyBank, FaBalanceScale } from "react-icons/fa";

interface BenefitsCardProp {
    text: string,
    description: string,
    icon?: React.ReactNode
}

const BenefitsCard: React.FC<BenefitsCardProp> = ({ text, description, icon }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100">
            <div className="text-blue-600 mb-4 text-3xl">
                {icon}
            </div>
            <h5 className="text-xl font-semibold mb-3 text-gray-900">{text}</h5>
            <p className="text-gray-600 flex-grow">{description}</p>
        </div>
    )
}

const Benefits = () => {
    const benefits = [
        {
            id: 1,
            text: "Competitive Compensation",
            description: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
            icon: <FaDollarSign />
        },
        {
            id: 2,
            text: "Health and Wellness",
            description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
            icon: <FaHeartbeat />
        },
        {
            id: 3,
            text: "Retirement Planning",
            description: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
            icon: <FaPiggyBank />
        },
        {
            id: 4,
            text: "Work-Life Balance",
            description: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
            icon: <FaBalanceScale />
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                    Our <span className="text-blue-600">Benefits</span>
                </h4>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    At YourBank, we value our employees and are dedicated to their well-being and success. 
                    We offer a comprehensive range of benefits designed to support their personal and professional growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit) => (
                    <BenefitsCard 
                        key={benefit.id}
                        text={benefit.text}
                        description={benefit.description}
                        icon={benefit.icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default Benefits;