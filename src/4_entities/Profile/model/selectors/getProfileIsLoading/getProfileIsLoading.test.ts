import { StateSchema } from '0_app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  it('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })

  it('should return false', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })
})
