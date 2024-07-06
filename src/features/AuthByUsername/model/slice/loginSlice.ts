import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import loginByUserName from '../servises/loginByUserName/loginByUserName'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  username: 'huj',
  password: 'pesda',
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'login',
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
      .addCase(loginByUserName.pending, (state, action) => {
        console.log(state)
        console.log(action)
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        console.log(state)
        console.log(action)
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        console.log(state)
        console.log(action)
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: loginActions,
  reducer: loginReducer,
} = loginSlice
