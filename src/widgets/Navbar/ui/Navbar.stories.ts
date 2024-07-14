import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/lib/storybookDecorators/RouterDecorator'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
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
    SBDecorator(Theme.LIGHT),
  ],
}

export const NavbarDark: Story = {
  decorators: [
    RouterDecorator,
    SBDecorator(Theme.DARK),
  ],
}

export const NavbarAuthLight: Story = {
  decorators: [
    RouterDecorator,
    SBDecorator(Theme.LIGHT, { initialState: { user: { authData: {} } } }),
  ],
}

export const NavbarAuthDark: Story = {
  decorators: [
    RouterDecorator,
    SBDecorator(Theme.DARK, { initialState: { user: { authData: {} } } }),
  ],
}
