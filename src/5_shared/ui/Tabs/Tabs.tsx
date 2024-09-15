import { ReactNode, useCallback } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

export interface TabsProps<T extends string> {
    className?: string
    tabs: TabItem<T>[]
    value: T
    // eslint-disable-next-line no-unused-vars
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    onTabClick,
    value,
  } = props

  const onClickHandle = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab as TabItem<T>)
  }, [onTabClick])

  return (
    <div
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          onClick={onClickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}

Tabs.displayName = 'Tabs'
