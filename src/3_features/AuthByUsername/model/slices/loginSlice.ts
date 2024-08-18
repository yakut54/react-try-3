import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import loginByUserName from '../services/loginByUserName/loginByUserName'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        if (state) {
          state.error = undefined
          state.isLoading = true
        }
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        if (state) {
          state.isLoading = false
        }
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        if (state) {
          state.isLoading = false
          state.error = action.payload
        }
      })
  },
})

export const {
  actions: loginActions,
  reducer: loginReducer,
} = loginSlice
