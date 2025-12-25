import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import PageTransition from "./PageTransition";
import FinalCTA from "./Components/FinalCTA/FinalCTA"

export const metadata = {
    title: "Happily Ever After | Weeding Demo",
    description: "Moody & luxe Las Vegas wedding website demo by BellScript Studios.",
};

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <FinalCTA />
        </>
    )
}