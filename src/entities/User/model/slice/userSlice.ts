import {createSlice} from '@reduxjs/toolkit';
import {UserSchema} from '../types/userSchema';


const initialState: UserSchema = {
    authData: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export const {actions: userActions} = slice
export const {reducer: userReducer} = slice