import { StateSchema } from '0_app/providers/StoreProvider'
import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import fetchArticlesList from '1_pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import initArticlesPage from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
  it('is not initial state', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _isInited: false,
      },
    }
    const thunk = new TestAsyncThunk(initArticlesPage, state)

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
  })

  it('is initial state', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _isInited: true,
      },
    }
    const thunk = new TestAsyncThunk(initArticlesPage, state)

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})