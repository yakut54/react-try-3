import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '5_shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '5_shared/ui/AppLink/AppLink'
import { getUserAuthData } from '4_entities/User'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { SidebarItemType } from '2_widgets/Sidebar/model/types/sidebarItemType'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    isCollapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props
  const { t } = useTranslation()
  const isAuth = !!useAppSelector(getUserAuthData)

  if (item.isShowOnlyAuth && !isAuth) {
    return null
  }

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
        {t(item.text)}
      </span>
    </AppLink>
  )
})

SidebarItem.displayName = 'SidebarItem'
