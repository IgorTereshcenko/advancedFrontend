import { Country } from 'entities/Country'
import { fetchProfileData } from './fetchProfileData'
import { testAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'

const { callChunk, api } = testAsyncThunk(fetchProfileData)

const data = {
    first: 'dsada',
    lastname: 'dsada',
    username: 'sdasd',
    age: 123,
    country: Country.Armenia,
    city: 'dsad',
    currency: Currency.EUR
}

describe('fetchProfileData.test', () => {

    test('success', async () => {
        api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await callChunk()

        expect(api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await callChunk()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
