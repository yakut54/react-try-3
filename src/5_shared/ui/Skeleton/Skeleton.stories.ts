import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const SkeletonLight: Story = {
  args: {
    height: '300px',
    width: '100%',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const SkeletonDark: Story = {
  args: {
    height: '300px',
    width: '100%',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const SkeletonCircleLight: Story = {
  args: {
    borderRadius: '50%',
    height: '200px',
    width: '200px',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const SkeletonCircleDark: Story = {
  args: {
    borderRadius: '50%',
    height: '200px',
    width: '200px',
  },
  decorators: [SBDecorator(Theme.DARK)],
}
