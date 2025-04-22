
import Nav from "@/components/UI/Navbar/Nav";
import Footer from "@/components/UI/Footer/Footer";

const PagesLayout = ({ children }: Readonly<{ children: React.ReactNode;}>) => {

    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default PagesLayout;