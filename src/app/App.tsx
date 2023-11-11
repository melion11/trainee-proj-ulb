import React from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {MainPageLazy} from 'pages/MainPage';
import {AboutPageLazy} from 'pages/AboutPage';
import AppRouter from './providers/router/ui/AppRouter';
import {Navbar} from 'widgets/Navbar';


const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Set Theme</button>
        </div>
    );
};

export default App;