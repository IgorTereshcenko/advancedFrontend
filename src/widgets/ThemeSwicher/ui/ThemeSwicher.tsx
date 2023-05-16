import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwicher.module.scss'
import { Theme, useTheme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/themeLight.svg';
import DarkIcon from 'shared/assets/icons/themeDark.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwicherProps {
    className?: string;
}

export const ThemeSwicher: FC<ThemeSwicherProps> = ({ className }) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button 
            className={classNames(cls.ThemeSwicher,{},[className])} 
            onClick={toggleTheme}
            theme='clear'>
                {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}      
        </Button>
    )
}