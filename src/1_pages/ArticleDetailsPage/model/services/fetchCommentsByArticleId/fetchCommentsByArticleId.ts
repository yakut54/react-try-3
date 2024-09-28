import i18n from 'i18next'
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { CommentSchema } from '4_entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentSchema[],
    string | undefined,
    ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    if (!articleId) {
      return rejectWithValue('error in fetchCommentsByArticleId')
    }

    try {
      const response = await extra.api.get<CommentSchema[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      })

      if (!response.data) {
        throw new Error('fetchCommentsByArticleId data does not exist')
      }

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return rejectWithValue(i18n.t('', { ns: 'article' }))
        }

        return rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)
