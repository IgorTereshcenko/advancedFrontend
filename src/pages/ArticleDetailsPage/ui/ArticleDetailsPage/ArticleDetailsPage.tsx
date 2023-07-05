import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ArticlesDetailsPage
        </div>
    )
}

export default memo(ArticleDetailsPage)
