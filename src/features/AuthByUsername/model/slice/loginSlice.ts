import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginSchema} from 'features/AuthByUsername/model/types/LoginSchema';
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';


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
        setUsername: (state, action: PayloadAction<{ username: string }>) => {
            state.username = action.payload.username
        },
        setPassword: (state, action: PayloadAction<{ password: string }>) => {
            state.password = action.payload.password
        }
    },
    extraReducers: (builder => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false
            state.username = ''
            state.password = ''
        })
        builder.addCase(loginByUsername.rejected, (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        })
    })
})


export const {actions: loginActions} = slice
export const {reducer: loginReducer} = slice