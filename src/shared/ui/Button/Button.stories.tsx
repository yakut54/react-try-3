import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
<<<<<<< HEAD
import { Button, ButtonSize, ButtonVariant } from './Button'
=======
import { Button, ButtonSize, ButtonTheme } from './Button'
>>>>>>> origin/master

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
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Story = {
  args: {
    children: 'OutlineDark',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeLLight: Story = {
  args: {
    children: 'OutlineSizeLLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeMLight: Story = {
  args: {
    children: 'OutlineSizeMLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeXLLight: Story = {
  args: {
    children: 'OutlineSizeXLLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeLDark: Story = {
  args: {
    children: 'OutlineSizeLLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeMDark: Story = {
  args: {
    children: 'OutlineSizeMLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeXLDark: Story = {
  args: {
    children: 'OutlineSizeXLLight',
<<<<<<< HEAD
    theme: ButtonVariant.OUTLINE,
=======
    theme: ButtonTheme.OUTLINE,
>>>>>>> origin/master
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundLight: Story = {
  args: {
    children: 'Outline',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundDark: Story = {
  args: {
    children: 'BACKGROUND',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundInvertedLight: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND_INVERTED,
=======
    theme: ButtonTheme.BACKGROUND_INVERTED,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'BACKGROUND_INVERTED',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND_INVERTED,
=======
    theme: ButtonTheme.BACKGROUND_INVERTED,
>>>>>>> origin/master
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMDark: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMLight: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareLDark: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareLLight: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareXLDark: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareXLLight: Story = {
  args: {
    children: '>',
<<<<<<< HEAD
    theme: ButtonVariant.BACKGROUND,
=======
    theme: ButtonTheme.BACKGROUND,
>>>>>>> origin/master
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
