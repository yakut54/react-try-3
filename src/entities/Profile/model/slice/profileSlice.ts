import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profileType'

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: true,
  readonly: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice
