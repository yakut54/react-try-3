import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from 'shared/lib/storybookDecorators/SBDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const ModalLight: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad alias amet corporis dolor expedita 
        harum incidunt maiores molestias nesciunt nihil omnis possimus tempore voluptates voluptatibus.`,
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ModalDark: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad alias amet corporis dolor expedita 
        harum incidunt maiores molestias nesciunt nihil omnis possimus tempore voluptates voluptatibus.`,
  },
  decorators: [SBDecorator(Theme.DARK)],
}
