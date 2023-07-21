import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateShema'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {

        const userData = getUserAuthData(thunkAPI.getState())
        const article = getArticleDetailsData(thunkAPI.getState())

        if (!userData || !text || !article) {
            return thunkAPI.rejectWithValue('no data')
        }

        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            thunkAPI.dispatch(fetchCommentsByArticleId(article.id))

            return response.data

        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
