import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'Pages/AboutPage',
  component: AboutPage,
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const AboutPageLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const AboutPageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
