import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import { StateSchema } from '0_app/providers/StoreProvider'
import fetchNextArticlePage from './fetchNextArticlePage'
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlePage', () => {
  it('success', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
        entities: {/* 1: mockArticleData, */},
        ids: [],
        limit: 5,
        isLoading: false,
        isMore: true,
      },
    }

    const thunk = new TestAsyncThunk(fetchNextArticlePage, state)

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  it('error fetchNextArticlePage not called isMore: false', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
        entities: {/* 1: mockArticleData, */},
        ids: [],
        limit: 5,
        isLoading: false,
        isMore: false,
      },
    }

    const thunk = new TestAsyncThunk(fetchNextArticlePage, state)

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })

  it('error fetchNextArticlePage not called isLoading: true', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
        entities: {/* 1: mockArticleData, */},
        ids: [],
        limit: 5,
        isLoading: true,
        isMore: true,
      },
    }

    const thunk = new TestAsyncThunk(fetchNextArticlePage, state)

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
