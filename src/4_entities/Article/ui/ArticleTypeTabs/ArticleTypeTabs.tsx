import { useMemo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { TabItem, Tabs } from '5_shared/ui/Tabs/Tabs'
import { ArticleType } from '4_entities/Article'

interface ArticleTypeTabsProps<T extends string> {
    className?: string
    value: T
    // eslint-disable-next-line no-unused-vars
    onChangeType: (tab: TabItem<T>) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps<ArticleType>) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    { value: ArticleType.ALL, content: t('Все статьи') },
    { value: ArticleType.IT, content: t('АйТи') },
    { value: ArticleType.SCIENCE, content: t('Наука') },
    { value: ArticleType.POLITICS, content: t('Политика') },
    { value: ArticleType.ECONOMICS, content: t('Экономика') },
  ], [t])

  return (
    <Tabs<ArticleType>
      value={value}
      tabs={typeTabs}
      className={classNames('', {}, [className])}
      onTabClick={onChangeType}
    />
  )
}

ArticleTypeTabs.displayName = 'ArticleTypeTabs'
