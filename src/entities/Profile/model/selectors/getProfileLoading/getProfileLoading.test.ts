import { type StateShema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoading.test', () => {
    test('select isLoading', () => {

        const state: DeepPartial<StateShema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileLoading(state as StateShema)).toEqual(true)
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileLoading(state as StateShema)).toEqual(undefined)
    })
})
