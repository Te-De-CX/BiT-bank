import { FaShieldAlt, FaMobileAlt, FaUserLock, FaSearchDollar } from "react-icons/fa";

interface ProtectCardProp {
    text: string;
    description: string;
    icon?: React.ReactNode;
}

const ProtectCard: React.FC<ProtectCardProp> = ({ text, description, icon }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 group">
            <div className="text-blue-600 mb-4 text-3xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h5 className="text-xl font-semibold mb-3 text-gray-900">{text}</h5>
            <p className="text-gray-600 flex-grow">{description}</p>
        </div>
    )
}

const Protect = () => {
    const protect = [
        {
            id: 1,
            text: "Secure Online Banking Platform",
            description: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
            icon: <FaShieldAlt />
        },
        {
            id: 2,
            text: "Multi-Factor Authentication",
            description: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
            icon: <FaUserLock />
        },
        {
            id: 3,
            text: "Fraud Monitoring",
            description: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
            icon: <FaSearchDollar />
        },
        {
            id: 4,
            text: "Secure Mobile Banking",
            description: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
            icon: <FaMobileAlt />
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-blue-50">
            <div className="text-center mb-16">
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                    How We <span className="text-blue-600">Protect You</span>
                </h4>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    At YourBank, we prioritize the security and confidentiality of your financial information. 
                    Our state-of-the-art encryption technology and stringent data protection measures ensure 
                    your assets and transactions are safeguarded at all times.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {protect.map((value) => (
                    <ProtectCard 
                        key={value.id}
                        text={value.text}
                        description={value.description}
                        icon={value.icon}
                    />
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Learn More About Security
                </button>
            </div>
        </section>
    )
}

export default Protect;