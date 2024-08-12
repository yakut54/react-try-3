import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Shared/Select',
  component: Select,
  args: {},
}

export default meta

type Story = StoryObj<typeof Select>

export const SelectNormal: Story = {
  args: {
    label: '38 попугаев',
    options: [
      { value: '36', content: 'content 1' },
      { value: '37', content: 'test ura!' },
      { value: '38', content: 'попугаев )' },
    ],
  },
  decorators: [
    SBDecorator(Theme.LIGHT),
  ],
}

export const SelectDark: Story = {
  args: {
    label: '38 попугаев',
    options: [
      { value: '36', content: 'content 2' },
      { value: '37', content: 'test 22 ' },
      { value: '38', content: 'попугаев ((' },
    ],
  },
  decorators: [
    SBDecorator(Theme.DARK),
  ],
}
