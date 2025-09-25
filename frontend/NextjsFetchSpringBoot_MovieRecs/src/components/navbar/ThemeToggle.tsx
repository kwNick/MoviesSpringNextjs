'use client';
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode state from localStorage on mount
    useEffect(() => {
        const root = document.documentElement;
        // root.classList.add("transition-colors", "duration-500", "ease-in-out");

        // Check localStorage for dark mode preference on mount
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("darkMode");
            if (storedTheme) {
                const theme = JSON.parse(storedTheme);
                setDarkMode(theme);
                root.classList.toggle("dark", theme);
                return;
            }
        }

        // Check System preference for dark mode
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkMode(true);
            root.classList.toggle("dark", true);
        }

        // 3. Watch for system preference changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("darkMode")) { // only auto-change if no saved choice
            setDarkMode(e.matches);
            root.classList.toggle("dark", e.matches);
        }
        };
        mediaQuery.addEventListener("change", handleChange);

        return () =>{ mediaQuery.removeEventListener("change", handleChange)};

    }, []);

    const toggleTheme = () => {
        const theme = !darkMode;
        setDarkMode(theme);
        localStorage.setItem("darkMode", JSON.stringify(theme));
        document.documentElement.classList.toggle("dark", theme);
    };

    return (
        <div className="absolute top-[3%] left-[20%] text-sm border border-colour p-1 rounded-xl cursor-pointer" onClick={toggleTheme}>
            {darkMode ? "Light" : "Dark"}
        </div>
    )
}
export default ThemeToggle