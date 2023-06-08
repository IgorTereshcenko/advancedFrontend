import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './button.module.scss'

type ThemeButton = 'clear' | 'outline' | 'background' | 'background_inverted' | 'clear_inverted'
type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = 'size_m',
        disabled,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square, [cls.disabled]: disabled }, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    )
}
