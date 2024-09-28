import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '5_shared/const/localStorage'

export const $api = axios.create({
  baseURL: __API__,
})

$api.interceptors.request.use((config) => {
  const newConfig = config
  if (newConfig.headers) {
    newConfig.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
  }
  return newConfig
})
