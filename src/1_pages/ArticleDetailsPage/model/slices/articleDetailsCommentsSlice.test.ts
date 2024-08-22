import { ArticleDetailsSchema } from '4_entities/Article'
import { comments, ids } from '../mocks/commentsData'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

const entities = {
  1: {
    id: '1',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
  2: {
    id: '2',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
}

describe('Test articleDetailsCommentsSlice', () => {
  test('test fetchCommentsByArticleId pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
    }

    expect(
      articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })

  test('test fetchCommentsByArticleId fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    }

    expect(
      articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.fulfilled(comments, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      entities,
      ids,
    })
  })

  test('test fetchCommentsByArticleId rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    }
    expect(
      articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.rejected,
      ),
    ).toEqual({ isLoading: false })
  })
})
