import { FC, memo, useEffect } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextAlign, TextTheme } from '5_shared/ui/Text/Text'
import { Skeleton } from '5_shared/ui/Skeleton/Skeleton'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { getArticleDetailsData, getArticleDetailsError } from '../../model/selectors/getArticleDetails'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const initialArticleDetailsReducer: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  // const isLoading = useAppSelector(getArticleDetailsIsLoading)
  const isLoading = true
  const article = useAppSelector(getArticleDetailsData)
  const error = useAppSelector(getArticleDetailsError)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={600} />
        <Skeleton className={cls.skeleton} width="100%" height={600} />
        <Skeleton className={cls.skeleton} width="100%" height={600} />
        <Skeleton className={cls.skeleton} width="100%" height={600} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={error}
      />
    )
  } else {
    content = (<div>1</div>)
  }

  return (
    <DynamicModuleLoader
      reducers={initialArticleDetailsReducer}
      removeAfterUnmount
    >
      <div
        className={classNames(cls['article-details'], {}, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
