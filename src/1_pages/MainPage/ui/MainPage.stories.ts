import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
}

export default meta

type Story = StoryObj<typeof MainPage>

export const MainPageLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const MainPageDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
