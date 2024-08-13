import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleImageComponent } from './ArticleImageComponent'

const meta: Meta<typeof ArticleImageComponent> = {
  title: 'Shared/ArticleImageComponent',
  component: ArticleImageComponent,
}

export default meta
type Story = StoryObj<typeof ArticleImageComponent>

export const ArticleImageComponentLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleImageComponentDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
