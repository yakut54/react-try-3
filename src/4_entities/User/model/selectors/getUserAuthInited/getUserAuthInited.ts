import { StateSchema } from '0_app/providers/StoreProvider'

export const getUserAuthInited = (state: StateSchema) => state.user._inited || false
