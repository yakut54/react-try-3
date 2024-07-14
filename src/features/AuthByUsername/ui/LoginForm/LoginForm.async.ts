import type { FC, JSXElementConstructor, LazyExoticComponent } from 'react'
import { lazy } from 'react'
import type { LoginFormProps } from './LoginForm'

export const LoginFormAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import(/* webpackChunkName: "LoginForm" */'./LoginForm'))
    }, 400)
  }),
)
