import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'Widgets/LangSwitcher',
  component: LangSwitcher,
}

export default meta

type Story = StoryObj<typeof LangSwitcher>

export const LangSwitcherLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const LangSwitcherDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
