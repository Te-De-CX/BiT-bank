
import Button from "@/components/UX/Button";
import ProductsCard from "./components/ProductsCard";

const Products = () => {

    const data = [
        {
            id: 1,
            text: "Checking Accounts",
            description: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
        },
        {
            id: 2,
            text: "Savings Accounts",
            description: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
        },
        {
            id: 3,
            text: "Loans and Mortgages",
            description: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h4>
                        our products
                    </h4>
                    <div>
                        <p>discover a rango of comprehensive and customizable banking products of bit bank, designed to suit your unique financial needs and aspiraitons</p>
                        <div>
                            <Button style="py-2 px-3" text="for individuals" />
                            <p>for buisnesses</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        data.map( value => (
                            <div key={value.id} >
                                <ProductsCard text={value.text} description={value.description} />
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Products;