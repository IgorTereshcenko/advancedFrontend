import { type StateShema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
    test('select form', () => {
        const form = {
            first: 'dsada',
            lastname: 'dsada',
            username: 'sdasd',
            age: 123,
            country: Country.Armenia,
            city: 'dsad',
            currency: Currency.EUR
        }

        const state: DeepPartial<StateShema> = {
            profile: {
                form
            }
        }
        expect(getProfileForm(state as StateShema)).toEqual(form)
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileForm(state as StateShema)).toEqual(undefined)
    })
})
