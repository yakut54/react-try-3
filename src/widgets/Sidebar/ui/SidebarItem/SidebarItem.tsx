import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/sidebarItemType'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    isCollapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props
  const { t } = useTranslation()
  const translationKey = `${item.text}`

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed }, [])}
      theme={AppLinkTheme.INVERTED}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span
        className={cls.link}
      >
        {t(translationKey)}
      </span>
    </AppLink>
  )
})

SidebarItem.displayName = 'SidebarItem'
