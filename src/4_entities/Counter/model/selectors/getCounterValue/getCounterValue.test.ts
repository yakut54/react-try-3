import { StateSchema } from '0_app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  it('returns correct counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
