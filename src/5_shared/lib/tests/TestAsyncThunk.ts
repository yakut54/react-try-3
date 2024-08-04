import { StateSchema } from '0_app/providers/StoreProvider'
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

// eslint-disable-next-line no-unused-vars
type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue
}>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  getState: () => StateSchema

  dispatch: Dispatch

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>

  navigate: jest.MockedFn<any>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(arg: Arg) {
    const asyncThunkAction = this.actionCreator(arg)
    const action = await asyncThunkAction(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    )

    return action
  }
}
