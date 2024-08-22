import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { CssSBDecorator } from '5_shared/lib/storybookDecorators/CssSBDecorator'
import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const AddCommentFormLight: Story = {
  args: {},
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.LIGHT),
  ],
}

export const AddCommentFormDark: Story = {
  args: {},
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.DARK),
  ],
}

export const AddCommentFormOrange: Story = {
  args: {},
  decorators: [
    CssSBDecorator('sb-comment-list'),
    SBDecorator(Theme.ORANGE),
  ],
}
