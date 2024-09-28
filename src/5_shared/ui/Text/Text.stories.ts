import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import {
  Text, TextAlign, TextSize, TextTheme,
} from './Text'

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

export const TextSizeMLight: Story = {
  args: {
    align: TextAlign.CENTER,
    size: TextSize.M,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TextSizeMDark: Story = {
  args: {
    align: TextAlign.CENTER,
    size: TextSize.M,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const TextSizeLLight: Story = {
  args: {
    align: TextAlign.CENTER,
    size: TextSize.L,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TextSizeLDark: Story = {
  args: {
    align: TextAlign.CENTER,
    size: TextSize.L,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const TextSizeXLLight: Story = {
  args: {
    size: TextSize.XL,
    align: TextAlign.CENTER,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const TextSizeXLDark: Story = {
  args: {
    size: TextSize.XL,
    align: TextAlign.CENTER,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque expedita fuga iure iusto mollitia officia pariatur porro quos sed!',
  },
  decorators: [SBDecorator(Theme.DARK)],
}
