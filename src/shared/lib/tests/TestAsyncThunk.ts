import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'

// eslint-disable-next-line no-unused-vars
type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue
}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  getState: () => StateSchema

  dispatch: Dispatch

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const asyncThunkAction = this.actionCreator(arg)
    const action = await asyncThunkAction(this.dispatch, this.getState, undefined)

    return action
  }
}
