import type { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors
