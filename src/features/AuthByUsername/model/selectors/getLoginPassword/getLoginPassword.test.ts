import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateShema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
    test('Правильный пароль', () => {
        const state: DeepPartial<StateShema> = {
            LoginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateShema)).toEqual('123')
    })
    test('нет паролья в стейте', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginPassword(state as StateShema)).toEqual('')
    })
})
