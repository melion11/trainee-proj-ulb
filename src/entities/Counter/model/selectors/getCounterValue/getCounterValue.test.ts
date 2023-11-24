import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/Store';
import {getCounterValue} from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counterValue', ()=> {

        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 0
            }
        }

        expect(getCounterValue(state as StateSchema)).toEqual(0)
    })
})