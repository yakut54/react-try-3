import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '5_shared/ui/Icon/Icon'
import { Card } from '5_shared/ui/Card/Card'
import { useTranslation } from 'react-i18next'
import EyeIcon from '5_shared/assets/icons/eye.svg'
import { Avatar } from '5_shared/ui/Avatar/Avatar'
import { Text, TextMarginBottom } from '5_shared/ui/Text/Text'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent'
import {
  ArticleBlockType, ArticleSchema, ArticleTextBlock, ArticleView,
} from '../../model/types/ArticleSchema'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: ArticleSchema
    view?: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view = 'tile',
  } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    console.log(123)
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  const $types: JSX.Element = <Text text={article.type.join(', ')} className={cls.types} />
  const $views: JSX.Element = (
    <>
      <Text text={String(article.views)} className={cls.views} mb={TextMarginBottom.MB0} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === 'list') {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <div
        data-testid="list-item"
        className={classNames(
          cls['article-list-item'],
          {},
          [className, cls[view]],
        )}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar src={article.user.avatar} size={50} />
            <Text text={article.user.username} className={cls.username} mb={TextMarginBottom.MB0} />
            <Text text={article.createdAt} className={cls.date} mb={TextMarginBottom.MB0} />
          </div>

          <Text title={article.title} className={cls.title} />
          {$types}
          <img alt={article.title} src={article.img} className={cls.img} />

          {textBlock && <ArticleTextComponent block={textBlock} className={cls['text-block']} />}

          <div className={cls.footer}>
            <Button
              onClick={onOpenArticle}
              theme={ButtonVariant.OUTLINE}
            >
              {t('Читать далее')}
            </Button>
            {$views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      data-testid="tile-item"
      onClick={onOpenArticle}
      className={classNames(
        cls['article-list-item'],
        {},
        [className, cls[view]],
      )}
    >
      <Card
        className={classNames(cls.card, {}, [cls.max])}
      >
        <div className={cls['image-wrapper']}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls['info-wrapper']}>
          {$types}
          {$views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  )
})

ArticleListItem.displayName = 'ArticleListItem'
