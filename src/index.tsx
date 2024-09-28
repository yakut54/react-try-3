import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from '0_app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '0_app/providers/ThemeProvider'
import { ErrorBoundary } from '0_app/providers/ErrorBoundary'
import { StoreProvider } from '0_app/providers/StoreProvider'
import '5_shared/config/i18n/i18n'
import '0_app/styles/index.scss'

render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)
