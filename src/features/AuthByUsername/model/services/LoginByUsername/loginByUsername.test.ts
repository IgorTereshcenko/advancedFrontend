import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { testAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const { dispatch, callChunk } = testAsyncThunk(loginByUsername)

describe('loginByUsername.test', () => {

    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const result = await callChunk({ username: 'admin', password: '123' })

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await callChunk({ username: 'admin', password: '123' })

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
