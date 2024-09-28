import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import i18n from 'i18next'
import { User, userActions } from '4_entities/User'
import { ThunkConfig } from '0_app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

const loginByUserName = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI

    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error(i18n.t('Что то пошло не так'))
      }

      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return rejectWithValue(i18n.t('Ошибка аутентификации'))
        }

        return rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)

export default loginByUserName
