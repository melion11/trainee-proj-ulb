import {fireEvent, screen} from '@testing-library/react';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';
import {Counter} from './Counter';
import {userEvent} from '@storybook/testing-library';

describe('Counter', () => {
    test('should show initial value', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 11}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('should increment value on toggle increment', async () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        await userEvent.click(screen.getByTestId('inc-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('should decrement value on toggle decrement', async () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        await userEvent.click(screen.getByTestId('dec-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});


