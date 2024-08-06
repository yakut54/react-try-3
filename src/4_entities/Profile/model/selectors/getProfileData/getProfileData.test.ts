import { StateSchema } from '0_app/providers/StoreProvider'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  it('should return profile data', () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toBeUndefined()
  })
})
