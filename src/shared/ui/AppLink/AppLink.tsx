/* eslint-disable no-unused-vars */
import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    NORMAL = 'normal',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.NORMAL,
    ...otherProps
  } = props

  return (
    <Link
      className={classNames(cls['app-link'], {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
