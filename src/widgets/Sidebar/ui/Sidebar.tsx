import { FC, useState } from 'react'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed((prev) => !prev)
  const { t } = useTranslation()

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
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
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classNames(cls.items)}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span
            className={cls.link}
          >
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink
          className={cls.item}
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span
            className={cls.link}
          >
            {t('О сайте')}
          </span>
        </AppLink>

      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  )
}
