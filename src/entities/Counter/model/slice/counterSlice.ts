import {createSlice} from '@reduxjs/toolkit';
import {CounterSchema} from 'entities/Counter';



const initialState: CounterSchema = {
    value: 0,
}


const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.value += 1
        },
        decrementValue: (state) => {
            state.value -= 1
        }
    }
})

export const {actions: counterActions} = slice
export const counterReducer = slice.reducer