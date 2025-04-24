
interface MVcardProp {
    name: string,
    description: string
}

const MVcard: React.FC<MVcardProp> = ( { name, description } ) => {

    return (
        <>
            <div>
                <div>
                    
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default MVcard;