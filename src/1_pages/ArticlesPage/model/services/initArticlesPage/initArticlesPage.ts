import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { SortOrder } from '5_shared/types/SortOrder'
import { ArticleSortField, ArticleType } from '4_entities/Article'
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
          if (key === 'sort') {
            dispatch(articlePageActions.setSort(value as ArticleSortField))
          } else if (key === 'order') {
            dispatch(articlePageActions.setOrder(value as SortOrder))
          } else if (key === 'search') {
            dispatch(articlePageActions.setSearch(value))
          } else if (key === 'type') {
            dispatch(articlePageActions.setType(value as ArticleType))
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
