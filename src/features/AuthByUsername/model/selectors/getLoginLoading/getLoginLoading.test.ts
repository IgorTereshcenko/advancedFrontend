import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateShema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getLoginLoading.test', () => {
    test('загрузка', () => {
        const state: DeepPartial<StateShema> = {
            LoginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state as StateShema)).toEqual(true)
    })
    test('нет загрузки в стейте', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getLoginLoading(state as StateShema)).toEqual(false)
    })
})
