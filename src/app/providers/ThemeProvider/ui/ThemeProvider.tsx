import {
  FC, ReactNode, useMemo, useState,
} from 'react'
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext'

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps: ThemeContextProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
