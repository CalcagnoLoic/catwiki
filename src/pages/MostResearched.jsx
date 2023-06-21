import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import {MostResearchedBreeds} from '../components/MostResearchedBreeds'

export const MostResearched = () => {
    return (
        <div className="mx-5 mt-5 md:mx-16 font-montserrat">
            <header className="mb-5">
                <NavBar />
            </header>

            <main>
                <MostResearchedBreeds />
            </main>

            <footer className="mt-5">
                <Footer />
            </footer>
        </div>
    )
}