import { StateSchema } from '0_app/providers/StoreProvider'

export const getCounter = (state: StateSchema) => state.counter
