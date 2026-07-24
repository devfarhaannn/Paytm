import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext =
    createContext<ThemeContextType | null>(null);

const STORAGE_KEY = "fabpay_theme";

export const ThemeProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [theme, setTheme] =
        useState<Theme>("light");

    useEffect(() => {
        const saved =
            localStorage.getItem(STORAGE_KEY) as Theme | null;

        if (saved === "dark") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {

        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );

        console.log(
            "HTML class:",
            document.documentElement.className
        );

        localStorage.setItem(
            STORAGE_KEY,
            theme
        );
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next =
                prev === "light"
                    ? "dark"
                    : "light";

            return next;
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context =
        useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider."
        );
    }

    return context;
};