import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { useContext } from "react";
import { darkModeContext } from "../context/ThemeProvider";

export const NavBar = () => {
    const { darkMode } = useContext(darkModeContext);
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <img
                src={CATWIKILOGO}
                alt="Catwiki, the website for cats"
                className={`${darkMode ? "" : "invert"}`}
            />
            <ToggleThemeButton />
        </div>
    );
};
