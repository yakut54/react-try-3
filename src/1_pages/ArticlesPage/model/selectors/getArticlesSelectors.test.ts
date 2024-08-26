import { StateSchema } from '0_app/providers/StoreProvider'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '1_pages/ArticlesPage/model/selectors/getArticlesSelectors'

describe('getArticlesPageIsLoading', () => {
  it('isLoading: false', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { isLoading: false },
    }

    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false)
  })

  it('isLoading: true', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { isLoading: true },
    }

    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true)
  })

  it('Testing getArticlesPageError error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { error: 'error' },
    }

    expect(getArticlesPageError(state as StateSchema)).toEqual(
      'error',
    )
  })

  it('Testing getArticlesPageError selector without state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageError(state as StateSchema)).toEqual(
      '',
    )
  })

  it('View tile', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: 'tile' },
    }

    expect(getArticlesPageView(state as StateSchema)).toEqual('tile')
  })

  it('View list', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: 'list' },
    }

    expect(getArticlesPageView(state as StateSchema)).toEqual('list')
  })
})
