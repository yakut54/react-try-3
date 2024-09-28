import { StateSchema } from '0_app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnly', () => {
  it('should return readonly true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }

    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })

  it('should return false', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileReadOnly(state as StateSchema)).toEqual(false)
  })
})
