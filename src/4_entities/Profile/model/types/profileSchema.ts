/* eslint-disable no-unused-vars */
import { Country } from '4_entities/Country'
import { Currency } from '4_entities/Currency'

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
}

export interface Profile {
    id?: string,
    age?: number,
    city?: string,
    first?: string,
    avatar?: string
    username?: string,
    lastname?: string,
    country?: Country,
    currency?: Currency,
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile
    error?: string
    readonly: boolean
    isLoading: boolean,
    validateErrors?: ValidateProfileError[]
}
