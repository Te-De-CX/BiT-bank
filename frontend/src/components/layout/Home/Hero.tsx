
import Button from "@/components/UX/Button";
import Link from "next/link";

const Hero = () => {

    return (
        <>
            <section>
                <div>
                    <div>
                        no llc required, no credit check.
                    </div>
                    <div>
                        <h3>
                            welcome to bit bank empowering your <span>financial journey</span>
                        </h3>
                        <p>
                            at bit bank, our mission is to provide comprehensive banking solutions that empower individuals and buisnesses to achieve their financial goals. we are commited to delivering personalized and innovaitive services that prioritize our customers&apos; needs
                        </p>
                        <Link href="/dashboard" >
                            <Button style="py-2 px-3" text= "open account" />
                        </Link>
                    </div>
                </div>
                <div>
                    Images
                </div>
            </section>
        </>
    )
}

export default Hero;