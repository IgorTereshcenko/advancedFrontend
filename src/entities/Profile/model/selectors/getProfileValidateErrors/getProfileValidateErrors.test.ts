import { type StateShema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileValidateErrors.test', () => {
    test('select validateErrors', () => {

        const state: DeepPartial<StateShema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRECT_COUNTRY]
            }
        }
        expect(getProfileValidateErrors(state as StateShema)).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileValidateErrors(state as StateShema)).toEqual(undefined)
    })
})
