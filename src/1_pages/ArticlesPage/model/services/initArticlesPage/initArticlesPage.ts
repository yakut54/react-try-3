import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { getArticlesPageIsInited } from '1_pages/ArticlesPage/model/selectors/getArticlesSelectors'
import { articlePageActions } from '1_pages/ArticlesPage/model/slices/articlePageSlice'
import fetchArticlesList from '1_pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'

const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI

    const isInited = getArticlesPageIsInited(getState())
    if (!isInited) {
      dispatch(articlePageActions.initState())
      dispatch(fetchArticlesList({ page: 1 }))
    }
  },
  {},
)

export default initArticlesPage
