import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '4_entities/Counter'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return (
    <PageWrapper>
      <h1>{t('Главная страница')}</h1>
      <br />
      <br />
      <Counter />
    </PageWrapper>
  )
})

MainPage.displayName = 'MainPage'

export default memo(MainPage)
