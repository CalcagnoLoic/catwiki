import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Details } from "../components/Details";

export const HomeDetails = () => {
    return (
        <div className="mx-5 mt-5 md:mx-16 font-montserrat">
            <header className="mb-5">
                <NavBar />
            </header>

            <main>
                <Details />
            </main>

            <footer className="mt-5">
                <Footer />
            </footer>
        </div>
    );
}