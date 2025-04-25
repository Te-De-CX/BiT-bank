'use client'


import Button from "@/components/UX/Button";
import { useState } from "react";
import TestimonialsCard from "./components/TestimonialsCard";
// import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            testimonial: "bit bank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
            name: "Sara T",
            role: "Individual Banking",
            rating: 5
        },
        {
            id: 2,
            testimonial: "I recently started my own business, and bit bank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
            name: "John D",
            role: "Small Business Owner",
            rating: 4
        },
        {
            id: 3,
            testimonial: "I love the convenience of bit bank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
            name: "Emily G",
            role: "Mobile Banking User",
            rating: 5
        },
    ];

    const [activeTab, setActiveTab] = useState('individuals');

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-12 md:mb-16">
                <div className="md:w-1/2">
                    <h4 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="text-blue-600">Testimonials</span>
                    </h4>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover how bit bank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.
                    </p>
                    <div className="flex gap-4">
                        <Button 
                            style="py-2 px-4 rounded-lg"
                            text="For Individuals"
                            onClick={() => setActiveTab('individuals')}
                            variant={activeTab === 'individuals' ? 'primary' : 'secondary'}
                        />
                        <Button 
                            style="py-2 px-4 rounded-lg"
                            text="For Businesses"
                            onClick={() => setActiveTab('businesses')}
                            variant={activeTab === 'businesses' ? 'primary' : 'secondary'}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((value) => (
                    <TestimonialsCard 
                        key={value.id}
                        name={value.name}
                        testimonial={value.testimonial}
                        role={value.role}
                        rating={value.rating}
                    />
                ))}
            </div>

            {/* Navigation arrows (optional) */}
            <div className="flex justify-center gap-4 mt-12">
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FiChevronLeft size={24} />
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FiChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;