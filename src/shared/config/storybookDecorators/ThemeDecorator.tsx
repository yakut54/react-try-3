import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider>
    <div className={`flex-center app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
