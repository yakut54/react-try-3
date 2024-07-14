import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
}

export default meta

type Story = StoryObj<typeof Loader>

export const LoaderLight: Story = {
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const LoaderDark: Story = {
  decorators: [SBDecorator(Theme.DARK)],
}
