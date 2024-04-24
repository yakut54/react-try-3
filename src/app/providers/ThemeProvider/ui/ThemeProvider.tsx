import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "../lib/ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;
export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps: ThemeContextProps = useMemo((): ThemeContextProps => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};