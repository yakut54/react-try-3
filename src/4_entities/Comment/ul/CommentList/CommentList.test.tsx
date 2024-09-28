import { CommentSchema } from '4_entities/Comment/model/types/CommentSchema'
import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { screen } from '@testing-library/react'
import { CommentList } from './CommentList'

describe('CommentList', () => {
  const mockComments: CommentSchema[] = [
    {
      id: '1',
      text: 'Первый комментарий',
      articleId: '1',
      user: {
        id: '1',
        username: 'Gavrila',
      },
    },
    {
      id: '2',
      text: '2 комментарий',
      articleId: '2',
      user: {
        id: '2',
        username: 'Abrashka',
      },
    },
  ]

  it('render comment list', () => {
    componentRender(<CommentList />)

    expect(screen.getByTestId('comment-list')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    componentRender(<CommentList isLoading />)

    const loadingCards = screen.getAllByTestId('comment-card-loading')
    expect(loadingCards).toHaveLength(3)
  })

  it('renders a list of comments', () => {
    componentRender(<CommentList comments={mockComments} />)

    // Проверяем, что каждый комментарий отображается
    const commentCards = screen.getAllByTestId('comment-card')
    expect(commentCards).toHaveLength(mockComments.length)
    expect(screen.getByText('Первый комментарий')).toBeInTheDocument()
    expect(screen.getByText('2 комментарий')).toBeInTheDocument()
  })

  it('renders a no comments message', () => {
    // Рендерим компонент без комментариев
    componentRender(<CommentList comments={[]} />)

    // Проверяем, что отображается сообщение об отсутствии комментариев
    expect(screen.getByText('Комментарии отсутствуют')).toBeInTheDocument()
  })
})
