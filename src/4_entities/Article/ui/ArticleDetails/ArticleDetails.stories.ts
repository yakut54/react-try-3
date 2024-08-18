import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { articleData as data } from '../../model/mocks/articleData'
import { ArticleDetails } from './ArticleDetails'

const meta: Meta<typeof ArticleDetails> = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
}

export default meta
type Story = StoryObj<typeof ArticleDetails>

export const ArticleDetailsLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT, {
    initialState: {
      articleDetails: { data },
    },
  })],
}

export const ArticleDetailsDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK, {
    initialState: {
      articleDetails: { data },
    },
  })],
}

export const ArticleDetailsLoadingLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT, {
    initialState: {
      articleDetails: {
        isLoading: true,
      },
    },
  })],
}

export const ArticleDetailsLoadingDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK, {
    initialState: {
      articleDetails: {
        isLoading: true,
      },
    },
  })],
}

export const ArticleDetailsErrorLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT, {
    initialState: {
      articleDetails: {
        error: 'error',
      },
    },
  })],
}

export const ArticleDetailsErrorDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK, {
    initialState: {
      articleDetails: {
        error: 'error',
      },
    },
  })],
}
