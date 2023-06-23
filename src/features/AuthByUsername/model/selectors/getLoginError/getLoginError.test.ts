import { type StateShema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
    test('возвращается ошибка', () => {
        const state: DeepPartial<StateShema> = {
            LoginForm: {
                error: 'error'
            }
        }
        expect(getLoginError(state as StateShema)).toEqual('error')
    })
    test('нет ошибки в стейте', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginError(state as StateShema)).toEqual(undefined)
    })
})
