
import MVcard from "./components/M&Vcard";

const MV = () => {

    const mvs = [
        {
            id: 1,
            name: "Mission",
            description: "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams."
        },
        {
            id: 2,
            name: "Vision",
            description: "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        mission & vission
                    </h4>
                    <p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
                </div>
                <div>
                    {
                        mvs.map( mv => (
                            <div key={mv.id} >
                                <MVcard name={mv.name} description={mv.description} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default MV;