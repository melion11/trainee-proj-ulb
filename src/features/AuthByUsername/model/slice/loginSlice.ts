import {createSlice} from '@reduxjs/toolkit';
import {LoginSchema} from 'features/AuthByUsername/model/types/LoginSchema';


const initialState: LoginSchema = {
    username: '',
    password: '',
    error: '',
    isLoading: false
}

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    }
})


export const {actions: loginActions} = slice
export const {reducer: loginReducer} = slice