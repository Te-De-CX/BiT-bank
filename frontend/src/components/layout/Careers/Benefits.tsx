
import BenefitsCard from "./components/BenefitsCard";

const Benefits = () => {

    const benefits = [
        {
            id: 1,
            text: "Competitive Compensation",
            description: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
        },
        {
            id: 2,
            text: "Health and Wellness",
            description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
        },
        {
            id: 3,
            text: "Retirement Planning",
            description: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
        },
        {
            id: 4,
            text: "Work-Life Balance",
            description: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        our benefits
                    </h4>
                    <p>
                    At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
                    </p>
                </div>
                <div>
                    {
                        benefits.map( benefit => (
                            <div key={benefit.id} >
                                <BenefitsCard text={benefit.text} description={benefit.description} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Benefits;