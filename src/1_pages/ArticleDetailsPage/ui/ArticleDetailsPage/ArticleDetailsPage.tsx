import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { ArticleDetails } from '4_entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '5_shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div
        className={classNames(cls['article-details-page'], {}, [className])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Статья не найдена')}
        />
      </div>
    )
  }

  return (
    <div
      className={classNames(cls['article-details-page'], {}, [className])}
    >
      <ArticleDetails
        id={id}
      />
    </div>
  )
}

export default memo(ArticleDetailsPage)
