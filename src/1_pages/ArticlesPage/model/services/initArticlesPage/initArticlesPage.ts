import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { articlePageActions } from '../../slices/articlePageSlice'
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageIsInited } from '../../selectors/getArticlesSelectors'

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
      dispatch(fetchArticlesList({}))
    }
  },
  {},
)

export default initArticlesPage
