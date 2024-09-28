import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Avatar } from '5_shared/ui/Avatar/Avatar'
import { Text, TextSize } from '5_shared/ui/Text/Text'
import { Skeleton } from '5_shared/ui/Skeleton/Skeleton'
import { AppLink } from '5_shared/ui/AppLink/AppLink'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { CommentSchema } from '../../model/types/CommentSchema'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    isLoading?: boolean
    comment?: CommentSchema
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div
        data-testid="comment-card-loading"
        className={classNames(cls['comment-card'], {}, [className, cls.loading])}
      >
        <div className={cls['comment-card-header']}>
          <Skeleton width={50} height={50} borderRadius="50%" />
          <Skeleton width={200} height={18} className={cls.username} />
        </div>
        <Skeleton width="100%" height={60} className={cls.text} />
      </div>
    )
  }

  if (comment) {
    return (
      <div
        data-testid="comment-card"
        className={classNames(cls['comment-card'], {}, [className])}
      >
        <AppLink to={RoutePath.profile + comment.user.id} className={cls['comment-card-header']}>
          <Avatar size={50} src={comment.user.avatar} />
          <Text
            className={cls.username}
            title={comment.user.username}
            size={TextSize.M}
          />
        </AppLink>
        <Text
          className={cls.text}
          text={comment.text}
        />
      </div>
    )
  }

  return null
})

CommentCard.displayName = 'CommentCard'
