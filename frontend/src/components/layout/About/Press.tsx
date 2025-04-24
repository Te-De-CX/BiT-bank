
import PressCard from "./components/PressCard";

const Press = () => {

    const press = [
        {
            id: 1,
            text: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
            location: " India",
            date: "06/11/2024",
            description: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."
        },
        {
            id: 2,
            text: "YourBank Expands Branch Network with Opening of New Location in Chennai",
            location: "India",
            date: "12/11/2024",
            description: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community."
        },
        {
            id: 3,
            text: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
            location: "India",
            date: "24/12/2024",
            description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
        },
        {
            id: 4,
            text: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
            location: "India",
            date: "28/12/2024",
            description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        press releases
                    </h4>
                    <p>
                    Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
                    </p>
                </div>
                <div>
                    {
                        press.map( p => (
                            <div key={p.id} >
                                <PressCard text={p.text} location={p.location} description={p.description} date={p.date} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Press;