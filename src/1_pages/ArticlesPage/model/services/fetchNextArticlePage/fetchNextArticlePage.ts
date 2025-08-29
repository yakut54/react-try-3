import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import {
  getArticlesPageIsHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '1_pages/ArticlesPage/model/selectors/getArticlesSelectors'
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../slices/articlePageSlice'

const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlePage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const isHasMore = getArticlesPageIsHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (isHasMore && !isLoading) {
      // dispatch(articlePageActions.setPage(page + 1))
      // dispatch(fetchArticlesList({}))
    }
  },
)

export default fetchNextArticlePage
