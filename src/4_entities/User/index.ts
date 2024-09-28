export { userActions, userReducer } from '4_entities/User/model/slices/userSlice'
export type { User, UserSchema } from './model/types/userSchema'

// сегодня 02.07.2024 ура! || Выяснил 07.07.2024 ура! ура! ура!
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
// Сегодня 12.08.2024 скоро осень
export { getUserAuthInited } from './model/selectors/getUserAuthInited/getUserAuthInited'
