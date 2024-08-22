import i18n from 'i18next'
import { AxiosError } from 'axios'
import { getUserAuthData } from '4_entities/User'
import { CommentSchema } from '4_entities/Comment'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '0_app/providers/StoreProvider'
import { getArticleDetailsData } from '4_entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

const addCommentForArticle = createAsyncThunk<
    CommentSchema,
    string,
    ThunkConfig<string>
>(
  'ArticleDetailsPage/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      rejectWithValue,
      extra,
      getState,
      dispatch,
    } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data with ArticleDetailsPage/addCommentForArticle')
    }

    try {
      const response = await extra.api.post<CommentSchema>('/comments', {
        text,
        userId: userData.id,
        articleId: article.id,
      })

      if (!response.data) {
        throw new Error(i18n.t('Что то пошло не так'))
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        const statusCode = (e as AxiosError).response?.status
        if (statusCode === 403) {
          return rejectWithValue(i18n.t('Ошибка аутентификации'))
        }

        return rejectWithValue(`Axios error: ${(e as AxiosError).message}`)
      }

      return rejectWithValue(`Unknown error: ${(e as Error).message}`)
    }
  },
  {},
)

export default addCommentForArticle
