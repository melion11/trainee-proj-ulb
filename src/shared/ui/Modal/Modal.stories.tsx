import type { Meta, StoryObj } from '@storybook/react';

import {Modal} from './Modal';


const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpen: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem 
        deserunt dolore ea eaque eum fugiat iusto laudantium necessitatibus numquam officia officiis
        perspiciatis provident quae soluta, voluptatibus.`,
        isOpen: true
    },
};

