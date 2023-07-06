import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    )
}
