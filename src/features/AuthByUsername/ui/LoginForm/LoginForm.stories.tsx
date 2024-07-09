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

export const LoginFormErrorLight: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.LIGHT,
    {
      initialState: {
        loginForm: {
          error: 'Ошибка аутентификации: пользователь не найден или неверные учетные данные',
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}

export const LoginFormErrorDark: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.DARK,
    {
      initialState: {
        loginForm: {
          error: 'Ошибка аутентификации: пользователь не найден или неверные учетные данные',
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}

export const LoginFormLight: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.LIGHT,
    {
      initialState: {
        loginForm: {
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}

export const LoginFormDark: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.DARK,
    {
      initialState: {
        loginForm: {
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}

export const LoginFormDisableLight: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.LIGHT,
    {
      initialState: {
        loginForm: {
          isLoading: true,
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}

export const LoginFormDisableDark: Story = {
  args: {},
  decorators: [ThemeDecorator(
    Theme.DARK,
    {
      initialState: {
        loginForm: {
          isLoading: true,
          username: 'admin',
          password: '123',
        },
      },
    },
  )],
}
