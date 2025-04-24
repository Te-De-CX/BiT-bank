
interface BenefitsCardProp {
    text: string,
    description: string,
}

const BenefitsCard: React.FC<BenefitsCardProp> = ({ text, description }) => {

    return (
        <>
            <div>
                <h5>
                    {text}
                </h5>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}

export default BenefitsCard;