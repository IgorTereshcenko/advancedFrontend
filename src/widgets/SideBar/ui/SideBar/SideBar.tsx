import { type FC, useState, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './sideBar.module.scss'
import { ThemeSwicher } from 'widgets/ThemeSwicher'
import { LangSwicher } from 'widgets/LangSwicher'
import { Button } from 'shared/ui/Button/Button'
import { SidebarItemList } from '../../model/types/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = memo(({ className }) => {

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
                {SidebarItemList.map(item =>
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                )}
            </div>

            <div className={classNames(cls.swichers)}>
                <ThemeSwicher/>
                <LangSwicher short={collapsed}/>
            </div>
        </div>
    )
})
