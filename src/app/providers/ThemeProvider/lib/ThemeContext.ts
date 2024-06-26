/* eslint-disable no-unused-vars */
import { Context, createContext } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext: Context<ThemeContextProps> = createContext<ThemeContextProps>({})
export const LOCAL_STORAGE_THEME_KEY = 'theme'
