import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticlePageFilters } from './ArticlePageFilters'

const meta: Meta<typeof ArticlePageFilters> = {
  title: 'Shared/ArticlePageFilters',
  component: ArticlePageFilters,
}

export default meta
type Story = StoryObj<typeof ArticlePageFilters>

export const ArticlePageFiltersLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticlePageFiltersDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
