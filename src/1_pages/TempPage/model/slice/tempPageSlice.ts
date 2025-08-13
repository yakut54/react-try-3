import { createSlice } from '@reduxjs/toolkit'
import { TempPageSchema } from '1_pages/TempPage/model/types/TempPageSchema'

const initialState: TempPageSchema = {
  value: 100123,
}

export const tempPageSlice = createSlice({
  name: 'tempPageSlice',
  initialState: () => initialState,
  reducers: {
    huj: () => {
      console.log('huj')
    },
    pesda: () => {
      console.log('pesda')
    },
  },
})

export const {
  actions: tempPageActions,
  reducer: tempPageReducer,
} = tempPageSlice
