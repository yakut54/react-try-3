import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
}

export default meta

type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const NavbarDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}

export const NavbarAuthLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT, { initialState: { user: { authData: {} } } }),
  ],
}

export const NavbarAuthDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK, { initialState: { user: { authData: {} } } }),
  ],
}
