import { StateSchema } from '0_app/providers/StoreProvider'
import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import addCommentForArticle from './addCommentForArticle'

const comment = {
  id: '1',
  text: 'test comment',
  articleId: '1',
  userId: '1',
}

const state: DeepPartial<StateSchema> = {
  articleDetails: { data: { id: '2' } },
  user: { authData: { id: '2' } },
}

describe('addCommentForArticle', () => {
  it('Testing asyncThunk: addCommentForArticle', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state)
    thunk.api.post.mockResolvedValue({ data: comment })
    const result = await thunk.callThunk('test comment')

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comment)
  })

  it('failed adding of comment for article with no data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state)
    thunk.api.post.mockResolvedValue({ data: comment })
    const result = await thunk.callThunk('')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('no data with ArticleDetailsPage/addCommentForArticle')
  })

  it('failed adding of comment for article with error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle)
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('lorem ipsum')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual(undefined)
  })
})
