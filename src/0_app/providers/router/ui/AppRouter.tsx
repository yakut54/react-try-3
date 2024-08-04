import React, { memo, Suspense, useMemo } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from '5_shared/config/routeConfig/routeConfig'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '4_entities/User'

export const AppRouter = memo(() => {
  const isAuth = !!useAppSelector(getUserAuthData)

  const routes = useMemo(() => Object
    .values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false
      }
      return true
    }), [isAuth])

  return (
    <Routes>
      {
        routes
          .map(({ path, element }: RouteProps) => (
            <Route
              key={path}
              path={path}
              element={(
                <Suspense fallback={<AppLoader />}>
                  <div className="page-wrapper">{element}</div>
                </Suspense>
              )}
            />
          ))
      }
    </Routes>
  )
})

AppRouter.displayName = 'AppRouter'
