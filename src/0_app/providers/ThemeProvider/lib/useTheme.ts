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

  const getNextTheme = (currentTheme: Theme): Theme => {
    switch (currentTheme) {
    case Theme.LIGHT:
      return Theme.DARK
    case Theme.DARK:
      return Theme.ORANGE
    case Theme.ORANGE:
      return Theme.LIGHT
    default:
      return Theme.LIGHT
    }
  }

  const toggleTheme = () => {
    const newTheme = getNextTheme(theme)

    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
