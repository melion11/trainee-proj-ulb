import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import {Suspense} from 'react';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <Suspense fallback={''}>
                    <App/>
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
