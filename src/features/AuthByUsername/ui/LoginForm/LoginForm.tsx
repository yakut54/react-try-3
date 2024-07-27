import React, { FC, memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import loginByUserName from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
}

const initialLoginReducer: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useAppSelector(getLoginUsername)
  const password = useAppSelector(getLoginPassword)
  const isLoading = useAppSelector(getLoginIsLoading)
  const error = useAppSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginHandler = useCallback(async () => {
    await dispatch(loginByUserName({ username, password }))
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader
      reducers={initialLoginReducer}
      removeAfterUnmount
    >
      <div
        className={classNames(cls['login-form'], {}, [className])}
        {...otherProps}
      >
        <Text theme={TextTheme.NORMAl} title={t('Форма авторизации')} />

        {error && <Text text={error} theme={TextTheme.ERROR} />}

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
    </DynamicModuleLoader>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
