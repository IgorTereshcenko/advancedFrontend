import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './langSwicher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwicherProps {
    className?: string
    short?: boolean
}

export const LangSwicher: FC<LangSwicherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme='clear'
            className={classNames(cls.LangSwicher, {}, [className])}
            onClick={toggle}>
            {t(short ? 'Короткий язык' : 'Длинный язык')}
        </Button>
    )
})
