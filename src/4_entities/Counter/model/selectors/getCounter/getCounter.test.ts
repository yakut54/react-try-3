import { StateSchema } from '0_app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
