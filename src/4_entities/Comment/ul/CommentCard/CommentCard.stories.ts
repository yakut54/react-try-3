import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { CssSBDecorator } from '5_shared/lib/storybookDecorators/CssSBDecorator'
import { CommentSchema } from '4_entities/Comment'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'Entities/Comment/CommentCard',
  component: CommentCard,
}

const comment: CommentSchema = {
  id: '1',
  text: 'Lorem ipsum dolor sit amet',
  articleId: '1',
  user: {
    id: '1',
    username: 'Lorem ipsum',
    avatar: AvatarJPG,
  },
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const CommentCardLight: Story = {
  args: { comment },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.LIGHT),
  ],
}

export const CommentCardDark: Story = {
  args: { comment },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.DARK),
  ],
}

export const CommentCardOrange: Story = {
  args: { comment },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.ORANGE),
  ],
}

export const CommentCardLoadingLight: Story = {
  args: { comment, isLoading: true },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.LIGHT),
  ],
}
