import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileShema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error: string | undefined
    readonly: boolean
    validateError?: ValidateProfileError[]
}

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}
