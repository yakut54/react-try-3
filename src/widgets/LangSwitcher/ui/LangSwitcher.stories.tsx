import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'Widgets/LangSwitcher',
  component: LangSwitcher,
}

export default meta

type Story = StoryObj<typeof LangSwitcher>

export const LangSwitcherLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const LangSwitcherDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
