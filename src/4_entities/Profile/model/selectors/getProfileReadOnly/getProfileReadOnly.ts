import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly || false
