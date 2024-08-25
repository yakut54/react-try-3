import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { screen } from '@testing-library/react'
import { ArticleList } from '4_entities/Article'
import { mockArticleData } from '4_entities/Article/model/mocks/mockArticleData'

describe('ArticleList', () => {
  it('render ArticleList view="list"', () => {
    componentRender(<ArticleList
      view="list"
      isLoading={false}
      articles={[mockArticleData]}
    />)

    const articleList = screen.getByTestId('article-list')
    expect(articleList).toBeInTheDocument()
  })

  it('render ArticleList view="tile"', () => {
    componentRender(<ArticleList
      view="tile"
      isLoading={false}
      articles={[mockArticleData]}
    />)

    const articleList = screen.getByTestId('article-list')
    expect(articleList).toBeInTheDocument()
  })

  it('render ArticleList view="list" is loading', () => {
    componentRender(<ArticleList
      view="list"
      isLoading
      articles={[mockArticleData]}
    />)

    const articleListSkeleton = screen.getByTestId('article-list-skeleton')
    expect(articleListSkeleton).toBeInTheDocument()
  })

  it('render ArticleList view="tile" is loading', () => {
    componentRender(<ArticleList
      view="tile"
      isLoading
      articles={[mockArticleData]}
    />)

    const articleListSkeleton = screen.getByTestId('article-list-skeleton')
    expect(articleListSkeleton).toBeInTheDocument()
  })
})
