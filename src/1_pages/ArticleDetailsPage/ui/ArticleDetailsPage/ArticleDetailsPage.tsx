import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentList } from '4_entities/Comment'
import { ArticleDetails } from '4_entities/Article'
import { Text, TextTheme } from '5_shared/ui/Text/Text'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleCommentReducer, getArticleComments } from '1_pages/ArticleDetailsPage/model/slices/articleCommentsSlice'
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '1_pages/ArticleDetailsPage/model/selectors/getArticleComments'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId,
} from '1_pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useAppSelector(getArticleComments.selectAll)
  const isLoading = useAppSelector(getArticleCommentsIsLoading)
  const error = useAppSelector(getArticleCommentsError)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const reducers: ReducersList = {
    articleComments: articleCommentReducer,
  }

  if (!id) {
    return (
      <div
        className={classNames(cls['article-details-page'], {}, [className])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Статья не найдена')}
        />
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls['article-details-page'], {}, [className])}
      >
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls['comment-title']} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
