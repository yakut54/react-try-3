import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Shared/Tabs',
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const TabsLight: Story = {
  args: {
    tabs: [
      { value: 'Tab value 1', content: 'Tab 1' },
      { value: 'Tab value 2', content: 'Tab 2' },
      { value: 'Tab value 3', content: 'Tab 3' },
    ],
    value: 'Tab value 1',
    onTabClick: action('onTabClick'),
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TabsDark: Story = {
  args: {
    tabs: [
      { value: 'Tab value 1', content: 'Tab 1' },
      { value: 'Tab value 2', content: 'Tab 2' },
      { value: 'Tab value 3', content: 'Tab 3' },
    ],
    value: 'Tab value 3',
    onTabClick: action('onTabClick'),
  },
  decorators: [SBDecorator(Theme.DARK)],
}
