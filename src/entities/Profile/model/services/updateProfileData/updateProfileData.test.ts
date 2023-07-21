import { Country } from 'entities/Country'
import { updateProfileData } from './updateProfileData'
import { testAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'

const data = {
    first: 'dsada',
    lastname: 'dsada',
    username: 'sdasd',
    age: 123,
    country: Country.Armenia,
    city: 'dsad',
    currency: Currency.EUR,
    id: '1'
}

const { callChunk, api } = testAsyncThunk(updateProfileData, {
    profile: {
        form: data
    }
})

describe('updateProfileData.test', () => {

    test('success', async () => {
        api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await callChunk()
        expect(api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await callChunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    })

    test('validate error', async () => {

        const { callChunk } = testAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' }
            }
        })

        const result = await callChunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })
})
