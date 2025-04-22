
interface TestimonialsCardProp {
    name: string,
    testimonial: string
}

const TestimonialsCard: React.FC<TestimonialsCardProp> = ({ name, testimonial }) => {

    return (
        <>
            <div>
                <p>{testimonial}</p>
                <h5>{name}</h5>
            </div>
        </>
    )
}

export default TestimonialsCard;