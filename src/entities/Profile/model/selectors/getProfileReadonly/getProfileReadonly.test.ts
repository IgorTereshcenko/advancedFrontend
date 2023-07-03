import { type StateShema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
    test('select readonly', () => {

        const state: DeepPartial<StateShema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateShema)).toEqual(true)
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileReadonly(state as StateShema)).toEqual(undefined)
    })
})
