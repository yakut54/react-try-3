import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleViewSwitcher } from './ArticleViewSwitcher'

const meta: Meta<typeof ArticleViewSwitcher> = {
  title: 'Entities/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
}

export default meta
type Story = StoryObj<typeof ArticleViewSwitcher>

export const ArticleViewSwitcherLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleViewSwitcherDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
