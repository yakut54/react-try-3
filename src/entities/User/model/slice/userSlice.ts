import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import type { User, UserSchema } from '../types/userSchema'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(action.payload))
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    },
  },
})

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice
