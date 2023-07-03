import { type StateShema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
    test('select data', () => {
        const data = {
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
                data
            }
        }
        expect(getProfileData(state as StateShema)).toEqual(data)
    })
    test('undefined', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getProfileData(state as StateShema)).toEqual(undefined)
    })
})
