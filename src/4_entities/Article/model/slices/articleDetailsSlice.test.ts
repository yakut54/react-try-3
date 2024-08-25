import { fetchArticleById } from '4_entities/Article/model/services/fetchArticleById/fetchArticleById'
import { PayloadAction } from '@reduxjs/toolkit'
import { mockArticleData } from '../mocks/mockArticleData'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { ArticleSchema } from '../types/ArticleSchema'
import { articleDetailsReducer } from './articleDetailsSlice'

describe('articleDetailsSlice', () => {
  const initialState: ArticleDetailsSchema = {
    isLoading: true,
    data: undefined,
    error: undefined,
  }

  const expectedPendingState: ArticleDetailsSchema = {
    error: undefined,
    isLoading: true,
  }

  const expectedFulfilledState: ArticleDetailsSchema = {
    isLoading: false,
    data: mockArticleData,
    error: undefined,
  }

  const expectedRejectedState: ArticleDetailsSchema = {
    data: undefined,
    error: 'error',
    isLoading: false,
  }

  it('Pending Action Handling Test', () => {
    const pendingAction: PayloadAction<void> = {
      type: fetchArticleById.pending.type,
      payload: undefined, // вот этот payload - это то что с сервера типа прилетает сюда должно записываться?
    }

    const updatedState = articleDetailsReducer(initialState, pendingAction)

    expect(updatedState).toEqual(expectedPendingState)
  })

  it('Fulfilled Manual Action Handling Test', () => {
    expect(articleDetailsReducer(
      initialState,
      {
        type: fetchArticleById.fulfilled.type,
        payload: mockArticleData,
        meta: {
          arg: '1',
          requestId: 'unique-request-id',
          requestStatus: 'fulfilled',
        },
      },
    )).toEqual(expectedFulfilledState)
  })

  it('Fulfilled Action Handling Test', () => {
    const fulfilledAction: PayloadAction<ArticleSchema> = {
      type: fetchArticleById.fulfilled.type,
      payload: mockArticleData,
    }

    const updatedState = articleDetailsReducer(initialState, fulfilledAction)

    expect(updatedState).toEqual(expectedFulfilledState)
  })

  it('Fulfilled Thunk Action Handling Test', () => {
    expect(
      articleDetailsReducer(
        initialState,
        fetchArticleById.fulfilled(mockArticleData, '', '1'),
      ),
    ).toEqual(expectedFulfilledState)
  })

  it('Rejected Action Handling Test', () => {
    const rejectedAction = {
      type: fetchArticleById.rejected.type,
      payload: 'error',
    }
    const updatedState = articleDetailsReducer(initialState, rejectedAction)

    expect(updatedState).toEqual(expectedRejectedState)
  })

  it('Rejected Thunk Action Handling Test', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    }
    expect(articleDetailsReducer(state as ArticleDetailsSchema, {
      type: 'articleDetails/fetchArticleById/rejected',
      payload: 'Error',
    }))
      .toEqual({ error: 'Error', isLoading: false })
  })

  it('Rejected Thunk Action Handling Test', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    }
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected))
      .toEqual({ error: undefined, isLoading: false })
  })

  it('Rejected Thunk Action Handling Test', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: undefined,
    }

    const rejectedAction = {
      type: fetchArticleById.rejected.type,
      payload: 'Ошибка получения статьи', // Хорошо. Если я напишу тут "Ехал грека через реку"
    }

    const updatedState = articleDetailsReducer(state as ArticleDetailsSchema, rejectedAction)

    expect(updatedState).toEqual({
      isLoading: false,
      error: 'Ошибка получения статьи', // то и тут будет "Ехал грека через реку" это никак не связано с реальностью
    })
  })
})
