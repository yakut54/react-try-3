import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

export interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const context = useContext(ThemeContext)

  const theme = context.theme ?? Theme.LIGHT
  const { setTheme } = context

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT
      ? Theme.DARK
      : Theme.LIGHT

    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
