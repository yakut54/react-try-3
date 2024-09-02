import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'
import { ArticleDetailsPageProps } from './ArticleDetailsPage'

export const ArticleDetailsPageAsync: LazyExoticComponent<JSXElementConstructor<ArticleDetailsPageProps>> = lazy(
  () => import(
    /* webpackChunkName: "ArticleDetailsPage" */
    './ArticleDetailsPage'
  ),
)
