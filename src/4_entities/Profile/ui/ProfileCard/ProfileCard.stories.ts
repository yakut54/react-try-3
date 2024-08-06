import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const ProfileCardLight: Story = {
  args: {
    data: {
      username: 'admin',
      age: 43,
      first: 'Yakut',
      lastname: 'Sakha',
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Nsk',
      avatar: AvatarJPG,
    },
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ProfileCardDark: Story = {
  args: {
    data: {
      username: 'admin',
      age: 43,
      first: 'Yakut',
      lastname: 'Sakha',
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Nsk',
      avatar: AvatarJPG,
    },
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ProfileCardErrorLight: Story = {
  args: {
    error: 'error',
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ProfileCardErrorDark: Story = {
  args: {
    error: 'error',
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ProfileCardLoadLight: Story = {
  args: {
    isLoading: true,
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ProfileCardLoadDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [SBDecorator(Theme.DARK)],
}
