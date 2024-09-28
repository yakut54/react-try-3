import { StateSchema } from '0_app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })

  it('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
