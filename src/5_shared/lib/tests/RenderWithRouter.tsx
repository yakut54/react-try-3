import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from '0_app/providers/StoreProvider'
import i18nForTests from '5_shared/config/i18n/i18nForTests'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
}
