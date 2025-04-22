
import FAQcard from "./components/FAQcard";

const FAQ = () => {

    const faqs = [
        {
            id: 1,
            text: "How do I open an account with Bit Bank?",
            description: 'Opening an account with bit Bank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
        },
        {
            id: 2,
            text: "What documents do I need to provide to apply for a loan?",
            description: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
        },
        {
            id: 3,
            text: "How can I access my accounts online?",
            description: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven&apos;t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
        },
        {
            id: 4,
            text: "Are my transactions and personal information secure?",
            description: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."
        },
    ]

    return (
        <>
            <section>
                <h3><span>frequently</span> asked questions</h3>
                <p>still you have any questions? contact our team via support@bitbank.com</p>
                <div>
                    {
                        faqs.map( value => (
                            <div key={value.id} >
                                <FAQcard  text={value.text} description={value.description} />
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <button>load all FAQ&apos;s</button>
                </div>
            </section>
        </>
    )
}

export default FAQ;