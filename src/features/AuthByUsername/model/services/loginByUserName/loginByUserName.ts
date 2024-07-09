import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import i18n from 'i18next'
import { User, userActions } from 'entities/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

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

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        // Проверяем код статуса ошибки
        const statusCode = e.response.status
        if (statusCode === 403) {
          // Обработка ошибки аутентификации
          return thunkAPI.rejectWithValue(i18n.t('Ошибка аутентификации'))
        }
        // Обработка других ошибок Axios
        return thunkAPI.rejectWithValue(`Axios error: ${e.message}`)
      }
      // Обработка неизвестной ошибки
      return thunkAPI.rejectWithValue(`Unknown error: ${e.message}`)
    }
  },
  {},
)

export default loginByUserName
