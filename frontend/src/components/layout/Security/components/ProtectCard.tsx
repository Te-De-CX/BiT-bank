
interface ProtectCardProp {
    text: string,
    description: string,
}

const ProtectCard: React.FC<ProtectCardProp> = ({ text, description }) => {

    return (
        <>
            <div>
                <h5>{text}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}

export default ProtectCard;