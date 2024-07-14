import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const TextLight: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TextDark: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const OnlyTextLight: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const OnlyTitleLight: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const TextErrorLight: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TextErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.DARK)],
}
