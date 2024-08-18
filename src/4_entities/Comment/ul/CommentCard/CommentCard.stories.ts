import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'Entities/CommentCard',
  component: CommentCard,
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const CommentCardLight: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Lorem ipsum dolor sit amet',
      user: {
        id: '1',
        username: 'Lorem ipsum',
        avatar: AvatarJPG,
      },
    },
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const CommentCardDark: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Lorem ipsum dolor sit amet',
      user: {
        id: '1',
        username: 'Lorem ipsum',
        avatar: AvatarJPG,
      },
    },
  },
  decorators: [SBDecorator(Theme.DARK)],
}
