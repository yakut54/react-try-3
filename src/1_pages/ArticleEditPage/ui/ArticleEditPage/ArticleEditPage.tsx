import { memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cls from './ArticleEditPage.module.scss'

export interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <PageWrapper
      className={classNames(cls['article-edit-page'], {}, [className])}
    >
      {
        isEdit
          ? t('Редактирование статьи с ID = ') + id
          : t('Создание новой статьи')
      }
    </PageWrapper>
  )
}

ArticleEditPage.displayName = 'ArticleEditPage'

export default memo(ArticleEditPage)
