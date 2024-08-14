import { StateSchema } from '0_app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails'

describe('getArticleDetails', () => {
  it('Should return data', () => {
    const data = {
      id: '1',
      title: 'Test Article',
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  it('With empty state', () => {
    const data = {}

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual({})
  })

  it('Should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })

  it('Should return isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })

  it('Should return Error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  it('Should return Error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
