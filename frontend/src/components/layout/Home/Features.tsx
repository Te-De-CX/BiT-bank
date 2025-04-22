
import FeaturesCard from "./components/FeaturesCard";

const Features = () => {

    const features = [
        {
            id: 1,
            text: "24/7 Account Access",
            description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
        },
        {
            id: 2,
            text: "Mobile Banking App",
            description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
        },
        {
            id: 3,
            text: "Secure Transactions",
            description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
        },
        {
            id: 4,
            text: "Bill Pay and Transfers",
            description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
        },
    ]

    return (
        <>
            <section>
                <h3>our features</h3>
                <p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                <div>
                    <div>
                        <button>online banking</button>
                        <button>financial tools</button>
                        <button>customer support</button>
                    </div>
                    <div>
                        {
                            features.map( value => (
                                <div key={value.id} >
                                    <FeaturesCard text={value.text} description={value.description} />
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;