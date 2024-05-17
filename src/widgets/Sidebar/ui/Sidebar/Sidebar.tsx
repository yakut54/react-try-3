import { FC, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcer'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <Button onClick={onToggle}>toggle</Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <Suspense fallback="__i18n__">
          <LangSwitcher className={cls.lang}>huj</LangSwitcher>
        </Suspense>
      </div>
    </div>
  )
}
