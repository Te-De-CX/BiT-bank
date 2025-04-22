
interface FeaturesCardProp {
    text: string,
    description: string
}

const FeaturesCard: React.FC<FeaturesCardProp> = ({ text, description }) => {

    return (
        <>
            <div>
                <h5>{text}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}

export default FeaturesCard;