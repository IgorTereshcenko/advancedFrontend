import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Profile, type ProfileShema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: ProfileShema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
