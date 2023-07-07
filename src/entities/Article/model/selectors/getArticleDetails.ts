import { type StateShema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateShema) => state.articleDetailse?.data
export const getArticleDetailsError = (state: StateShema) => state.articleDetailse?.error
export const getArticleDetailsIsLoading = (state: StateShema) => state.articleDetailse?.isLoading || false
