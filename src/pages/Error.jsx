import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Error404 } from "../components/Error404";

export const Error = () => {
    return (
        <div className="mx-5 mt-5 md:mx-16 font-montserrat">
            <header>
                <NavBar />
            </header>

            <main>
                <Error404 />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}