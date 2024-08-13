import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleDetails } from './ArticleDetails'

const meta: Meta<typeof ArticleDetails> = {
  title: 'Shared/ArticleDetails',
  component: ArticleDetails,
}

export default meta
type Story = StoryObj<typeof ArticleDetails>

export const ArticleDetailsLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleDetailsDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
