import { createAsyncThunk } from '@reduxjs/toolkit'
import { type thunkExtraAgr } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, { rejectValue: string, extra: thunkExtraAgr }>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {

        if (!articleId) {
            return thunkAPI.rejectWithValue('error')
        }

        try {
            const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    })
