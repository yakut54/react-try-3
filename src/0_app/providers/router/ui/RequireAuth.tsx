import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { RoutePath } from '5_shared/config/routeConfig/routeConfig'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from '4_entities/User'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector(getUserAuthData)
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}
