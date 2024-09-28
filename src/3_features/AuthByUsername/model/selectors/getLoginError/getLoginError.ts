import { StateSchema } from '0_app/providers/StoreProvider'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
