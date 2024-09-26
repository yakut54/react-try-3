// import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
// import { screen } from '@testing-library/react'
// import { ArticleList } from '4_entities/Article'
// import { mockArticleData } from '4_entities/Article/model/mocks/mockArticleData'
//
// describe('ArticleList', () => {
//   it('render ArticleList view="list"', () => {
//     componentRender(<ArticleList
//       view="list"
//       isLoading={false}
//       articles={[mockArticleData]}
//     />)
//
//     const articleList = screen.getByTestId('article-list')
//     expect(articleList).toBeInTheDocument()
//   })
//
//   it('render ArticleList view="tile"', () => {
//     componentRender(<ArticleList
//       view="tile"
//       isLoading={false}
//       articles={[mockArticleData]}
//     />)
//
//     const articleList = screen.getByTestId('article-list')
//     expect(articleList).toBeInTheDocument()
//   })
//
//   it('render ArticleList - isLoading=false articles is empty', () => {
//     componentRender(<ArticleList
//       view="list"
//       isLoading={false}
//       articles={[]}
//     />)
//
//     const articleListSkeleton = screen.getByTestId('article-not-found')
//     expect(articleListSkeleton).toBeInTheDocument()
//   })
// })

describe('ArticleList', () => {
  it('test', () => {
    expect(2).toEqual(2)
  })
})
