/* eslint-disable @typescript-eslint/indent */
/* eslint-disable indent */
import { memo, type FC, useEffect, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailseReducer } from '../../model/slice/articleDetailseSlice'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetails'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eyeIcon.svg'
import CalendarIcon from 'shared/assets/icons/calendarIcon.svg'
import { MyIcon } from 'shared/ui/MyIcon/MyIcon'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

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
    const article = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent
                    className={cls.block}
                    block={block}
                    key={block.id}/>
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent
                    className={cls.block}
                    block={block}
                    key={block.id}/>
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent
                    className={cls.block}
                    block={block}
                    key={block.id}/>
            default:
                return null
        }

    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
            </>
        )
    } else if (error) {
        content = (
            <Text
                align='center'
                title={t('Произошла ошибка при загрузке статьи')}/>
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}/>
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}/>
                <div className={cls.articleInfo}>
                    <MyIcon Svg={EyeIcon} className={cls.icon}/>
                    <Text size='size-m' text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <MyIcon Svg={CalendarIcon} className={cls.icon}/>
                    <Text size='size-m' text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
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
