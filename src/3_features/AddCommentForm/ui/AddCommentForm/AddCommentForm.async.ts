import type { FC, LazyExoticComponent } from 'react'
import { lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync: LazyExoticComponent<FC<AddCommentFormProps>> = lazy<FC<AddCommentFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import(/* webpackChunkName: "AddCommentForm" */'./AddCommentForm'))
    }, 400)
  }),
)
