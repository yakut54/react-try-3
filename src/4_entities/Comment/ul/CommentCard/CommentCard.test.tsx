import { CommentSchema } from '4_entities/Comment'
import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { screen } from '@testing-library/react'
import { CommentCard } from './CommentCard'

describe('CommentCard', () => {
  const mockComment: CommentSchema = {
    id: '1',
    text: 'Страдал Гаврила от гангрены, Гаврила от гангрены слёг…',
    articleId: '1',
    user: {
      id: '1',
      username: 'Gavrila',
      avatar: 'https://testing-library.com/img/octopus-64x64.png',
    },
  }

  it('test render', () => {
    componentRender(<CommentCard isLoading />)

    // Проверка, что компоненты Skeleton отображаются
    expect(screen.getByTestId('comment-card-loading')).toBeInTheDocument()
  })

  it('renders comment correctly when provided', () => {
    componentRender(<CommentCard comment={mockComment} />)

    // Проверка, что карточка комментария отображается
    expect(screen.getByTestId('comment-card')).toBeInTheDocument()

    // Проверка текста комментария
    expect(screen.getByText('Страдал Гаврила от гангрены, Гаврила от гангрены слёг…')).toBeInTheDocument()

    // Проверка имени пользователя
    expect(screen.getByText('Gavrila')).toBeInTheDocument()

    // Проверка, что аватар пользователя отображается
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', 'https://testing-library.com/img/octopus-64x64.png')
  })

  it('renders fallback avatar if no avatar is provided', () => {
    const commentWithoutAvatar: CommentSchema = {
      ...mockComment,
      user: {
        ...mockComment.user,
        avatar: undefined, // Убираем аватар
      },
    }

    componentRender(<CommentCard comment={commentWithoutAvatar} />)

    // Проверка, что карточка комментария отображается
    expect(screen.getByTestId('comment-card')).toBeInTheDocument()

    // Проверка текста комментария
    expect(screen.getByText('Страдал Гаврила от гангрены, Гаврила от гангрены слёг…')).toBeInTheDocument()
    expect(screen.getByText('Gavrila')).toBeInTheDocument()

    // Проверка, что рендерится аватар по умолчанию
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', expect.stringContaining('test-file-stub'))
  })
})
