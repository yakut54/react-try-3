import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const onReloadPage = () => {
    window.location.reload()
  }

  return (
    <div
      className={classNames(cls['page-error'], {}, [className])}
    >
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <br />
      <Button onClick={onReloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
})

PageError.displayName = 'PageError'
