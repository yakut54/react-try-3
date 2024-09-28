import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import type { Profile, ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: true,
  readonly: true,
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
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state: ProfileSchema) => {
      state.readonly = true
      state.validateErrors = undefined
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
          state.validateErrors = undefined
          state.isLoading = true
        }
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        if (state) {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
          state.validateErrors = undefined
        }
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        if (state) {
          state.isLoading = false
          state.validateErrors = action.payload
        }
      })
  },
})

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice
