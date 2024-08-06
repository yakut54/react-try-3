import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { ValidateProfileError } from '4_entities/Profile'
import { updateProfileData } from './updateProfileData'

const data = {
  username: 'admin',
  age: 43,
  first: 'Yakut',
  lastname: 'Sakha',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Nsk',
  avatar: AvatarJPG,
}

describe('updateProfileData.test', () => {
  test('success update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('error INCORRECT_USER_DATA', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          first: '',
          lastname: '',
        },
      },
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
