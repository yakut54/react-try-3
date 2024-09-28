import { StateSchema } from '0_app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getUIScroll = (state: StateSchema) => state.UI.scroll

export const getUIScrollByPath = createSelector(
  getUIScroll,
  (_state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
)
