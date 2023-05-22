import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SectionAboutCat } from "../components/SectionAboutCat";

export const Home = () => {
    return (
        <div className="mx-5 mt-5 md:mx-16 font-montserrat">
            <header>
                <NavBar />
            </header>

            <main>
                <Hero />
                <SectionAboutCat />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};
