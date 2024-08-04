import { StateSchema } from '0_app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false
