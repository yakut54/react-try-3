import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { PageWrapper } from './PageWrapper'

const meta: Meta<typeof PageWrapper> = {
  title: 'Shared/PageWrapper',
  component: PageWrapper,
}

export default meta
type Story = StoryObj<typeof PageWrapper>

export const PageWrapperLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const PageWrapperDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
