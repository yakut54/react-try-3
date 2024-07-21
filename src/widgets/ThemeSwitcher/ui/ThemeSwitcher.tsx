import React, { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonVariant.OUTLINE}
      className={classNames(cls['theme-switcher'], {}, [className])}
      onClick={toggleTheme}
    >
      {theme !== Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
