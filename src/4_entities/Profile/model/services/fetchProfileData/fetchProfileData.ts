import i18n from 'i18next'
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import type { Profile } from '../../types/profileSchema'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.get<Profile>('/profile')

      if (!response.data) {
        throw new Error('Profile does not exist')
      }

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
