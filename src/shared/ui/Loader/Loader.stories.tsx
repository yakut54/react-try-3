import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
}

export default meta

type Story = StoryObj<typeof Loader>

export const LoaderLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const LoaderDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}