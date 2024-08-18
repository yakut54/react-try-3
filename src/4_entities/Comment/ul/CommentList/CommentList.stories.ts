import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'Entities/CommentList',
  component: CommentList,
}

export default meta
type Story = StoryObj<typeof CommentList>

export const CommentListLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const CommentListDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK)],
}
