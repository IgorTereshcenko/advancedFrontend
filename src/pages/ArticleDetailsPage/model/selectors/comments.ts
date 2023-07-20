import { type StateShema } from 'app/providers/StoreProvider'

export const getArticleCommentsLoading = (state: StateShema) => state.articleDetailseComments?.isLoading
export const getArticleCommentsError = (state: StateShema) => state.articleDetailseComments?.error
