import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UISchema } from '../types/UISchema'

const initialState: UISchema = {
  scroll: {},
}

interface ScrollPosition {
    path: string,
    position: number
}

export const uiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<ScrollPosition>) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const {
  actions: uiActions,
  reducer: uiReducer,
} = uiSlice
