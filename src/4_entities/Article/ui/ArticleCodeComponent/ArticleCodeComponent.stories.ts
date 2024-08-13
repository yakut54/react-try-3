import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { ArticleCodeComponent } from './ArticleCodeComponent'

const meta: Meta<typeof ArticleCodeComponent> = {
  title: 'Shared/ArticleCodeComponent',
  component: ArticleCodeComponent,
}

export default meta
type Story = StoryObj<typeof ArticleCodeComponent>

export const ArticleCodeComponentLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleCodeComponentDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
