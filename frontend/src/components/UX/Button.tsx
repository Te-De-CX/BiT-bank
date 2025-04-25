
interface ButtonProp {
    text: string,
    style: string,
}

const Button: React.FC<ButtonProp> = ( { style, text } ) => {

    return (
        <>
            <button className={`${style} bg-[#CAFF33] text-black rounded-full text-sm px-6 py-3 font-medium`} >{text}</button>
        </>
    )
}

export default Button;