import type { Meta, StoryObj } from '@storybook/react';

import {PageError} from './PageError';
import {withRouter} from 'storybook-addon-react-router-v6';


const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

