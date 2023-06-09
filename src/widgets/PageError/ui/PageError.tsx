import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './pageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

    const { t } = useTranslation()

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Возникла непредвиденная ошибка')}</p>
            <button onClick={reloadPage}>{t('Обновить страницу')}</button>
        </div>
    )
}
