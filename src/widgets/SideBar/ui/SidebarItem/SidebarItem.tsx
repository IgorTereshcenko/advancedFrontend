import { memo, type FC } from 'react'
import cls from './SidebarItem.module.scss'
import { type SidebarItemType } from '../../model/types/items'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {

    const { t } = useTranslation()

    return (
        <AppLink
            theme='secondary'
            to={item.path}
            className = {classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})
