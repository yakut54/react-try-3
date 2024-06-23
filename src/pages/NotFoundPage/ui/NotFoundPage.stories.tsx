import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
=======
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
>>>>>>> origin/master
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
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
