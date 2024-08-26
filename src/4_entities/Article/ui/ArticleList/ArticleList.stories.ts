import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { mockArticleData } from '../../model/mocks/mockArticleData'
import { ArticleList } from './ArticleList'

const meta: Meta<typeof ArticleList> = {
  title: 'Entities/Article/ArticleList',
  component: ArticleList,
}

export default meta
type Story = StoryObj<typeof ArticleList>

export const ArticleListLight: Story = {
  args: {
    view: 'list',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleListDark: Story = {
  args: {
    view: 'list',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleListOrange: Story = {
  args: {
    view: 'list',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}

export const ArticleTileLight: Story = {
  args: {
    view: 'tile',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleTileDark: Story = {
  args: {
    view: 'tile',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleTileOrange: Story = {
  args: {
    view: 'tile',
    articles: [mockArticleData, mockArticleData, mockArticleData],
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}

// ================ isLoading ===============

export const ArticleListLoadingLight: Story = {
  args: {
    isLoading: true,
    view: 'list',
    articles: [],
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleListLoadingDark: Story = {
  args: {
    isLoading: true,
    view: 'list',
    articles: [],
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleListLoadingOrange: Story = {
  args: {
    isLoading: true,
    view: 'list',
    articles: [],
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}

export const ArticleTileLoadingLight: Story = {
  args: {
    isLoading: true,
    view: 'tile',
    articles: [],
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleTileLoadingDark: Story = {
  args: {
    isLoading: true,
    view: 'tile',
    articles: [],
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleTileLoadingOrange: Story = {
  args: {
    isLoading: true,
    view: 'tile',
    articles: [],
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}
