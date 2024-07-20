import axios from 'axios'
import { User, userActions } from 'entities/User'
import loginByUserName from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, { shallow: false })

describe('loginByUserName', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // it('success login', async () => {
  //   const returnUserData: User = { username: 'admin', id: '1' }
  //   mockedAxios.post.mockResolvedValueOnce({ data: returnUserData })
  //
  //   const asyncThunkAction = loginByUserName({ username: 'admin', password: '123' })
  //   const action = await asyncThunkAction(dispatch, getState, undefined)
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnUserData))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(action.meta.requestStatus).toBe('fulfilled')
  //   expect(action.payload).toEqual(returnUserData)
  //   expect(action.meta.requestStatus).toEqual(expect.any(String))
  // })
  //
  // it('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //
  //   const asyncThunkAction = loginByUserName({ username: 'jigurda', password: '1237' })
  //   const action = await asyncThunkAction(dispatch, getState, undefined)
  //
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(action.meta.requestStatus).toBe('rejected')
  //   expect(action.payload).toBe('Unknown error: ')
  // })

  it('success login', async () => {
    const returnUserData: User = { username: 'admin', id: '1' }
    mockedAxios.post.mockResolvedValueOnce({ data: returnUserData })

    const thunkAPI = new TestAsyncThunk(loginByUserName)
    const action = await thunkAPI.callThunk({ username: 'admin', password: '123' })

    expect(thunkAPI.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnUserData))
    expect(thunkAPI.dispatch).toHaveBeenCalledTimes(3)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(returnUserData)
    expect(action.meta.requestStatus).toEqual(expect.any(String))
  })

  it('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunkAPI = new TestAsyncThunk(loginByUserName)
    const action = await thunkAPI.callThunk({ username: 'admin', password: '123' })

    expect(thunkAPI.dispatch).toHaveBeenCalledTimes(2)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toBe('Unknown error: ')
  })
})
