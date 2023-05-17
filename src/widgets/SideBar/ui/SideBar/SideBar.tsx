import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './sideBar.module.scss'
import { ThemeSwicher } from 'widgets/ThemeSwicher'
import { LangSwicher } from 'widgets/LangSwicher';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

    const [collapsed,setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
                <button onClick={onToggle}>toggle</button>
                <div className={classNames(cls.swichers)}>
                    <ThemeSwicher/>
                    <LangSwicher/>
                </div>
        </div>
    )
}