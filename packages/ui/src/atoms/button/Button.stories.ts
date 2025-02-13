import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import Button from './Button.vue';
import { icons } from '../icon/icons';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // default arg values
  args: {
    color: 'primary',
    disabled: false,
    icon: '',
    iconPosition: '',
    size: '',
    style: '',
    text: 'Button'
  },
  // args behaviour
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warn',
        'error',
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
    iconPosition: {
      description: '(WIP) Button icon placement',
      control: 'select',
      options: [
        'left',
        'right',
      ]
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ]
    },
    style: {
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
