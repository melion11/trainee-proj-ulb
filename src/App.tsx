import React from 'react';
import {Counter} from './components/Counter';
import './styles/index.scss'
import {Route, Routes} from 'react-router-dom';
import {MainPageLazy} from './pages/MainPage/MainPage.lazy';
import {AboutPageLazy} from './pages/AboutPage/AboutPage.lazy';
import {Suspense} from 'react';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';



const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Set Theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Counter/>}/>
                    <Route path={'/main'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;