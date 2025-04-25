import { ReactNode } from "react";

interface ProductsCardProp {
    text: string,
    description: string,
    icon: ReactNode,
    isLast?: boolean, // Add this prop to conditionally render the line
}

const ProductsCard: React.FC<ProductsCardProp> = ({ text, description, icon, isLast = false }) => {
    return (
        <div className="group">
            <div className="flex flex-col items-start gap-4 p-6">
                <div className="text-2xl text-primary">{icon}</div>
                <h3 className="text-xl font-semibold">{text}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            {!isLast && <div className="h-px w-full bg-gray-200"></div>}
        </div>
    )
}

export default ProductsCard;