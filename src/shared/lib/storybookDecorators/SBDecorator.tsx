import { Suspense } from 'react'
import type { StoryFn } from '@storybook/react/'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import type { componentRenderOptions } from 'shared/lib/tests/RenderWithRouter'
import { BrowserRouter } from 'react-router-dom'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

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
            <Suspense fallback={<PageLoader />}>
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
