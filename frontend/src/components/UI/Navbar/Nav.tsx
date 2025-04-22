
import Link from "next/link";
import Button from "@/components/UX/Button";
import { pages } from "@/lib/data/navs";

const Nav = () => {

    return (
        <>
            <nav>
                <div>
                    <h5>Bit</h5>
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
                    <Link href="register" >sign up</Link>
                    <Link href="login" >
                        <Button style="py-1 px-2" text="sign in" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;