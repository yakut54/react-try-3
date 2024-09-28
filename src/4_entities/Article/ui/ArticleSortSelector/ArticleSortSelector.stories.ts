import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
}

export default meta
type Story = StoryObj<typeof ArticleSortSelector>

export const ArticleSortSelectorLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleSortSelectorDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
