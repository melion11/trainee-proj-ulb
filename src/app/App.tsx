import {classNames} from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import {Navbar, Sidebar} from 'widgets';
import {Suspense, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';
import {d} from '@pmmmwh/react-refresh-webpack-plugin/types/options';


const App = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(userActions.initAuthData())
    }, [dispatch])


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