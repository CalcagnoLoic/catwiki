import { createContext, useState } from "react";

export const darkModeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    if (darkMode) {
        document.body.classList.remove("bg-slate-700");
    } else {
        document.body.classList.add("bg-slate-700");
    }

    return (
        <darkModeContext.Provider value={{ darkMode, toggleTheme }}>
            {props.children}
        </darkModeContext.Provider>
    );
};
