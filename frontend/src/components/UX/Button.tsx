
interface ButtonProp {
    text: string,
    style: string,
}

const Button: React.FC<ButtonProp> = ( { style, text } ) => {

    return (
        <>
            <button className={`${style}`} >{text}</button>
        </>
    )
}

export default Button;