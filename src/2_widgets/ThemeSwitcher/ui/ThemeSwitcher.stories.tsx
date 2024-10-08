import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const ThemeSwitcherLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const ThemeSwitcherDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
