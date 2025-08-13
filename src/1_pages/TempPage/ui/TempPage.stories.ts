import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import TempPage from './TempPage'

const meta: Meta<typeof TempPage> = {
  title: 'Pages/TempPage',
  component: TempPage,
}

export default meta
type Story = StoryObj<typeof TempPage>

export const TempPageLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TempPageDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
