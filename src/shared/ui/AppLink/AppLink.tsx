import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './appLink.module.scss'
import { type FC } from 'react'

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { children, className, to, theme = 'primary', ...otherProps } = props

    return (
        <Link
            to={to}
            className={classNames(cls.applink, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </Link>
    )
}
