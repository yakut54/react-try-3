import {
  FC, memo, ReactNode, useCallback,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
    value: string
    content: ReactNode
}

export interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    // eslint-disable-next-line no-unused-vars
    onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
  const {
    className, tabs, onTabClick, value,
  } = props

  const onClickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab)
  }, [onTabClick])

  return (
    <div
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          onClick={() => onClickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
        >
          {tab.value}
          {' '}
          <br />
          {tab.content}
        </Card>
      ))}
    </div>
  )
})

Tabs.displayName = 'Tabs'
