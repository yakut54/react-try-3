import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'Pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPage>

export const ArticleDetailsPageLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleDetailsPageDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
