import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'Pages/Articles/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const ArticleDetailsPageHeaderLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleDetailsPageHeaderDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
