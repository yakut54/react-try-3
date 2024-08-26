import i18n from 'i18next'
import { AxiosError } from 'axios'
import { ArticleSchema } from '4_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { getArticlesPageLimit } from '1_pages/ArticlesPage/model/selectors/getArticlesSelectors'

interface FetchArticlesListProps {
    page?: number
}

const fetchArticlesList = createAsyncThunk<
    ArticleSchema[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
  'articlesPages/fetchArticlesList',
  async (props, thunkAPI) => {
    const {
      rejectWithValue, extra, dispatch, getState,
    } = thunkAPI
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())

    console.log('limit', limit)

    try {
      const response = await extra.api.get<ArticleSchema[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      })

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

export default fetchArticlesList
