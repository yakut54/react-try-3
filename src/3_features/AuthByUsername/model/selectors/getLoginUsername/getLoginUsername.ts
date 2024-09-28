import { StateSchema } from '0_app/providers/StoreProvider'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || ''
