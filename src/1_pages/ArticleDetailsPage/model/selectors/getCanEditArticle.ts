import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '4_entities/User'
import { getArticleDetailsData } from '4_entities/Article'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, userData) => {
    if (!article || !userData) {
      return false
    }

    return article.user.id === userData.id
  },
)
