import { FaPiggyBank, FaHome, FaGraduationCap, FaWallet } from "react-icons/fa";
import { FiTrendingUp, FiDollarSign, FiPieChart } from "react-icons/fi";

const Cases = () => {
    const cases = [
        { id: 1, text: "Managing personal finances", icon: <FaWallet className="text-2xl" /> },
        { id: 2, text: "Saving for the Future", icon: <FaPiggyBank className="text-2xl" /> },
        { id: 3, text: "Homeownership", icon: <FaHome className="text-2xl" /> },
        { id: 4, text: "Education Funding", icon: <FaGraduationCap className="text-2xl" /> },
    ];

    const percent = [
        { id: 1, numb: 78, text: "Secure Retirement Planning", icon: <FiPieChart className="text-xl" /> },
        { id: 2, numb: 63, text: "Manageable Debt Consolidation", icon: <FiDollarSign className="text-xl" /> },
        { id: 3, numb: 91, text: "Reducing financial burdens", icon: <FiTrendingUp className="text-xl" /> }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h4 className="text-3xl font-bold mb-4">Use Cases</h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    At bit bank, we cater to the diverse needs of individuals and businesses alike, 
                    offering a wide range of financial solutions
                </p>
            </div>

            {/* Individuals Section */}
            <div className="flex flex-col lg:flex-row gap-12 mb-20">
                <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                    {cases.map(value => (
                        <div key={value.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="text-blue-600 mb-3">{value.icon}</div>
                            <h3 className="font-medium text-lg">{value.text}</h3>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/2">
                    <h5 className="text-2xl font-semibold mb-4">For Individuals</h5>
                    <p className="text-gray-600 mb-8">
                        For individuals, our mortgage services pave the way to homeownership, and our flexible 
                        personal loans provide vital support during various life milestones. We also prioritize 
                        retirement planning, ensuring a financially secure future for our customers.
                    </p>
                    <div className="space-y-6 mb-8">
                        {percent.map(value => (
                            <div key={value.id} className="flex items-start gap-4">
                                <div className="text-blue-600 mt-1">{value.icon}</div>
                                <div>
                                    <h4 className="text-3xl font-bold text-gray-800">{value.numb}%</h4>
                                    <p className="text-gray-600">{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Business Section */}
            <div className="flex flex-col lg:flex-row-reverse gap-12">
                <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                    {cases.map(value => (
                        <div key={value.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="text-blue-600 mb-3">{value.icon}</div>
                            <h3 className="font-medium text-lg">{value.text}</h3>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/2">
                    <h5 className="text-2xl font-semibold mb-4">For Business</h5>
                    <p className="text-gray-600 mb-8">
                        For businesses, we empower growth with working capital solutions that optimize cash flow, 
                        and our tailored financing options fuel business expansion. Whatever your financial 
                        aspirations, bit bank is committed to providing the right tools and support to achieve them.
                    </p>
                    <div className="space-y-6 mb-8">
                        {percent.map(value => (
                            <div key={value.id} className="flex items-start gap-4">
                                <div className="text-blue-600 mt-1">{value.icon}</div>
                                <div>
                                    <h4 className="text-3xl font-bold text-gray-800">{value.numb}%</h4>
                                    <p className="text-gray-600">{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cases;