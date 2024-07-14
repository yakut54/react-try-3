import { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { LoginFormAsync as LoginForm } from './LoginForm.async'

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const LoginFormErrorLight: Story = {
  args: {},
  decorators: [SBDecorator(
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
  decorators: [SBDecorator(
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
  decorators: [SBDecorator(
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
  decorators: [SBDecorator(
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
  decorators: [SBDecorator(
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
  decorators: [SBDecorator(
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
