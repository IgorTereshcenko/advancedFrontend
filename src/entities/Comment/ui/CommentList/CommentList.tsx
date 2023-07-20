import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { type Comment } from '../../model/types/comment'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = ({ className, comments, isLoading }) => {

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment =>
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}
                        className={cls.comment}/>)
                : <Text size='size-m' text={t('Комментарии отсутствуют')}/>}
        </div>
    )
}
