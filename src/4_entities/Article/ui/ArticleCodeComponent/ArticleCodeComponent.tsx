import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Code } from '5_shared/ui/Code/Code'
import type { ArticleCodeBlock } from '../../model/types/ArticleSchema'
import cls from './ArticleCodeComponent.module.scss'

interface ArticleCodeComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeComponent: FC<ArticleCodeComponentProps> = memo((props: ArticleCodeComponentProps) => {
  const { className, block } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-code-component'], {}, [className])}
    >
      <Code textCode={block.code} />
    </div>
  )
})

ArticleCodeComponent.displayName = 'ArticleCodeComponent'
