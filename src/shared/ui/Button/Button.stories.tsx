import type { Meta, StoryObj } from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';


const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button'
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Button'
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        fullWidth: false,
        inverted: false,
        children: 'Outline Button'
    },
};

export const Small: Story = {
    args: {
        size: ButtonSize.SMALL,
        fullWidth: false,
        inverted: false,
        children: 'Small Button'
    },
};

export const Medium: Story = {
    args: {
        size: ButtonSize.MEDIUM,
        fullWidth: false,
        inverted: false,
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        size: ButtonSize.LARGE,
        fullWidth: false,
        inverted: false,
        children: 'Large Button'
    },
};

export const FullWidth: Story = {
    args: {
        size: ButtonSize.LARGE,
        fullWidth: true,
        inverted: false,
        children: 'Large Button'
    },
};

export const Inverted: Story = {
    args: {
        size: ButtonSize.LARGE,
        fullWidth: false,
        inverted: true,
        children: 'Large Button'
    },
};