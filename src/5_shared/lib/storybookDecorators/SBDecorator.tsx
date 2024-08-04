import { Suspense } from 'react'
import type { StoryFn } from '@storybook/react/'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import { Theme, ThemeProvider } from '0_app/providers/ThemeProvider'
import { StateSchema, StoreProvider } from '0_app/providers/StoreProvider'
import { loginReducer } from '3_features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '4_entities/Profile'
import type { componentRenderOptions } from '5_shared/lib/tests/RenderWithRouter'
import { BrowserRouter } from 'react-router-dom'
import { ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const SBDecorator = (
  theme: Theme,
  options: componentRenderOptions = {},
  asyncReducers: ReducersList = {},
) => {
  const DecoratedStoryComponent = (StoryComponent: StoryFn) => (
    <BrowserRouter>
      <StoreProvider
        initialState={options.initialState as StateSchema}
        asyncReducers={{
          ...defaultAsyncReducers,
          ...asyncReducers,
        }}
      >
        <ThemeProvider initialTheme={theme}>
          <div className={`flex-center app ${theme}`}>
            <Suspense fallback={<AppLoader />}>
              <StoryComponent />
            </Suspense>
          </div>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  )

  DecoratedStoryComponent.displayName = `SBDecorator(${theme})`
  return DecoratedStoryComponent
}
