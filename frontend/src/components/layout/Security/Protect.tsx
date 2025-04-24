
import ProtectCard from "./components/ProtectCard";

const Protect = () => {

    const protect = [
        {
            id: 1,
            text: "Secure Online Banking Platform",
            description: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission."
        },
        {
            id: 2,
            text: "Multi-Factor Authentication",
            description: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account."
        },
        {
            id: 3,
            text: "Fraud Monitoring",
            description: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind."
        },
        {
            id: 4,
            text: "Secure Mobile Banking",
            description: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>How We Protect You</h4>
                    <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                </div>
                <div>
                    {
                        protect.map( value => (
                            <div key={value.id} >
                                <ProtectCard text={value.text} description={value.description} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Protect;