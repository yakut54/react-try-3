import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import { comments } from '../../mocks/commentsData'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

describe('fetchCommentsByArticleId', () => {
  it('success fetch of articles\'s comments fulfilled', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockResolvedValue({ data: comments })
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.payload).toEqual(comments)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  it('fetchCommentsByArticleId rejected', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockResolvedValue({ data: comments })
    const result = await thunk.callThunk('')

    expect(result.payload).toEqual('error in fetchCommentsByArticleId')
    expect(result.meta.requestStatus).toBe('rejected')
  })

  test("failed fetch of of articles's comments with error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockResolvedValue({ status: 403 })
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Unknown error: fetchCommentsByArticleId data does not exist')
  })
})
