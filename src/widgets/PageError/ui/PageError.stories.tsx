import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  title: 'Widgets/PageError',
  component: PageError,
}

export default meta

type Story = StoryObj<typeof PageError>

export const PageErrorLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const PageErrorDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
