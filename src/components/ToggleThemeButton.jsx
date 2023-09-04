import { IconContext } from "react-icons";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { darkModeContext } from "../context/ThemeProvider";

export const ToggleThemeButton = () => {
    const { darkMode, toggleTheme } = useContext(darkModeContext);

    return (
        <div className="flex">
            {darkMode ? (
                ""
            ) : (
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                    <BsMoonStarsFill className="self-center" />
                </IconContext.Provider>
            )}
            <Switch onClick={toggleTheme} color="default" />
            {darkMode ? (
                <IconContext.Provider value={{ color: "orange", size: "2em" }}>
                    <BsFillSunFill className="self-center" />
                </IconContext.Provider>
            ) : (
                ""
            )}
        </div>
    );
};
