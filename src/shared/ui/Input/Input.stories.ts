import type { Meta, StoryObj } from '@storybook/react'

import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const InputLight: Story = {
  args: {
    type: 'text',
    value: 'light theme',
    placeholder: 'placeholder',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const InputDark: Story = {
  args: {
    type: 'text',
    value: 'dark theme',
    placeholder: 'placeholder',
  },
  decorators: [SBDecorator(Theme.DARK)],
}
