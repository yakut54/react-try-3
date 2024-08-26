import { StateSchema } from '0_app/providers/StoreProvider'
import {
  getArticlesPageError,
  getArticlesPageIsHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
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

  it('Testing limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { limit: 20 },
    }

    expect(getArticlesPageLimit(state as StateSchema)).toEqual(20)
  })

  it('Testing limit with undefined, return default value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {},
    }

    expect(getArticlesPageLimit(state as StateSchema)).toEqual(9)
  })

  it('Testing page', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { page: 5 },
    }

    expect(getArticlesPageNum(state as StateSchema)).toEqual(5)
  })

  it('Testing page with undefined', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {},
    }

    expect(getArticlesPageNum(state as StateSchema)).toEqual(1)
  })

  it('Testing is has more', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { isMore: true },
    }

    expect(getArticlesPageIsHasMore(state as StateSchema)).toEqual(true)
  })

  it('Testing is has more with undefined', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {},
    }

    expect(getArticlesPageIsHasMore(state as StateSchema)).toEqual(undefined)
  })
})
