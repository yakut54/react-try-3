import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Clear: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonTheme.CLEAR,
  },
}
