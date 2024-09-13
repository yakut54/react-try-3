import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { SortOrder } from '5_shared/types/SortOrder'
import { ArticleSortField } from '4_entities/Article'
import { articlePageActions } from '../../slices/articlePageSlice'
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageIsInited } from '../../selectors/getArticlesSelectors'

const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI

    const isInited = getArticlesPageIsInited(getState())

    if (!isInited) {
      searchParams.forEach((value, key) => {
        if (key) {
          switch (key) {
          case 'sort':
            dispatch(articlePageActions.setSort(value as ArticleSortField))
            break
          case 'order':
            dispatch(articlePageActions.setOrder(value as SortOrder))
            break
          case 'search':
            dispatch(articlePageActions.setSearch(value))
            break
          default:
            console.log(`Неизвестный ключ: ${key}`)
          }
        }
      })

      dispatch(articlePageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  },
  {},
)

export default initArticlesPage
