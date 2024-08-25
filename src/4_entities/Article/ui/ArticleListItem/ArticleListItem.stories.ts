import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { mockArticleData } from '../../model/mocks/mockArticleData'
import { ArticleListItem } from './ArticleListItem'

const meta: Meta<typeof ArticleListItem> = {
  title: 'Entities/Article/ArticleListItem',
  component: ArticleListItem,
}

export default meta
type Story = StoryObj<typeof ArticleListItem>

export const ArticleListItemLight: Story = {
  args: {
    view: 'list',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleListItemDark: Story = {
  args: {
    view: 'list',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleListItemOrange: Story = {
  args: {
    view: 'list',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}

export const ArticleTileItemLight: Story = {
  args: {
    view: 'tile',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const ArticleTileItemDark: Story = {
  args: {
    view: 'tile',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.DARK)],
}

export const ArticleTileItemOrange: Story = {
  args: {
    view: 'tile',
    article: mockArticleData,
  },
  decorators: [SBDecorator(Theme.ORANGE)],
}
