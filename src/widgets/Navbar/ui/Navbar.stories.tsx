import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybookDecorators/RouterDecorator'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
}

export default meta

type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const NavbarDark: Story = {
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.DARK),
  ],
}
