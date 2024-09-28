import { StateSchema } from '0_app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  it('should return error 123', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    }

    expect(getProfileError(state as StateSchema)).toEqual('123')
  })

  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toBeUndefined()
  })
})
