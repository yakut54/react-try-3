import { TestAsyncThunk } from '5_shared/lib/tests/TestAsyncThunk'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import { fetchProfileData } from './fetchProfileData'

const data = {
  username: 'admin',
  age: 43,
  first: 'Yakut',
  lastname: 'Sakha',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Nsk',
  avatar: '',
}

describe('fetchProfileData.test', () => {
  test('success fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
