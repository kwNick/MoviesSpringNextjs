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
        <div className="absolute top-[1%] left-[18%] text-sm" onClick={toggleTheme}>
            {darkMode ? "Light" : "Dark"}
        </div>
    )
}
export default ThemeToggle