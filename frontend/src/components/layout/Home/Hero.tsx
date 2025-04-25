
import Img from '../../../../public/images/home/group.svg'
import Button from "@/components/UX/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    return (
        <>
            <section className="flex py-5 gap-20 mt-32 " >
                <div className="w-8/12 flex flex-col gap-4 ml-5" >
                    <div className="backdrop-blur-3xl text-sm rounded-3xl border-2 border-white px-2 w-fit">
                        no llc required, no credit check.
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-4xl capitalize leading-14 font-semibold" >
                            welcome to bit bank <br /> empowering your <span className="text-[#CAFF33]" >financial <br /> journey</span>
                        </h3>
                        <p className="text-sm" >
                            at bit bank, our mission is to provide comprehensive banking solutions that empower individuals and buisnesses to achieve their financial goals. we are commited to delivering personalized and innovaitive services that prioritize our customers&apos; needs
                        </p>
                        <Link href="/dashboard" className='mt-5' >
                            <Button style="py-2 px-3" text= "open account" />
                        </Link>
                    </div>
                </div>
                <div className='relative bottom-10' >
                    <Image src={Img} alt='image' />
                </div>
            </section>
        </>
    )
}

export default Hero;