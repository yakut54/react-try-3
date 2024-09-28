import { Profile, ValidateProfileError } from '../../types/profileSchema'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA] as ValidateProfileError[]
  }

  const {
    lastname,
    first,
    age,
    country,
  } = profile

  const errors: ValidateProfileError[] = []

  if (!lastname || !first) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
