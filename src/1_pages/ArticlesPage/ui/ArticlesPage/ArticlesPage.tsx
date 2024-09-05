import { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from '5_shared/lib/classNames/classNames'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleList, ArticleView, ArticleViewSwitcher } from '4_entities/Article'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import initArticlesPage from '../../model/services/initArticlesPage/initArticlesPage'
import fetchNextArticlePage from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesSelectors'
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
  const view = useAppSelector(getArticlesPageView)

  const dispatch = useDispatch()

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlePage())
    }
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
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
