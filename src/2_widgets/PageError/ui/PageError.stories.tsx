import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  title: 'Widgets/PageError',
  component: PageError,
}

export default meta

type Story = StoryObj<typeof PageError>

export const PageErrorLight: Story = {
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const PageErrorDark: Story = {
  decorators: [SBDecorator(Theme.DARK)],
}
