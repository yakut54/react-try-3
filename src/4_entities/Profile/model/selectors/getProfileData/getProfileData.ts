import { StateSchema } from '0_app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => state.profile?.data
export const getIsCanEditProfile = (state: StateSchema) => state.profile?.data?.id === state.user.authData?.id
