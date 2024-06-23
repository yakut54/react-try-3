import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
=======
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
>>>>>>> origin/master
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
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
