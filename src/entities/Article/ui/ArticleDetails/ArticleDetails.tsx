import { memo, type FC, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailseReducer } from '../../model/slice/articleDetailseSlice'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { /* getArticleDetailsData */getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetails'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetailse: articleDetailseReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {

    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    /* const article = useSelector(getArticleDetailsData) */

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
            </div>
        )
    } else if (error) {
        content = (
            <Text
                align='center'
                title={t('Произошла ошибка при загрузке статьи')}/>
        )
    } else {
        content = (
            <div>ArticleDetails</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
