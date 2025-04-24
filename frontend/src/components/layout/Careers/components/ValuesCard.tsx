
interface ValuesCardProp  {
    name: string,
    about: string,
}

const ValuesCard: React.FC<ValuesCardProp> = ({ name, about }) => {

    return (
        <>
            <div>
                <h3>
                    {name}
                </h3>
                <p>
                    {about}
                </p>
            </div>
        </>
    )
}

export default ValuesCard;