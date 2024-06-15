import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const SidebarLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SidebarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
