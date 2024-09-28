import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import CalendarIcon from '../../assets/icons/calendar.svg'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Shared/Icon',
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const IconLight: Story = {
  args: { Svg: CalendarIcon },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const IconDark: Story = {
  args: { Svg: CalendarIcon },
  decorators: [SBDecorator(Theme.DARK)],
}
