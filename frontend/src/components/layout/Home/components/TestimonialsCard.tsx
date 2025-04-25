import { FaQuoteLeft } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

interface TestimonialsCardProp {
    name: string;
    testimonial: string;
    role?: string;
    rating?: number;
}

const TestimonialsCard: React.FC<TestimonialsCardProp> = ({ 
    name, 
    testimonial, 
    role = "Customer",
    rating = 5 
}) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="text-blue-100 mb-4">
                <FaQuoteLeft size={24} />
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{testimonial}</p>
            
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <h5 className="font-semibold text-gray-900">{name}</h5>
                    <p className="text-sm text-gray-500">{role}</p>
                    <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                            <FiStar 
                                key={i}
                                size={16}
                                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;