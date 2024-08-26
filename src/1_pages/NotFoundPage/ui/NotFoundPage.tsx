import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '5_shared/lib/classNames/classNames'
import { PageWrapper } from '5_shared/ui/PageWrapper/PageWrapper'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      className={classNames(cls['not-found-page'], {}, [className])}
    >
      {t('Страница не найдена')}
    </PageWrapper>
  )
})

NotFoundPage.displayName = 'NotFoundPage'
