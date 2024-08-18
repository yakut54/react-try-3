import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { CommentSchema } from '4_entities/Comment'
import { Avatar } from '5_shared/ui/Avatar/Avatar'
import { Text, TextSize } from '5_shared/ui/Text/Text'
import { Skeleton } from '5_shared/ui/Skeleton/Skeleton'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    isLoading?: boolean
    comment: CommentSchema
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div
        className={classNames(cls['comment-card'], {}, [className])}
      >
        <div className={cls['comment-card-header']}>
          <Skeleton width={50} height={50} borderRadius="50%" />
          <Skeleton width={200} height={18} className={cls.username} />
        </div>
        <Skeleton width="100%" height={60} className={cls.text} />
      </div>
    )
  }

  return (
    <div
      className={classNames(cls['comment-card'], {}, [className])}
    >
      <div className={cls['comment-card-header']}>
        {comment.user.avatar && <Avatar size={50} src={comment.user.avatar} />}
        <Text
          className={cls.username}
          title={comment.user.username}
          size={TextSize.M}
        />
      </div>
      <Text
        className={cls.text}
        text={comment.text}
      />
    </div>
  )
})

CommentCard.displayName = 'CommentCard'
