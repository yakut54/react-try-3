import { StateSchema } from '0_app/providers/StoreProvider'
import {
  getArticlesPageError,
  getArticlesPageIsHasMore,
  getArticlesPageIsInited,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '1_pages/ArticlesPage/model/selectors/getArticlesSelectors'
import { ArticleType } from '4_entities/Article'

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

  it('Testing is inited false', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { _isInited: false },
    }

    expect(getArticlesPageIsInited(state as StateSchema)).toEqual(false)
  })

  it('Testing is inited true', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { _isInited: true },
    }

    expect(getArticlesPageIsInited(state as StateSchema)).toEqual(true)
  })

  it('Testing page order "asc"', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { order: 'asc' },
    }

    expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc')
  })

  it('Testing page order "desc"', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { order: 'desc' },
    }

    expect(getArticlesPageOrder(state as StateSchema)).toEqual('desc')
  })

  it('Testing page sort "createdAt"', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { sort: 'createdAt' },
    }

    expect(getArticlesPageSort(state as StateSchema)).toEqual('createdAt')
  })

  it('Testing page sort "title"', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { sort: 'title' },
    }

    expect(getArticlesPageSort(state as StateSchema)).toEqual('title')
  })

  it('Testing page sort "views"', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { sort: 'views' },
    }

    expect(getArticlesPageSort(state as StateSchema)).toEqual('views')
  })

  it('Testing page Search', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { search: 'some search text' },
    }

    expect(getArticlesPageSearch(state as StateSchema)).toEqual('some search text')
  })

  it('Testing page Type', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { type: ArticleType.ALL },
    }

    expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ALL)
  })
})
