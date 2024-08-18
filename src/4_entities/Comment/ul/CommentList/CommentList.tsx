import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { CommentSchema } from '4_entities/Comment'
import { useTranslation } from 'react-i18next'
import { Text } from '5_shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

interface CommentListProps {
    className?: string
    isLoading?: boolean
    comments?: CommentSchema[]
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('comments')

  return (

    <div
      className={classNames(cls['comment-list'], {}, [className])}
    >
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            className={cls['comment-card']}
            comment={comment}
            key={comment.id}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  )
})

CommentList.displayName = 'CommentList'
