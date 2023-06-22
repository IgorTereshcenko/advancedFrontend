import { createAsyncThunk } from '@reduxjs/toolkit'
import { type thunkExtraAgr } from 'app/providers/StoreProvider'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string, extra: thunkExtraAgr }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
