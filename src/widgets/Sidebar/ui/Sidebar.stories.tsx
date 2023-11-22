import type { Meta, StoryObj } from '@storybook/react';

import {Sidebar} from './Sidebar';
import {withRouter} from 'storybook-addon-react-router-v6';


const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

