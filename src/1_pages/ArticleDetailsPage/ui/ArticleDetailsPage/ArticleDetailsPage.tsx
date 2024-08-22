import { FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentList } from '4_entities/Comment'
import { ArticleDetails } from '4_entities/Article'
import { AddCommentForm } from '3_features/AddCommentForm'
import { Text, TextMarginBottom } from '5_shared/ui/Text/Text'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import addCommentForArticle from '1_pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id = '1' } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useAppSelector(getArticleComments.selectAll)
  const isLoading = useAppSelector(getArticleDetailsCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls['article-details-page'], {}, [className])}
      >
        <ArticleDetails id={id} />
        <div className={classNames(cls['inverted-bg'], {}, [cls.mt])}>
          <Text
            mb={TextMarginBottom.MB2}
            title={t('Комментарии')}
            className={cls['comment-title']}
          />
          <AddCommentForm
            onSendComment={onSendComment}
          />
          <CommentList
            comments={comments}
            isLoading={isLoading}
          />
        </div>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
