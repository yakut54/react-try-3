import { Suspense, useEffect } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTheme } from '0_app/providers/ThemeProvider'
import { AppRouter } from '0_app/providers/router'
import { Sidebar } from '2_widgets/Sidebar'
import { Navbar } from '2_widgets/Navbar'
import { useDispatch } from 'react-redux'
import { getUserAuthInited, userActions } from '4_entities/User'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import { useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const isInited = useAppSelector(getUserAuthInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<AppLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}
