import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'Pages/AboutPage',
  component: AboutPage,
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const AboutPageLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const AboutPageDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
