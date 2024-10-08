import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '4_entities/User'
import MainIcon from '5_shared/assets/icons/home.svg'
import AboutIcon from '5_shared/assets/icons/about.svg'
import ProfileIcon from '5_shared/assets/icons/chuvak.svg'
import ArticlesIcon from '5_shared/assets/icons/articles.svg'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { SidebarItemType } from '../types/sidebarItemType'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemTypes: SidebarItemType[] = [
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
    ]

    if (authData && authData.id) {
      sidebarItemTypes.push(
        {
          path: `${RoutePath.profile}${authData.id}`,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      )
    }

    return sidebarItemTypes
  },
)
