'use client';
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode state from localStorage on mount
    useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkMode(true);
            document.body.classList.toggle("dark", true);
        }

        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("darkMode");
            if (storedTheme) {
                setDarkMode(JSON.parse(storedTheme));
                document.body.classList.toggle("dark", JSON.parse(storedTheme));
            }
        }
    }, []);

    const toggleTheme = () => {
        const theme = !darkMode;
        setDarkMode(theme);
        localStorage.setItem("darkMode", JSON.stringify(theme));
        document.body.classList.toggle("dark", theme);
    };

    return (
        <div className="absolute top-[2%] left-[18%] text-sm border-[1px] border-colour p-1 rounded-xl" onClick={toggleTheme}>
            {darkMode ? "Light" : "Dark"}
        </div>
    )
}
export default ThemeToggle