import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading || false
