import { FaHandshake, FaUsers, FaLightbulb, FaUserShield } from "react-icons/fa";

interface ValuesCardProp {
    name: string;
    about: string;
    icon?: React.ReactNode;
}

const ValuesCard: React.FC<ValuesCardProp> = ({ name, about, icon }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100">
            <div className="text-blue-600 mb-4 text-3xl">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 capitalize">
                {name}
            </h3>
            <p className="text-gray-600 flex-grow">{about}</p>
        </div>
    );
};

const Values = () => {
    const values = [
        {
            id: 1,
            name: "integrity",
            about: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
            icon: <FaUserShield />
        },
        {
            id: 2,
            name: "customer centricity",
            about: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
            icon: <FaUsers />
        },
        {
            id: 3,
            name: "collaboration",
            about: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
            icon: <FaHandshake />
        },
        {
            id: 4,
            name: "Innovation",
            about: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
            icon: <FaLightbulb />
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gray-50">
            <div className="text-center mb-16">
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                    Our <span className="text-blue-600">Values</span>
                </h4>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    At YourBank, our values form the foundation of our organization and guide our actions. 
                    We believe in upholding the highest standards of integrity, delivering exceptional service, 
                    and embracing innovation. These values define our culture and shape the way we work together 
                    to achieve our goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                    <ValuesCard 
                        key={value.id}
                        name={value.name}
                        about={value.about}
                        icon={value.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Values;