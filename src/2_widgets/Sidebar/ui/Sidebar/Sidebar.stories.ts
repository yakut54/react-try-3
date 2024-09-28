import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
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

export const SidebarAuthLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT, {
      initialState: {
        user: { authData: { username: 'admin', id: '1' } },
      },
    }),
  ],
}

export const SidebarAuthDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK, {
      initialState: {
        user: { authData: { username: 'admin', id: '1' } },
      },
    }),
  ],
}
