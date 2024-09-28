import type { FC, LazyExoticComponent } from 'react'
import { lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync: LazyExoticComponent<FC<AddCommentFormProps>> = lazy<FC<AddCommentFormProps>>(
  () => import(/* webpackChunkName: "AddCommentForm" */'./AddCommentForm'),
)
