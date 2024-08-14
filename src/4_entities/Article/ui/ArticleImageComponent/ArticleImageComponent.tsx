import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Text, TextAlign } from '5_shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/Article'
import cls from './ArticleImageComponent.module.scss'

interface ArticleImageComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageComponent: FC<ArticleImageComponentProps> = memo((props: ArticleImageComponentProps) => {
  const { className, block } = props

  return (
    <div
      className={classNames(cls['article-image-component'], {}, [className])}
    >
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  )
})

ArticleImageComponent.displayName = 'ArticleImageComponent'
