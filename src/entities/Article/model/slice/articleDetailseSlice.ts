import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsShema } from '../types/articleDetailsShema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/article'

const initialState: ArticleDetailsShema = {
    data: undefined,
    isLoading: false,
    error: undefined
}

export const articleDetailseSlice = createSlice({
    name: 'articleDetailse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }

})

export const { actions: articleDetailseActions } = articleDetailseSlice
export const { reducer: articleDetailseReducer } = articleDetailseSlice
