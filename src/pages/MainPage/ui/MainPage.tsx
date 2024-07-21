import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <br />
      <br />
      <Counter />
    </div>
  )
})

MainPage.displayName = 'MainPage'

export default MainPage
