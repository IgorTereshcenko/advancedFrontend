import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './button.module.scss'

type ThemeButton = 'clear' | 'outline' | 'background' | 'background_inverted'

type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({ className, children, theme, square, size = 'size_m', ...otherProps }) => {

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}
            {...otherProps}>
            {children}
        </button>
    )
}
