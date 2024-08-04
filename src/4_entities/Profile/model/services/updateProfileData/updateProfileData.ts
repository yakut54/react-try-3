import i18n from 'i18next'
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import type { Profile } from '../../types/profileSchema'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI
    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return rejectWithValue(i18n.t('Ошибка обновления'))
        }

        return rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)
