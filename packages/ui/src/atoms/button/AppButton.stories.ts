import type { Meta, StoryObj } from '@storybook/vue3';
// @ts-ignore
import AppButton from './AppButton.vue';

const meta = {
    title: 'Atoms/AppButton',
    component: AppButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        label: {
            description: 'Button text',
            control: 'text',
        },
        color: {
            description: 'Button color',
            control: 'select',
            options: [
                'primary',
                'secondary',
                'help',
                'info',
                'success',
                'warn',
                'danger'
            ]
        },
        size: {
            description: 'Button size',
            control: 'select',
            options: [
                'small',
                'large',
            ]
        },
    },
    args: {
    }, // default value
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'primary',
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        label: 'Button',
    },
};
