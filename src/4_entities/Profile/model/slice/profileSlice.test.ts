import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { Profile, updateProfileData } from '4_entities/Profile'
import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema, ValidateProfileError } from '../types/profileSchema'

const data: Profile = {
  username: 'admin',
  age: 43,
  first: 'Yakut',
  lastname: 'Sakha',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Nsk',
  avatar: AvatarJPG,
}

describe('profileSlice', () => {
  it('setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }

    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)))
      .toEqual({ readonly: true })
  })

  it('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data, form: { username: '' },
    }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data,
        form: data,
      })
  })

  it('updateProfile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      })
  })

  it('updateProfile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        data,
        form: data,
        readonly: true,
        isLoading: false,
        validateErrors: undefined,
      })
  })
})
