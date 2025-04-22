
import Button from "@/components/UX/Button";
import TestimonialsCard from "./components/TestimonialsCard";

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            testimonial: "bit bank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
            name: "Sara T"

        },
        {
            id: 2,
            testimonial: "I recently started my own business, and bit bank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
            name: "John D"

        },
        {
            id: 3,
            testimonial: "I love the convenience of bit bank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
            name: "Emily G"

        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        Our Testimonials
                    </h4>
                    <div>
                        <p>Discover how bit bank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                        <div>
                            <Button style="py-2 px-3" text="for individuals" />
                            <p>for buisnesses</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        testimonials.map( value => (
                            <div key={value.id} >
                                <TestimonialsCard name={value.name} testimonial={value.testimonial} />
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <div>
                        <h3>
                            start your financial journey with Bit bank today!
                        </h3>
                        <p>
                        Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service
                        </p>
                    </div>
                    <Button style="py-2 px-3" text="open account" />
                </div>
            </section>
        </>
    )
}

export default Testimonials;