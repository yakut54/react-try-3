import { LoginSchema } from '3_features/AuthByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

describe('loginSlice', () => {
  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('0987'))).toEqual({ password: '0987' })
  })

  it('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Vasya'))).toEqual({ username: 'Vasya' })
  })
})
