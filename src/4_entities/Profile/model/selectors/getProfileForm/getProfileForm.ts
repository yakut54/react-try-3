import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileForm = (state: StateSchema) => state.profile?.form
