import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateShema } from 'app/providers/StoreProvider'
import { type ArticleDetailseCommentShema } from '../types/ArticleDetailseCommentShema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateShema>(
    (state) => state.articleDetailseComments || commentsAdapter.getInitialState()
)

export const articleDetailseCommentSlice = createSlice({
    name: 'articleDetailseComment',
    initialState: commentsAdapter.getInitialState<ArticleDetailseCommentShema>(
        {
            ids: [],
            entities: {},
            isLoading: false,
            error: undefined
        }
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload)
        })
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: articleDetailseCommentActions } = articleDetailseCommentSlice
export const { reducer: articleDetailseCommentReducer } = articleDetailseCommentSlice
