import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TextThema = 'primary' | 'error'

interface TextProps {
    className?: string
    title?: string
    text?: string
    thema?: TextThema
}

export const Text: FC<TextProps> = memo(({ className, text, title, thema = 'primary' }) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[thema]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
