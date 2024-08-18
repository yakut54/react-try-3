import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

describe('articleDetailsSlice', () => {
  it('fetchArticleById extra reducer pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      data: undefined,
      isLoading: false,
      error: undefined,
    }

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual(
      { data: undefined, error: undefined, isLoading: true },
    )
  })

  it('fetchArticleById extra reducer fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    }

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled))
      .toEqual({ isLoading: false })
  })

  it('test fetchArticleById extra reducer, rejected status', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true }

    expect(
      articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected,
      ),
    ).toEqual({ isLoading: false })
  })
})
