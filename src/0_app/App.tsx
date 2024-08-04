import { Suspense, useEffect } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTheme } from '0_app/providers/ThemeProvider'
import { AppRouter } from '0_app/providers/router'
import { Sidebar } from '2_widgets/Sidebar'
import { Navbar } from '2_widgets/Navbar'
import { useDispatch } from 'react-redux'
import { userActions } from '4_entities/User'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<AppLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
