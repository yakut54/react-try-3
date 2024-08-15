import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import { articleData } from '4_entities/Article/model/mocks/articleData'
import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleById', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockResolvedValue({ data: articleData })

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.api.get).toHaveBeenCalledTimes(1)
    expect(result.payload).toEqual(articleData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  it('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockResolvedValue({ status: 403 })
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.api.get).toHaveBeenCalledTimes(1)
    expect(result.payload).toEqual('Unknown error: Article does not exist')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
