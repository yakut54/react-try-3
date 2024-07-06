import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonVariant } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const ClearLight: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonVariant.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearDark: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonVariant.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedLight: Story = {
  args: {
    children: 'CLEAR_INVERTED',
    theme: ButtonVariant.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearInvertedDark: Story = {
  args: {
    children: 'CLEAR_INVERTED',
    theme: ButtonVariant.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineLight: Story = {
  args: {
    children: 'OutlineLight',
    theme: ButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Story = {
  args: {
    children: 'OutlineDark',
    theme: ButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeLLight: Story = {
  args: {
    children: 'OutlineSizeLLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeMLight: Story = {
  args: {
    children: 'OutlineSizeMLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeXLLight: Story = {
  args: {
    children: 'OutlineSizeXLLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeLDark: Story = {
  args: {
    children: 'OutlineSizeLLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeMDark: Story = {
  args: {
    children: 'OutlineSizeMLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeXLDark: Story = {
  args: {
    children: 'OutlineSizeXLLight',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundLight: Story = {
  args: {
    children: 'Outline',
    theme: ButtonVariant.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundDark: Story = {
  args: {
    children: 'BACKGROUND',
    theme: ButtonVariant.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundInvertedLight: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonVariant.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonVariant.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMDark: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMLight: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareLDark: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareLLight: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareXLDark: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareXLLight: Story = {
  args: {
    children: '>',
    theme: ButtonVariant.BACKGROUND,
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OpacityLight: Story = {
  args: {
    children: 'Disabled Light',
    theme: ButtonVariant.BACKGROUND,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OpacityDark: Story = {
  args: {
    children: 'Disabled Dark',
    theme: ButtonVariant.BACKGROUND,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
