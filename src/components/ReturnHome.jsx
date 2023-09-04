import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const ReturnHome = () => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <div className="flex flex-row gap-2 hover:italic hover:underline">
            <BsBoxArrowLeft
                className={`${
                    darkMode ? "text-dark" : "text-white"
                } self-center `}
            />
            <Link to="/" className={`${darkMode ? "text-dark" : "text-white"}`}>
                {" "}
                Return to the homepage
            </Link>
        </div>
    );
};
