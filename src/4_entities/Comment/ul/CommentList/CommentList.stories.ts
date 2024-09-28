import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { CssSBDecorator } from '5_shared/lib/storybookDecorators/CssSBDecorator'
import { CommentSchema } from '4_entities/Comment'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'Entities/Comment/CommentList',
  component: CommentList,
}

const comments: CommentSchema[] = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet',
    articleId: '1',
    user: {
      id: '1',
      username: 'Lorem ipsum',
      avatar: AvatarJPG,
    },
  },
  {
    id: '2',
    text: 'Lorem ipsum dolor 2',
    articleId: '2',
    user: {
      id: '2',
      username: 'Lorem 2',
      avatar: AvatarJPG,
    },
  },
  {
    id: '3',
    text: 'Lorem ipsum 3',
    articleId: '3',
    user: {
      id: '3',
      username: 'Lorem 3',
      avatar: AvatarJPG,
    },
  },
]

export default meta
type Story = StoryObj<typeof CommentList>

export const CommentListLight: Story = {
  args: {
    comments,
  },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.LIGHT),
  ],
}

export const CommentListDark: Story = {
  args: {
    comments,
  },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.DARK),
  ],
}

export const CommentListLoadingLight: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.LIGHT),
  ],
}

export const CommentListLoadingDark: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.DARK),
  ],
}

export const CommentListLoadingOrange: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.ORANGE),
  ],
}
