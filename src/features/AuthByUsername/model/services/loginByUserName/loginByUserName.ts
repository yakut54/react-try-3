import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { User } from 'entities/User'

interface LoginByUsernameProps {
    username: string
    password: string
}

const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        // Обработка ошибки Axios
        return thunkAPI.rejectWithValue(`Axios error: ${e.message}`)
      }
      // Обработка неизвестной ошибки
      return thunkAPI.rejectWithValue(`Unknown error: ${e.message}`)
    }
  },
)

export default loginByUserName
