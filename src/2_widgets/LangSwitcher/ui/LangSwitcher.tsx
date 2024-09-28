import React, { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
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
      {short ? t('Короткий перевод') : t('Перевод')}
    </Button>
  )
})

LangSwitcher.displayName = 'LangSwitcher'
