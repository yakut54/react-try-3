import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { Profile, ProfileSchema } from '../types/profileType'

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        if (state) {
          state.error = undefined
          state.isLoading = true
        }
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        if (state) {
          state.isLoading = false
          state.data = action.payload
        }
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        if (state) {
          state.isLoading = false
          state.error = action.payload
        }
      })
  },
})

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice
