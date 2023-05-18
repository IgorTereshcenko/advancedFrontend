import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme='secondary' to='/'>Главная</AppLink>
                <AppLink theme='secondary' to='/about'>О сайте</AppLink>
            </div>
        </div>
    )
}
