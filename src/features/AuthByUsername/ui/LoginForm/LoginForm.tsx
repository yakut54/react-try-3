import React, {
  FC, memo, ReactNode, useCallback,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import loginByUserName from 'features/AuthByUsername/model/servises/loginByUserName/loginByUserName'
import { loginActions } from '../..'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
    children?: ReactNode
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    password, username, isLoading, error,
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginHandler = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, password, username])

  return (
    <div
      className={classNames(cls['login-form'], {}, [className])}
      {...otherProps}
    >

      {error && <div>{error}</div>}

      <Input
        autofocus
        value={username}
        placeholder={t('Введите username')}
        className={cls.input}
        onChange={onChangeUsername}
      />
      <Input
        type="password"
        value={password}
        placeholder={t('Введите пароль')}
        className={cls.input}
        onChange={onChangePassword}
      />
      <Button
        disabled={isLoading}
        theme={ButtonVariant.OUTLINE}
        className={cls['login-btn']}
        onClick={onLoginHandler}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})

LoginForm.displayName = 'LoginForm'
