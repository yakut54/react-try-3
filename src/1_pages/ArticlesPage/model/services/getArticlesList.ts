import i18n from 'i18next'
import { AxiosError } from 'axios'
import { ArticleSchema } from '4_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'

const getArticlesList = createAsyncThunk<
    ArticleSchema[],
    void,
    ThunkConfig<string>
>(
  'articlesPages/getArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI

    try {
      const response = await extra.api.get<ArticleSchema[]>('/articles', {
        params: {
          _expand: 'user',
        },
      })

      // dispatch(articlePageActions.setView(response.data))

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return rejectWithValue(i18n.t('Ошибка при получении статей', { ns: 'article-details' }))
        }

        return rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)

export default getArticlesList
