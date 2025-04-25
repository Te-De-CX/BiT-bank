'use client'

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQcardProp {
    text: string,
    description: string,
    isOpen?: boolean,
    onToggle?: () => void
}

const FAQcard: React.FC<FAQcardProp> = ({ text, description, isOpen = false, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button 
                onClick={onToggle}
                className="flex justify-between items-center w-full text-left"
            >
                <h5 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                    {text}
                </h5>
                <span className="text-gray-500 ml-4">
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
            </button>
            {isOpen && (
                <p className="mt-4 text-gray-600">
                    {description}
                </p>
            )}
        </div>
    )
}

const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const faqs = [
        {
            id: 1,
            text: "How do I open an account with Bit Bank?",
            description: 'Opening an account with Bit Bank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
        },
        {
            id: 2,
            text: "What documents do I need to provide to apply for a loan?",
            description: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
        },
        {
            id: 3,
            text: "How can I access my accounts online?",
            description: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
        },
        {
            id: 4,
            text: "Are my transactions and personal information secure?",
            description: "At Bit Bank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."
        },
        // Additional FAQs that will be shown when "Load All" is clicked
        ...(showAll ? [
            {
                id: 5,
                text: "What are your customer support hours?",
                description: "Our customer support team is available 24/7 to assist you with any questions or concerns. You can reach us via phone, email, or live chat through our website or mobile app."
            },
            {
                id: 6,
                text: "How do I reset my online banking password?",
                description: "To reset your password, click on the 'Forgot Password' link on the login page. You'll be prompted to enter your email address or username associated with your account. Follow the instructions sent to your email to create a new password."
            },
            {
                id: 7,
                text: "What is the minimum balance required for accounts?",
                description: "The minimum balance requirement varies depending on the type of account you have. Basic checking accounts typically have a $25 minimum balance, while premium accounts may require higher minimums. Please refer to your account agreement or contact us for specific details about your account."
            }
        ] : [])
    ];

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-3">
                    <span className="text-gray-900">Frequently</span>{' '}
                    <span className="text-blue-600">Asked Questions</span>
                </h3>
                <p className="text-lg text-gray-600">
                    Still have any questions? Contact our team via support@bitbank.com
                </p>
            </div>

            <div className="mb-8">
                {faqs.map((value) => (
                    <FAQcard 
                        key={value.id}
                        text={value.text}
                        description={value.description}
                        isOpen={openId === value.id}
                        onToggle={() => toggleFAQ(value.id)}
                    />
                ))}
            </div>

            {!showAll && (
                <div className="text-center">
                    <button 
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Load All FAQ&apos;s
                    </button>
                </div>
            )}
        </section>
    )
}

export default FAQ;