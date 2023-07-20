import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailseCommentReducer, getArticleComments } from '../../model/slices/articleDetailseCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailseComments: articleDetailseCommentReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {

    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('article-details')
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsLoading)
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const commentsError = useSelector(getArticleCommentsError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </DynamicModuleLoader>
        </div>
    )
}

export default memo(ArticleDetailsPage)
