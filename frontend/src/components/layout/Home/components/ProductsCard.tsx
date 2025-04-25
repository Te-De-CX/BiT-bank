import { ReactNode } from "react";

interface ProductsCardProp {
    text: string,
    description: string,
    icon: ReactNode,
    isLast?: boolean, // Add this prop to conditionally render the line
}

const ProductsCard: React.FC<ProductsCardProp> = ({ text, description, icon, isLast = false }) => {
    return (
        <div className="group flex">
            <div className="flex flex-col items-start gap-4 p-6 w-full">
                <div className="text-2xl w-full text-primary items-center flex justify-center" >
                    <div>
                        <div className=" p-2 bg-[#CAFF33] rounded-full ">{icon}</div>
                    </div>
                </div>
                <h3 className="text-center w-full text-xl font-semibold">{text}</h3>
                <p >{description}</p>
            </div>
            {!isLast && <div className="h-full w-px bg-gray-200"></div>}
        </div>
    )
}

export default ProductsCard;