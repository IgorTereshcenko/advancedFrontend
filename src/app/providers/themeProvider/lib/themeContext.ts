import { createContext } from 'react'

export enum Theme {
    NORMAL = 'normal',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const themeContex = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
