import { type AddCommentFormProps } from 'features/AddCommentForm/ui/addCommentForm/AddCommentForm'
import { type FC, lazy } from 'react'

export const ArticleDetailsPageAsync = lazy<FC<AddCommentFormProps>>(async () => await import('./ArticleDetailsPage'))
