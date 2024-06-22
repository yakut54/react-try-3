import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
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
