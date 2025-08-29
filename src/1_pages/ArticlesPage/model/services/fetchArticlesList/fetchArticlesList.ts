import i18n from 'i18next'
import { AxiosError } from 'axios'
import { ArticleSchema, ArticleType } from '4_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { addQueryParams } from '5_shared/lib/url/addQueryParams/addQueryParams'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/getArticlesSelectors'

export interface fetchArticlesListProps {
    replace?: boolean
}

const fetchArticlesList = createAsyncThunk<
    ArticleSchema[],
    fetchArticlesListProps,
    ThunkConfig<string>
>(
  'articlesPages/fetchArticlesList',
  async (props, thunkAPI) => {
    const {
      rejectWithValue, extra, getState,
    } = thunkAPI

    const page = getArticlesPageNum(getState())
    const limit = getArticlesPageLimit(getState())
    const search = getArticlesPageSearch(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const type = getArticlesPageType(getState())

    try {
      addQueryParams({
        type, sort, order, search,
      })

      const response = await extra.api.get<ArticleSchema[]>('/articles', {
        params: {
          q: search,
          // _page: page,
          // _limit: limit,
          _sort: sort,
          _order: order,
          _expand: 'user',
          type: type === ArticleType.ALL ? undefined : type,
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
