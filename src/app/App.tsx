import {classNames} from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import {Navbar, Sidebar} from 'widgets';
import {Suspense} from 'react';


const App = () => {

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={''}>
                <Navbar/>
                {/*<Counter/>*/}
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;