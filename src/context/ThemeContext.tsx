import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined > (undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);   

    if (!context) {
        throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
    } 
    return context;
}