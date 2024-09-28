import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { screen } from '@testing-library/react'
import { ArticleListItem } from './ArticleListItem'
import { mockArticleData } from '../../model/mocks/mockArticleData'

describe('ArticleListItem', () => {
  it('render ArticleListItem view="list"', () => {
    componentRender(<ArticleListItem
      view="list"
      article={mockArticleData}
    />)

    const listItem = screen.getByTestId('list-item')
    expect(listItem).toBeInTheDocument()
  })

  it('render ArticleListItem view="tile"', () => {
    componentRender(<ArticleListItem
      view="tile"
      article={mockArticleData}
    />)

    const listItem = screen.getByTestId('tile-item')
    expect(listItem).toBeInTheDocument()
  })
})
