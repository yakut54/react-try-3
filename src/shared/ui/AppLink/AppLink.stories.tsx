import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/lib/storybookDecorators/RouterDecorator'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '',
  },
}

export default meta

type Story = StoryObj<typeof AppLink>

export const LinkNormal: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.NORMAL,
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const LinkInverted: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const LinkNormalDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.NORMAL,
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.DARK),
  ],
}

export const LinkInvertedDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.DARK),
  ],
}
