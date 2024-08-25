import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { Text } from '5_shared/ui/Text/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const CardLight: Story = {
  args: { children: <Text text="Lorem Ipsum dolor pesda jigurda" title="Lorem Ipsum" /> },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const CardDark: Story = {
  args: { children: <Text text="Lorem Ipsum dolor pesda jigurda" title="Lorem Ipsum" /> },
  decorators: [SBDecorator(Theme.DARK)],
}
