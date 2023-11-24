import {getCounter} from './getCounter';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/Store';

describe('getCounter', () => {
    test('should return counter value', ()=> {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 0}
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 0})
    })
})

