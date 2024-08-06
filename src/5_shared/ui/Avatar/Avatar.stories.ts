import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Shared/Avatar',
  component: Avatar,
  args: { src: AvatarJPG },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const AvatarNormal: Story = {
  args: {
    size: 300,
  },
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const AvatarDark: Story = {
  args: {
    size: 300,
  },
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}

export const AvatarSmallNormal: Story = {
  args: {
    size: 150,
  },
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const AvatarSmallDark: Story = {
  args: {
    size: 150,
  },
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
