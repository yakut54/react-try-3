import { StateSchema } from '0_app/providers/StoreProvider'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
  it('should return profile form', () => {
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
        form: data,
      },
    }

    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toBeUndefined()
  })
})
