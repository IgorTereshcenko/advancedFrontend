import { type StateShema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
    test('select error', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                error: 'error'
            }
        }
        expect(getProfileError(state as StateShema)).toEqual('error')
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileError(state as StateShema)).toEqual(undefined)
    })
})
