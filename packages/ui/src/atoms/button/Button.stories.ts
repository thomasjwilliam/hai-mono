// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import Button from './Button.vue';
import { icons } from '../icon/icons';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    disabled: false,
    icon: '',
    rounded: false,
    size: '',
    variant: '',
    text: 'Button'
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warn',
        'danger',
        'text'
      ],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      description: '(WIP) Button icon name',
      control: 'select',
      options: Object.keys(icons)
    },
    rounded: {
      control: 'boolean',
    },
    size: {
      description: "Note, does not work with icon only buttons. See https://github.com/primefaces/primevue/issues/7017",
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ]
    },
    variant: {
      description: 'Button variant',
      control: 'select',
      options: [
        'outlined',
        'text',
        'link',
      ]
    },
    text: {
      control: 'text',
    },
  },
}
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
