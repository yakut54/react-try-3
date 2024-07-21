import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const ProfilePageLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const ProfilePageDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
