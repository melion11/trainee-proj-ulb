import React from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {MainPageLazy} from 'pages/MainPage';
import {AboutPageLazy} from 'pages/AboutPage';




const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Set Theme</button>

            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;