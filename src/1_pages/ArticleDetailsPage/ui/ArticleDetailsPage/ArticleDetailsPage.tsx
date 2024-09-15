import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentList } from '4_entities/Comment'
import { ArticleDetails } from '4_entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCommentForm } from '3_features/AddCommentForm'
import { Text, TextMarginBottom } from '5_shared/ui/Text/Text'
import { classNames } from '5_shared/lib/classNames/classNames'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsPageProps {
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
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        className={classNames(cls['article-details-page'], {}, [className])}
      >
        <Button
          isLimitSize
          theme={ButtonVariant.OUTLINE}
          onClick={onBackToList}
        >
          {t('Назад к списку статей')}
        </Button>

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
      </PageWrapper>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
