import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/providers/themeProvider/ui/ThemeProvider'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoyndary'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
