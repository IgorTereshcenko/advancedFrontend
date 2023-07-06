import { type Article } from '../types/article'

export interface ArticleDetailsShema {
    isLoading: boolean
    error?: string
    data?: Article
}
