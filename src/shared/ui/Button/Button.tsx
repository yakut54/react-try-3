import {FC, ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        ...otherProps} = props

    return (
        <button
            className={classNames(cls['button'], {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}