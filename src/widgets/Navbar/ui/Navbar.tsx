import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { type FC } from 'react'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                /
            </div>
        </div>
    )
}
