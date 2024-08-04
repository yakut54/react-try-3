import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => state.profile?.data
