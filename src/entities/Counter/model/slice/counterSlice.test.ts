import {counterReducer, counterActions} from './counterSlice';
import {CounterSchema} from 'entities/Counter';


describe('counterSlice.test', () => {

    let state: CounterSchema;

    beforeEach(() => {
        state = {
            value: 10
        };
    });

    test('value should be increment', () => {
        expect(counterReducer(state, counterActions.incrementValue())).toEqual({value: 11})
    })

    test('value should be decrement', () => {
        expect(counterReducer(state, counterActions.decrementValue())).toEqual({value: 9})
    })

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrementValue())).toEqual({value: -1})
    })
})