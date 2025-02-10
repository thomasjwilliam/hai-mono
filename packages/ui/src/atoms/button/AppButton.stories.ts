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
      color: {
        description: 'Button color',
        control: 'select',
        options: [
          'text',
          'primary',
          'success',
          'secondary',
          'error',
          'warn'
        ]
      },
      disabled: {
        description: 'whether the button is disabled',
        control: 'boolean',
      },
      icon: {
        control: 'text',
      },
      iconPosition: {
        control: 'select',
        options: [
          'left',
          'right',
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
      style: {
        description: 'Button style',
        control: 'select',
        options: [
          'outlined',
          'text',
          'link',
        ]
      },
      text: {
        description: 'Button text',
        control: 'text',
      },
    },
    args: {
    }, // default value
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      color: 'primary',
      text: 'Button',
    },
};

export const Secondary: Story = {
    args: {
      color: 'secondary',
      text: 'Button',
    },
};
