import React, { FC, memo, useCallback } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  Text, TextAlign, TextSize, TextTheme,
} from '5_shared/ui/Text/Text'
import { Skeleton } from '5_shared/ui/Skeleton/Skeleton'
import { Avatar } from '5_shared/ui/Avatar/Avatar'
import EyeIcon from '5_shared/assets/icons/eye.svg'
import CalendarIcon from '5_shared/assets/icons/calendar.svg'
import { Icon } from '5_shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '4_entities/Article/model/types/Article'
import { ArticleCodeComponent } from '4_entities/Article/ui/ArticleCodeComponent/ArticleCodeComponent'
import { ArticleImageComponent } from '4_entities/Article/ui/ArticleImageComponent/ArticleImageComponent'
import { ArticleTextComponent } from '4_entities/Article/ui/ArticleTextComponent/ArticleTextComponent'
import { useTranslation } from 'react-i18next'
import { articleDetailsReducer } from '4_entities/Article/model/slices/articleDetailsSlice'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getArticleDetailsIsLoading)
  const article = useAppSelector(getArticleDetailsData)
  const error = useAppSelector(getArticleDetailsError)

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeComponent
          block={block}
          className={cls.block}
        />
      )
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageComponent
          block={block}
          className={cls.block}
        />
      )
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextComponent
          block={block}
          className={cls.block}
        />
      )
    default:
      return null
    }
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={cls.title} width={300} height={44} />
        <Skeleton className={cls.skeleton} width={600} height={32} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи.')}
      />
    )
  } else {
    content = (
      <>
        <div className={cls['avatar-wrapper']}>
          <Avatar
            size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </div>
        <Text
          size={TextSize.L}
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div
          className={classNames(cls['article-info'], {}, [cls.skeleton])}
        >
          <Icon
            Svg={EyeIcon}
            className={cls.icon}
          />
          <Text text={String(article?.views)} />
        </div>
        <div
          className={classNames(cls['article-info'], {}, [])}
        >
          <Icon
            Svg={CalendarIcon}
            className={cls.icon}
          />
          <Text text={article?.createdAt} />
        </div>

        {article?.blocks.map((block) => (
          <React.Fragment key={block.id}>
            {renderBlock(block)}
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls['article-details'], {}, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
