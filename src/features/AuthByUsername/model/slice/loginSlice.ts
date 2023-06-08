import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type LoginShema } from '../types/loginShema'
import { loginByUsername } from '../services/LoginByUsername/loginByUsername'

const initialState: LoginShema = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
