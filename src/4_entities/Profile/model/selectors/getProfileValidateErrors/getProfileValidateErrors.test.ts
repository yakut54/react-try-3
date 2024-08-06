import { StateSchema } from '0_app/providers/StoreProvider'
import { ValidateProfileError } from '4_entities/Profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
  it('should return Validate Errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })

  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined()
  })
})
