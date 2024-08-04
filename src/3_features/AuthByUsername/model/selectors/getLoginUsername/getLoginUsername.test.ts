import { StateSchema } from '0_app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })

  it('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
