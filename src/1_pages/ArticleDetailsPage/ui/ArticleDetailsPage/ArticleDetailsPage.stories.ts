import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '0_app/providers/ThemeProvider'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { mockArticleData } from '4_entities/Article/model/mocks/mockArticleData'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'Pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPage>

export const ArticleDetailsPageLight: Story = {
  args: {},
  decorators: [SBDecorator(Theme.LIGHT, {
    initialState: {
      articleDetails: {
        data: mockArticleData,
      },
    },
  })],
}

export const ArticleDetailsPageDark: Story = {
  args: {},
  decorators: [SBDecorator(Theme.DARK, {
    initialState: {
      articleDetails: {
        data: mockArticleData,
      },
    },
  })],
}
