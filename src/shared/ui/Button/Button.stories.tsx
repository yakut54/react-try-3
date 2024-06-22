import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const ClearLight: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearDark: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineLight: Story = {
  args: {
    children: 'OutlineLight',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Story = {
  args: {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeLLight: Story = {
  args: {
    children: 'OutlineSizeLLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeMLight: Story = {
  args: {
    children: 'OutlineSizeMLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeXLLight: Story = {
  args: {
    children: 'OutlineSizeXLLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeLDark: Story = {
  args: {
    children: 'OutlineSizeLLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeMDark: Story = {
  args: {
    children: 'OutlineSizeMLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeXLDark: Story = {
  args: {
    children: 'OutlineSizeXLLight',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundLight: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundDark: Story = {
  args: {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundInvertedLight: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMDark: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMLight: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareLDark: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareLLight: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareXLDark: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareXLLight: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
