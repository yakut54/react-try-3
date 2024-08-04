import type { FC, SVGProps } from 'react'
import MainIcon from '5_shared/assets/icons/home.svg'
import AboutIcon from '5_shared/assets/icons/about.svg'
import ProfileIcon from '5_shared/assets/icons/chuvak.svg'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: FC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
]
