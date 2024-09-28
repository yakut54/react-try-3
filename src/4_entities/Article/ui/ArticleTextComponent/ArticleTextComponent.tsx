import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from '5_shared/ui/Text/Text'
import type { ArticleTextBlock } from '../../model/types/ArticleSchema'
import cls from './ArticleTextComponent.module.scss'

interface ArticleTextComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextComponent: FC<ArticleTextComponentProps> = memo((props: ArticleTextComponentProps) => {
  const { className, block } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-text-component'], {}, [className])}
    >
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}

      {block.paragraphs.map((paragraph) => (
        <Text
          className={cls.paragraph}
          key={paragraph}
          text={paragraph}
        />
      ))}
    </div>
  )
})

ArticleTextComponent.displayName = 'ArticleTextComponent'
