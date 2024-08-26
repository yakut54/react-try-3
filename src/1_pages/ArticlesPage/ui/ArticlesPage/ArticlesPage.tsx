import { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleView, ArticleViewSwitcher } from '4_entities/Article'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { PageWrapper } from '5_shared/ui/PageWrapper/PageWrapper'
import fetchArticlesList from '../../model/services/fetchArticlesList'
import {
  getArticlesPageError,
  getArticlesPageIsHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView,
} from '../../model/selectors/getArticlesSelectors'
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice'
import cls from './ArticlesPage.module.scss'

export interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const articles = useAppSelector(getArticles.selectAll)
  const isLoading = useAppSelector(getArticlesPageIsLoading)
  const error = useAppSelector(getArticlesPageError)
  const view = useAppSelector(getArticlesPageView)
  const page = useAppSelector(getArticlesPageNum)
  const isHasMore = useAppSelector(getArticlesPageIsHasMore)
  const dispatch = useDispatch()

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      if (isHasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1))
        dispatch(fetchArticlesList({ page: page + 1 }))
      }
    }
  }, [dispatch, isHasMore, isLoading, page])

  useInitialEffect(() => {
    dispatch(articlePageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        onScrollEnd={onLoadNextPart}
        className={classNames(cls['articles-page'], {}, [className])}
      >
        <h1>{t('Страница со статьями')}</h1>

        <ArticleViewSwitcher
          view={view}
          onViewClick={onChangeView}
        />

        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />

      </PageWrapper>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
