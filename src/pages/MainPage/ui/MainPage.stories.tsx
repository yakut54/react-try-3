import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
=======
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
>>>>>>> origin/master
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
}

export default meta

type Story = StoryObj<typeof MainPage>

export const MainPageLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const MainPageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
