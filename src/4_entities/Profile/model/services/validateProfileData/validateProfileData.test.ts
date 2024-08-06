import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { ValidateProfileError } from '4_entities/Profile'
import { validateProfileData } from './validateProfileData'

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

describe('validateProfileData.test', () => {
  test('success validate profile data', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('error without "firstname and lastname"', async () => {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('error "incorrect age" age=0', async () => {
    const result = validateProfileData({
      ...data,
      age: 0,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('error "incorrect age" age=NaN', async () => {
    const result = validateProfileData({
      ...data,
      age: NaN,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('error "incorrect Country"', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('error "incorrect all"', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
