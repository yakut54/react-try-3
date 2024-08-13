import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleTextComponent } from './ArticleTextComponent'

const meta: Meta<typeof ArticleTextComponent> = {
  title: 'Shared/ArticleTextComponent',
  component: ArticleTextComponent,
}

export default meta
type Story = StoryObj<typeof ArticleTextComponent>

export const ArticleTextComponentLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleTextComponentDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
