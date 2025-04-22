
interface ProductsCardProp {
    text: string,
    description: string,
}

const ProductsCard: React.FC<ProductsCardProp> = ({ text, description }) => {

    return (
        <>
            <div>
                <h3>{text}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}

export default ProductsCard;