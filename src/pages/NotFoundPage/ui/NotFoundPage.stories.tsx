import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const NotFoundPageLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const NotFoundPageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
