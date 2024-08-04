import { StateSchema } from '0_app/providers/StoreProvider'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''
