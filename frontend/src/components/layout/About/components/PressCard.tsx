
interface PressCardProp {
    text: string,
    location: string,
    date: string,
    description: string
}

const PressCard: React.FC<PressCardProp> = ({ text, location, date, description }) => {

    return (
        <>
            <div>
                <div>

                </div>
                <div>
                    <h5>{text}</h5>
                    <div>
                        <p>
                            location: {location}
                        </p>
                        <p>
                            date: {date}
                        </p>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PressCard;