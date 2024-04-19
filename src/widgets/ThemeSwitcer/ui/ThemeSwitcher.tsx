import React, {FC, ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
    children?: ReactNode
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props: ThemeSwitcherProps) => {
    const {className, children, ...otherProps} = props
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.OUTLINE}
            className={classNames(cls['theme-switcher'], {}, [className])}
            onClick={toggleTheme}>
            {theme !== Theme.DARK ? <LightIcon/> : <DarkIcon/>}
        </Button>
    )
}