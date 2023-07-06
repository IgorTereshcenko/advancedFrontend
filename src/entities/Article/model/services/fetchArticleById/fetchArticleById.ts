import { createAsyncThunk } from '@reduxjs/toolkit'
import { type thunkExtraAgr } from 'app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, { rejectValue: string, extra: thunkExtraAgr }>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
