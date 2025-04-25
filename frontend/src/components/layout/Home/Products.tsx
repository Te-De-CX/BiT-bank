
import Button from "@/components/UX/Button";
import ProductsCard from "./components/ProductsCard";
import { FaBriefcase } from "react-icons/fa";

const Products = () => {
    const data = [
        {
            id: 1,
            text: "Checking Accounts",
            icon: <FaBriefcase />,
            description: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
        },
        {
            id: 2,
            text: "Savings Accounts",
            icon: <FaBriefcase />,
            description: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
        },
        {
            id: 3,
            text: "Loans and Mortgages",
            icon: <FaBriefcase />,
            description: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
        },
    ]


    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h4 className="headers">our <span className="text-[#CAFF33]" >products</span></h4>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className=" flex items-center">
                        <p className="text-sm text-gray-600 mb-6 w-8/12">
                            discover a range of comprehensive and customizable banking products of bit bank, 
                            designed to suit your unique financial needs and aspirations
                        </p>
                        <div className="flex gap-4">
                            <Button style="py-2 px-3" text="for individuals" />
                            <p className="flex items-center text-gray-600">for businesses</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex rounded-lg overflow-hidden">
                {data.map((value, index) => (
                    <ProductsCard 
                        key={value.id}
                        icon={value.icon} 
                        text={value.text} 
                        description={value.description}
                        isLast={index === data.length - 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default Products;