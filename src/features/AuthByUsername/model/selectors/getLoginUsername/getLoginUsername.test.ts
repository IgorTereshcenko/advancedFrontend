import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateShema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
    test('Правильное имя пользователя', () => {
        const state: DeepPartial<StateShema> = {
            LoginForm: {
                username: 'admin'
            }
        }
        expect(getLoginUsername(state as StateShema)).toEqual('admin')
    })
    test('нет имени пользователя в стейте', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginUsername(state as StateShema)).toEqual('')
    })
})
