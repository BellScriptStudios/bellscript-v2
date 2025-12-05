import Header from "./Components/Header/Header";
import ChefLioraHero from "./Components/Hero/Hero";
import FeaturedRecipes from "./Components/FeaturedRecipes/FeaturedRecipes";
import VideoStrip from "./Components/VideoTutorials/VideoTutorials";
import AboutDemo from "./Components/About/About";
import BrandPartners from "./Components/BrandPartners/BrandPartners";
import NewsletterSignup from "./Components/Newsletter/Newsletter";
import ChefCTA from "./Components/ChefCTA/ChefCTA";
import FinalCTA from "./Components/FinalCTA/FinalCTA";
import Footer from "./Components/Footer/Footer";

export default function WebsiteInAWeekDemoPage() {
    return (
        <main>
            <Header />
            <ChefLioraHero />
            <FeaturedRecipes />
            <VideoStrip />
            <AboutDemo />
            <BrandPartners />
            <NewsletterSignup />
            <ChefCTA />
            <Footer />
            <FinalCTA />
        </main>
    )
}