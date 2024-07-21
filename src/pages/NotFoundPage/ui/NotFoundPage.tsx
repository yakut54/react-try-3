import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['not-found-page'], {}, [className])}
    >
      {t('Страница не найдена')}
    </div>
  )
})

NotFoundPage.displayName = 'NotFoundPage'
