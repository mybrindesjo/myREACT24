import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Switch to {theme === "light" ? "dark" : "light"} theme
            </button>
        </div>
    );
}

export default ThemeSwitcher;