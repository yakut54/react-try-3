import React, { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import loginByUserName from '../../model/services/loginByUserName/loginByUserName'
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

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  const dispatch = useDispatch()

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
