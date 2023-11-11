import {RouteProps} from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import {MainPageLazy} from 'pages/MainPage';
import {AboutPageLazy} from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    }
}