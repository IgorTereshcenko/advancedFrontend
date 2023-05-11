import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContex } from "./themeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const {theme,setTheme} = useContext(themeContex);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme);
    }

    return {theme, toggleTheme};
}