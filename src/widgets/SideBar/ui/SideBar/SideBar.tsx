import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './sideBar.module.scss'
import { ThemeSwicher } from 'widgets/ThemeSwicher'
import { LangSwicher } from 'widgets/LangSwicher'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutesPath } from 'app/providers/router/routerConfig/routerConfig'
import { useTranslation } from 'react-i18next'
import MainPageIcon from 'shared/assets/icons/mainPage.svg'
import AboutPageIcon from 'shared/assets/icons/aboutPage.svg'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
            data-testid = 'sidebar'>
            <Button
                data-testid = 'sidebar-toggle'
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme='background_inverted'
                square
                size='size_l'>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink
                    theme='secondary'
                    to={RoutesPath.MAIN}
                    className={cls.item}>
                    <MainPageIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    theme='secondary'
                    to={RoutesPath.ABOUT}
                    className={cls.item}>
                    <AboutPageIcon className={cls.icon}/>
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>

            <div className={classNames(cls.swichers)}>
                <ThemeSwicher/>
                <LangSwicher short={collapsed}/>
            </div>
        </div>
    )
}
