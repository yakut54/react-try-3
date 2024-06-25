import { StoryFn } from '@storybook/react/'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { componentRenderOptions } from 'shared/lib/tests/RenderWithRouter'

export const ThemeDecorator = (theme: Theme, options: componentRenderOptions = {}) => {
  const DecoratedStoryComponent = (
    StoryComponent: StoryFn,
  ) => (
    <StoreProvider initialState={options.initialState as StateSchema}>
      <ThemeProvider initialTheme={theme}>
        <div className={`flex-center app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    </StoreProvider>

  )

  DecoratedStoryComponent.displayName = `ThemeDecorator(${theme})`
  return DecoratedStoryComponent
}
