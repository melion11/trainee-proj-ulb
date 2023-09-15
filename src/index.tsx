import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import {createRoot} from 'react-dom/client';




const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
