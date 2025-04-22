'use client'

interface ButtonProp {
    style: string,
    text: string
}

const Button : React.FC<ButtonProp> = ({ style, text }) => {

    return (
        <>
            <button className={`${style}`} >
                {text}
            </button>
        </>
    )
}

export default Button;