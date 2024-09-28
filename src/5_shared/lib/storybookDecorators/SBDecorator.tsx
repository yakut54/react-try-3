import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { StoryFn } from '@storybook/react/'
import { profileReducer } from '4_entities/Profile'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import type { StateSchema } from '0_app/providers/StoreProvider'
import { StoreProvider } from '0_app/providers/StoreProvider'
import { Theme, ThemeProvider } from '0_app/providers/ThemeProvider'
import { loginReducer } from '3_features/AuthByUsername/model/slices/loginSlice'
import type { componentRenderOptions } from '5_shared/lib/tests/RenderWithRouter'
import { articleDetailsPageReducer } from '1_pages/ArticleDetailsPage/model/slices'
import { articlePageReducer } from '1_pages/ArticlesPage/model/slices/articlePageSlice'
import { articleDetailsReducer } from '4_entities/Article/model/slices/articleDetailsSlice'
import { addCommentFormReducer } from '3_features/AddCommentForm/model/slices/addCommentFormSlice'
import type { ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlePageReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
              <div className="storybook-page-wrapper">
                <StoryComponent />
              </div>
            </Suspense>
          </div>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  )

  DecoratedStoryComponent.displayName = `SBDecorator(${theme})`
  return DecoratedStoryComponent
}
