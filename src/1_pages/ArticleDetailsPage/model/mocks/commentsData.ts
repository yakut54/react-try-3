import { CommentSchema } from '4_entities/Comment'

export const comments: CommentSchema[] = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
  {
    id: '2',
    text: 'some comment',
    articleId: '1',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
]

export const ids = ['1', '2']
