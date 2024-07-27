import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  it('returns true when loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  it('returns false when not loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    }

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
