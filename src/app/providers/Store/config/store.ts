import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/Store/config/stateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer

    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
