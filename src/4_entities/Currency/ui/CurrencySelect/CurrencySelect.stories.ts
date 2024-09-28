import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
  args: {},
}

export default meta

type Story = StoryObj<typeof CurrencySelect>

export const CurrencySelectNormal: Story = {
  args: {},
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}
