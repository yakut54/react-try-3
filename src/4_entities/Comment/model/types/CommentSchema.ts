import { User } from '4_entities/User'

export interface CommentSchema {
    id: string
    text: string
    user: User
}
