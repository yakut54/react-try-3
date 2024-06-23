import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
  const { className, short } = props

  const { t, i18n } = useTranslation()
  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls['lang-switcher'], {}, [className])}
      onClick={toggle}
      theme={ButtonVariant.CLEAR}
    >
<<<<<<< HEAD
      {short ? t('Короткий перевод') : t('Перевод')}
=======
      {t(short ? 'Короткий перевод' : 'Перевод')}
>>>>>>> origin/master
    </Button>
  )
}
