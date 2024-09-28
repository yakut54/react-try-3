import {
  FC, memo, ReactNode, useCallback,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticleDetailsData } from '4_entities/Article'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
    className?: string
    children?: ReactNode
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const article = useAppSelector(getArticleDetailsData)
  const isCanEdit = useAppSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit/`)
  }, [article?.id, navigate])

  return (
    <div
      className={classNames(cls['article-details-page-header'], {}, [className])}
      {...otherProps}
    >
      <Button
        isLimitSize
        theme={ButtonVariant.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку статей')}
      </Button>

      {isCanEdit && (
        <Button
          isLimitSize
          className={cls['edit-btn']}
          theme={ButtonVariant.OUTLINE}
          onClick={onEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
})

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
