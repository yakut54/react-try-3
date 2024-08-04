import { App } from '0_app/App'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '0_app/providers/ThemeProvider'
import { ErrorBoundary } from '0_app/providers/ErrorBoundary'
import { StoreProvider } from '0_app/providers/StoreProvider'
import '5_shared/config/i18n/i18n'
import '0_app/styles/index.scss'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
