import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
}

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const ArticlesPageLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticlesPageDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
