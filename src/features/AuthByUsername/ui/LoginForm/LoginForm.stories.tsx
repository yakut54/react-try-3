import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const LoginFormLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const LoginFormDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}
