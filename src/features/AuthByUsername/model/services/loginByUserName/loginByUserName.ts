import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import i18n from 'i18next'
import { User, userActions } from 'entities/User'

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
        throw new Error(i18n.t('Что то пошло не так'))
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      if (e instanceof Error && e.name === 'AxiosError') {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return thunkAPI.rejectWithValue(i18n.t('Ошибка аутентификации'))
        }

        return thunkAPI.rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return thunkAPI.rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)

export default loginByUserName
