import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const ProfilePageLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT, {
      initialState: {
        profile: {
          form: {
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
      },
    }),
  ],
}

export const ProfilePageDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK, {
      initialState: {
        profile: {
          form: {
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
      },
    }),
  ],
}

export const ProfilePageReadonlyLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT, {
      initialState: {
        profile: {
          form: {
            username: 'admin',
            age: 43,
            first: 'Yakut',
            lastname: 'Sakha',
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Nsk',
            avatar: AvatarJPG,
          },
          readonly: true,
        },
      },
    }),
  ],
}

export const ProfilePageReadonlyDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK, {
      initialState: {
        profile: {
          form: {
            username: 'admin',
            age: 43,
            first: 'Yakut',
            lastname: 'Sakha',
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Nsk',
            avatar: AvatarJPG,
          },
          readonly: true,
        },
      },
    }),
  ],
}
