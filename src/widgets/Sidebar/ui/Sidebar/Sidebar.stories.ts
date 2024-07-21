import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/lib/storybookDecorators/RouterDecorator'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const SidebarLight: Story = {
  decorators: [
    RouterDecorator,
    SBDecorator(Theme.LIGHT),
  ],
}

export const SidebarDark: Story = {
  decorators: [
    RouterDecorator,
    SBDecorator(Theme.DARK),
  ],
}
