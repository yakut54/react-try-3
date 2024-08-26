import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { mockArticleData } from '4_entities/Article/model/mocks/mockArticleData'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
}

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const ArticlesPageTileLight: Story = {
  args: {},
  decorators: [
    SBDecorator(
      Theme.LIGHT,
      {
        initialState: {
          articlesPage: {
            view: 'tile',
            entities: {
              1: mockArticleData,
              2: { ...mockArticleData, id: '2', img: AvatarJPG },
            },
            ids: ['1', '2'],
          },
        },
      },
    ),
  ],
}

export const ArticlesPageTileDark: Story = {
  args: {},
  decorators: [
    SBDecorator(
      Theme.DARK,
      {
        initialState: {
          articlesPage: {
            view: 'tile',
            entities: {
              1: mockArticleData,
              2: { ...mockArticleData, id: '2', img: AvatarJPG },
            },
            ids: ['1', '2'],
          },
        },
      },
    ),
  ],
}

export const ArticlesPageListLight: Story = {
  args: {},
  decorators: [
    SBDecorator(
      Theme.LIGHT,
      {
        initialState: {
          articlesPage: {
            view: 'list',
            entities: {
              1: mockArticleData,
              2: { ...mockArticleData, id: '2', img: AvatarJPG },
            },
            ids: ['1', '2'],
          },
        },
      },
    ),
  ],
}

export const ArticlesPageListDark: Story = {
  args: {},
  decorators: [
    SBDecorator(
      Theme.DARK,
      {
        initialState: {
          articlesPage: {
            view: 'list',
            entities: {
              1: mockArticleData,
              2: { ...mockArticleData, id: '2', img: AvatarJPG },
            },
            ids: ['1', '2'],
          },
        },
      },
    ),
  ],
}
