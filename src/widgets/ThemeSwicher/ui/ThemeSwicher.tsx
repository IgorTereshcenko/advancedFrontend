import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/themeLight.svg'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwicherProps {
    className?: string
}

export const ThemeSwicher: FC<ThemeSwicherProps> = memo(({ className }) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme='clear'>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
})
