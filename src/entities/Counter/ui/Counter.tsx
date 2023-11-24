import {useDispatch, useSelector} from 'react-redux';
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue';
import {counterActions} from 'entities/Counter/model/slice/counterSlice';

export const Counter = () => {

    const value = useSelector(getCounterValue)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(counterActions.incrementValue())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrementValue())
    }


    return (
        <div>
            <h1 data-testid={'value-title'}>{value}</h1>
            <button data-testid={'inc-btn'} onClick={incrementHandler}>INC</button>
            <button data-testid={'dec-btn'} onClick={decrementHandler}>DEC</button>
        </div>
    );
};