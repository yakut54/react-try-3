import { StateSchema } from '0_app/providers/StoreProvider'

export const valueTemp = (state: StateSchema) => state.tempPage?.value ?? 42
