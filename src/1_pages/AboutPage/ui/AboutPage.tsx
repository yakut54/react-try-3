import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '5_shared/ui/PageWrapper/PageWrapper'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')

  return (
    <PageWrapper>
      <h1>{t('О сайте')}</h1>
    </PageWrapper>
  )
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
