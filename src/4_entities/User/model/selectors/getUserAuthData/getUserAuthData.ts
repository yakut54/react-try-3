import { StateSchema } from '0_app/providers/StoreProvider'

export const getUserAuthData = (state: StateSchema) => state.user.authData
