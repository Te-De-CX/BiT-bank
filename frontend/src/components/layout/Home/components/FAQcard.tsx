
interface FAQcardProp {
    text: string,
    description: string
}

const FAQcard: React.FC<FAQcardProp> = ({ text, description }) => {

    return (
        <>
            <div>
                <h5>{text}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}

export default FAQcard;