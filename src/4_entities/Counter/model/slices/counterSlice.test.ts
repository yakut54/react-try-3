import { counterActions, counterReducer } from '4_entities/Counter'
import { CounterSchema } from '../types/counterSchema'

describe('counterSlice', () => {
  it('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    }

    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
  })

  it('increment', () => {
    const state: CounterSchema = {
      value: 10,
    }

    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
  })

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment))
      .toEqual({ value: 1 })
  })
})
