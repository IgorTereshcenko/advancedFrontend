import { createAsyncThunk } from '@reduxjs/toolkit'
import { type thunkExtraAgr } from 'app/providers/StoreProvider'
import { type Profile } from '../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra: thunkExtraAgr }>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile')

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
