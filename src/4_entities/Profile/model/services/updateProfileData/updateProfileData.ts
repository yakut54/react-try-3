import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { Profile, ValidateProfileError } from '../../types/profileSchema'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>>(
      'profile/updateProfileData',
      async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI

        const formData = getProfileForm(getState())
        const errors = validateProfileData(formData)

        if (errors.length) {
          return rejectWithValue(errors)
        }

        try {
          const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

          if (!response.data) {
            throw new Error('Profile does not exist')
          }

          return response.data
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
      },
      {},
    )
