import type {Meta, StoryObj} from '@storybook/react';
import {Textfield} from './Textfield';


const meta = {
    title: 'shared/Textfield',
    component: Textfield,
    tags: ['autodocs'],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextfieldPrime: Story = {
    args: {
    },
};

export const TextfieldWithLabel: Story = {
    args: {
        label: 'Textfield: '
    },
};
