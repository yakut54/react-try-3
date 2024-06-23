import { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'
import { Modal } from 'shared/ui/Modal/Modal'

export const App = () => {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="toggle"
        >
          1233
        </button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen((p) => !p)}
        >
          1234
        </Modal>

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
