import {
  FC, memo, useMemo, useState,
} from 'react'
import { Button, ButtonSize, ButtonVariant } from '5_shared/ui/Button/Button'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { LangSwitcher } from '../../../LangSwitcher'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(false)
  const onToggle = () => setIsCollapsed((prev) => !prev)
  const sidebarItemList = useAppSelector(getSidebarItems)

  const sidebarList = useMemo(() => sidebarItemList
    .map((item) => (
      <SidebarItem
        item={item}
        key={item.path}
        isCollapsed={isCollapsed}
      />
    )), [isCollapsed, sidebarItemList])

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
        isSquare
        onClick={onToggle}
        size={ButtonSize.L}
        data-testid="sidebar-toggle"
        theme={ButtonVariant.BACKGROUND_INVERTED}
        className={cls['collapse-btn']}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={classNames(cls.items)}>
        {sidebarList}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'
