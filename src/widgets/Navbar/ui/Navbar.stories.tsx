import type { Meta, StoryObj } from '@storybook/react';

import {Navbar} from './Navbar';
import {withRouter} from 'storybook-addon-react-router-v6';



const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

