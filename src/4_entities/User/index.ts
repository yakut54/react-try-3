export { userActions, userReducer } from './model/slice/userSlice'
export type { User, UserSchema } from './model/types/userSchema'

// сегодня 02.07.2024 ура! || Выяснил 07.07.2024 ура! ура! ура!
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
// Сегодня 12.08.2024 скоро осень
export { getUserAuthInited } from './model/selectors/getUserAuthInited/getUserAuthInited'
