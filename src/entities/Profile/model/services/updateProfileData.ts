import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../types/profile'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateShema'
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {

        const { extra, rejectWithValue, getState } = thunkAPI

        try {
            const formData = getProfileForm(getState())

            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data

        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
