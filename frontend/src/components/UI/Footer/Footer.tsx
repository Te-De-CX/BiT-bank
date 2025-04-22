
import { pages } from "@/lib/data/navs";
import Link from "next/link";
import { info } from "@/lib/data/navs";
import { links } from "@/lib/data/navs";

const Footer = () => {

    return (
        <>
            <footer>
                <div>
                    BiT
                </div>
                <ul>
                    {
                        pages.map( value => (
                            <li key={value.id} >
                                <Link href= {value.href} > {value.name}</Link>
                            </li>
                        ) )
                    }
                </ul>
                <div>
                    {
                        info.map( value => (
                            <div key={value.id} >
                                {value.text}
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <div>
                        {
                            links.map( value => (
                                <div key={value.id} >
                                    {value.name}
                                </div>
                            ) )
                        }
                    </div>
                    <div>
                        BiT All rights reserved
                    </div>
                    <div>
                        private policy | terms of services
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;