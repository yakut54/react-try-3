import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '0_app/providers/StoreProvider'
import { RootState } from '0_app/providers/StoreProvider/config/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
