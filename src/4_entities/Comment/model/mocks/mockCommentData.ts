import { CommentSchema } from '4_entities/Comment'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'

export const mockCommentData: CommentSchema = {
  id: '1',
  text: 'Lorem ipsum dolor sit amet',
  articleId: '1',
  user: {
    id: '1',
    username: 'Lorem ipsum',
    avatar: AvatarJPG,
  },
}
