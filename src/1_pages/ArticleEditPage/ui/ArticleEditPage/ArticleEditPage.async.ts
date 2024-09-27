import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'
import { ArticleEditPageProps } from './ArticleEditPage'

export const ArticleEditPageAsync: LazyExoticComponent<JSXElementConstructor<ArticleEditPageProps>> = lazy(
  () => import(
    /* webpackChunkName: "ArticleEditPage" */
    './ArticleEditPage'
  ),
)
