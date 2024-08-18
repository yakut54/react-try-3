import { FC, memo, useState } from 'react'
import { Button, ButtonSize, ButtonVariant } from '5_shared/ui/Button/Button'
import { classNames } from '5_shared/lib/classNames/classNames'
import { ThemeSwitcher } from '2_widgets/ThemeSwitcher'
import { LangSwitcher } from '2_widgets/LangSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarItemList } from '../../model/sidebarItemType'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
  const { className } = props

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
