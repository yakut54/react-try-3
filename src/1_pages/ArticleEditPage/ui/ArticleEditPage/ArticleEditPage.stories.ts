import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import ArticleEditPage from './ArticleEditPage'

const meta: Meta<typeof ArticleEditPage> = {
  title: 'Pages/ArticleEditPage',
  component: ArticleEditPage,
}

export default meta
type Story = StoryObj<typeof ArticleEditPage>

export const ArticleEditPageLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleEditPageDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
