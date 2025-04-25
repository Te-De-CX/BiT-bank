
import Img from '../../../../public/images/home/Container (1).svg'
import Button from "@/components/UX/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    return (
        <>
            <section className="flex py-5 gap-20 " >
                <div className="w-2/4 flex flex-col gap-4" >
                    <div className="backdrop-blur-3xl rounded-3xl border-2 border-white px-2 w-fit">
                        no llc required, no credit check.
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl capitalize font-semibold" >
                            welcome to bit bank <br /> empowering your <span className="text-[#CAFF33]" >financial <br /> journey</span>
                        </h3>
                        <p className="text-sm" >
                            at bit bank, our mission is to provide comprehensive banking solutions that empower individuals and buisnesses to achieve their financial goals. we are commited to delivering personalized and innovaitive services that prioritize our customers&apos; needs
                        </p>
                        <Link href="/dashboard" >
                            <Button style="py-2 px-3" text= "open account" />
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={Img} alt='image' />
                </div>
            </section>
        </>
    )
}

export default Hero;