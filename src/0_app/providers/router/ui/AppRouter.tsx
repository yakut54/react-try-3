import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from '5_shared/config/routeConfig/routeConfig'
import { RequireAuth } from '0_app/providers/router/ui/RequireAuth'

export const AppRouter = memo(() => {
  //
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const $element: JSX.Element = (
      <Suspense fallback="">
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? <RequireAuth>{$element}</RequireAuth>
            : $element
        }
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
})

AppRouter.displayName = 'AppRouter'
