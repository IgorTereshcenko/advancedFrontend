import { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, themeContex, Theme } from '../lib/themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <themeContex.Provider value={defaultProps}>
            {children}
        </themeContex.Provider>
    )
}

export default ThemeProvider
