import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets';
import {componentRenderOptions} from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRenderOptions(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRenderOptions(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
