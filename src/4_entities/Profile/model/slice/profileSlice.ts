import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import type { Profile, ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: true,
  readonly: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state: ProfileSchema, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      }
    },
    cancelEdit: (state: ProfileSchema) => {
      state.readonly = true
      state.form = state.data
    },
  },
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
          state.form = action.payload
        }
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        if (state) {
          state.isLoading = false
          state.error = action.payload
        }
      })
      .addCase(updateProfileData.pending, (state) => {
        if (state) {
          state.error = undefined
          state.isLoading = true
        }
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        if (state) {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
        }
      })
      .addCase(updateProfileData.rejected, (state, action) => {
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
