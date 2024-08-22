import { StateSchema } from '0_app/providers/StoreProvider'
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './getArticleDetailsComments'

describe('getArticleComments', () => {
  it('isLoading: false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { isLoading: false },
    }

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false)
  })

  it('isLoading: true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { isLoading: true },
    }

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true)
  })

  it('Testing getArticleDetailsCommentsIsLoading selector without state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(
      undefined,
    )
  })

  it('Testing getArticleDetailsCommentsError selector', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { error: 'error' },
    }

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      'error',
    )
  })

  it('Testing getArticleDetailsCommentsIsLoading selector without state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      undefined,
    )
  })
})
