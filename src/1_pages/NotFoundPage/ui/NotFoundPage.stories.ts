import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const NotFoundPageLight: Story = {
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const NotFoundPageDark: Story = {
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
