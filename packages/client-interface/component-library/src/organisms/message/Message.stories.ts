import type {Meta, StoryObj} from '@storybook/vue3';
import { fn } from '@storybook/test';
// @ts-ignore
import Message from './Message.vue';

/**
 * Issue: Vue3 Automatic inference argTypes don't work well
 * https://github.com/storybookjs/storybook/issues/23079
 */
export const ActionsData = {
  onClick: fn()
};

const meta: Meta<typeof Message> = {
  title: 'Organisms/Message',
  tags: ['autodocs'],
  component: Message,
  parameters: {
    layout: 'centered',
  },
  excludeStories: /.*Data$/,
  argTypes: {
    title: {
      control: 'text',
    },
    closable: {
      control: 'boolean',
    },
    detail: {
      control: 'text',
    },
    icon: {
      description: 'WIP color adjustment',
      control: 'select',
      options: [
        'pi pi-send',
        'user',
        'check',
      ]
    },
    size: {
      control: 'select',
      options: [
        'small',
        '',
        'large',
      ]
    },
    severity: {
      control: 'select',
      options: [
        'info',
        'success',
        'warn',
        'error'
      ],
    },
    variant: {
      control: 'select',
      options: [
        'outlined',
        'simple',
      ]
    },
  },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Info Message'
  }
};