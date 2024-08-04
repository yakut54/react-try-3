import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => state.profile?.error
