'use client'

import { FaMobileAlt, FaShieldAlt, FaExchangeAlt, FaClock } from "react-icons/fa";
import React from "react";

interface FeaturesCardProp {
    text: string,
    description: string,
    icon?: React.ReactNode // Added icon prop
}

const FeaturesCard: React.FC<FeaturesCardProp> = ({ text, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="text-blue-600 mb-4 text-2xl">
                {icon}
            </div>
            <h5 className="text-xl font-semibold mb-3">{text}</h5>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

const Features = () => {
    const features = [
        {
            id: 1,
            text: "24/7 Account Access",
            description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
            icon: <FaClock />
        },
        {
            id: 2,
            text: "Mobile Banking App",
            description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
            icon: <FaMobileAlt />
        },
        {
            id: 3,
            text: "Secure Transactions",
            description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
            icon: <FaShieldAlt />
        },
        {
            id: 4,
            text: "Bill Pay and Transfers",
            description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
            icon: <FaExchangeAlt />
        },
    ]

    const [activeTab, setActiveTab] = React.useState('online banking');

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Our Features</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Experience a host of powerful features at YourBank, including seamless online banking, 
                    secure transactions, and personalized financial insights, all designed to enhance your banking experience
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tab Buttons */}
                <div className="lg:w-1/4">
                    <div className="flex lg:flex-col gap-2 mb-8 lg:mb-0 overflow-x-auto pb-2 lg:pb-0">
                        {['online banking', 'financial tools', 'customer support'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-3 rounded-lg whitespace-nowrap ${activeTab === tab 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="lg:w-3/4">
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((value) => (
                            <FeaturesCard 
                                key={value.id}
                                text={value.text}
                                description={value.description}
                                icon={value.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;