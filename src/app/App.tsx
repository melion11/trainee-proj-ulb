import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import {Navbar, Sidebar} from 'widgets';
import {Suspense} from 'react';
import {Counter} from 'entities/Counter';


const App = () => {

    const {theme} = useTheme()



    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <Counter/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;