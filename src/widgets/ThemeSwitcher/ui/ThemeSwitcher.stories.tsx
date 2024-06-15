import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const ThemeSwitcherLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const ThemeSwitcherDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
