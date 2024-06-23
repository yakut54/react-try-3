import type { Meta, StoryObj } from '@storybook/react'
<<<<<<< HEAD
=======
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
>>>>>>> origin/master
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/lib/storybookDecorators/ThemeDecorator'
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
