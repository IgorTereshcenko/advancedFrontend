import { createAsyncThunk } from '@reduxjs/toolkit'
import { type thunkExtraAgr } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, { rejectValue: string, extra: thunkExtraAgr }>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
