import { FC, memo, useState } from 'react'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SidebarItemList } from '../../model/sidebarItemType'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
  const { className } = props

  const [test, setTest] = useState<number>(0)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const onToggle = () => setIsCollapsed((prev) => !prev)

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: isCollapsed },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        isSquare
        size={ButtonSize.L}
        theme={ButtonVariant.BACKGROUND_INVERTED}
        className={cls['collapse-btn']}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <h1>{test}</h1>
      <button type="button" onClick={() => setTest((p) => p + 1)}>43545455454</button>
      <div className={classNames(cls.items)}>
        {SidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            key={item.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'
