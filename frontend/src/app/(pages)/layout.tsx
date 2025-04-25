
import Nav from "@/components/UI/Navbar/Nav";
import Footer from "@/components/UI/Footer/Footer";

const PagesLayout = ({ children }: Readonly<{ children: React.ReactNode;}>) => {

    return (
        <>
            <Nav />
            <div className="px-20" >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default PagesLayout;