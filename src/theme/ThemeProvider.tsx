import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, themeContex } from "./themeContext";
import { Theme } from "./themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

const ThemeProvider:FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme: setTheme
    }), [theme])

    return (
        <themeContex.Provider value={defaultProps}>
            {children}
        </themeContex.Provider>
    )
}

export default ThemeProvider;