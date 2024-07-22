import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
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
    SBDecorator(Theme.LIGHT),
  ],
}

export const SidebarDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
