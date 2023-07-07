import { type StateShema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails'

describe('getArticleDetails.test', () => {
    test('select data', () => {
        const data = {
            id: '1',
            title: 'sas'
        }

        const state: DeepPartial<StateShema> = {
            articleDetailse: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateShema)).toEqual(data)
    })

    test('undefined data', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getArticleDetailsData(state as StateShema)).toEqual(undefined)
    })

    test('isLoading', () => {
        const state: DeepPartial<StateShema> = {
            articleDetailse: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateShema)).toEqual(true)
    })

    test('isLoading false', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getArticleDetailsIsLoading(state as StateShema)).toEqual(false)
    })

    test('error', () => {
        const state: DeepPartial<StateShema> = {
            articleDetailse: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateShema)).toEqual('error')
    })

    test('undefined error', () => {
        const state: DeepPartial<StateShema> = {}
        expect(getArticleDetailsError(state as StateShema)).toEqual(undefined)
    })
})
