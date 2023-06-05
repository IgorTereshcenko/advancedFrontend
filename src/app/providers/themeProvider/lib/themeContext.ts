import { createContext } from 'react'

export enum Theme {
    NORMAL = 'app_light_theme',
    DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const themeContex = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
