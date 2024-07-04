import React, { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
    children?: ReactNode
}

export const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['login-form'], {}, [className])}
      {...otherProps}
    >
      <Input
        autofocus
        placeholder={t('Введите username')}
        className={cls.input}
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
      />
      <Button
        className={cls['login-btn']}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
