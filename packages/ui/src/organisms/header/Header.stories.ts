import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import Header from './Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    disabled: false,
    icon: '',
    iconPosition: '',
    size: '',
    style: '',
    text: 'Button'
  },
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
