import type { FC, LazyExoticComponent } from 'react'
import { lazy } from 'react'
import type { LoginFormProps } from './LoginForm'

export const LoginFormAsync: LazyExoticComponent<FC<LoginFormProps>> = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import(/* webpackChunkName: "LoginForm" */'./LoginForm'))
    }, 400)
  }),
)
