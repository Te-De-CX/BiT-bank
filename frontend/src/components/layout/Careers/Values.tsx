
import ValuesCard from "./components/ValuesCard";

const Values = () => {

    const values = [
        {
            id: 1,
            name: "integrity",
            about: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
        },
        {
            id: 2,
            name: "customer centricity",
            about: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
        },
        {
            id: 3,
            name: "collaboration",
            about: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
        },
        {
            id: 4,
            name: "Innovation",
            about: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        our values
                    </h4>
                    <p>
                    At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
                    </p>
                </div>
                <div>
                    {
                        values.map( value => (
                            <div key={value.id} >
                                <ValuesCard name= {value.name} about={value.about} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Values;