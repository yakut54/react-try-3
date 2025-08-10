import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '4_entities/Counter'

// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: CounterSchema = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const {
  actions: counterActions,
  reducer: counterReducer,
} = counterSlice
