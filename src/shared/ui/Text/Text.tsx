import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TextThema = 'primary' | 'error'
type TextAlign = 'left' | 'right' | 'center'

interface TextProps {
    className?: string
    title?: string
    text?: string
    thema?: TextThema
    align?: TextAlign
}

export const Text: FC<TextProps> = memo((props: TextProps) => {

    const { className, text, title, thema = 'primary', align = 'left' } = props

    return (
        <div className={classNames(cls.Text, {}, [className, cls[thema], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
