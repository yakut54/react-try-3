import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'Entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
}

export default meta
type Story = StoryObj<typeof ArticleTypeTabs>

export const ArticleTypeTabsLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleTypeTabsDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
