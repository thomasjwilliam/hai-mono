// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import PopupMenu from './PopupMenu.vue';

const meta: Meta<typeof PopupMenu> = {
  title: 'Molecules/PopupMenu',
  component: PopupMenu,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    disabled: false,
    icon: 'dots-vertical',
    items: [
      { label: 'Item 1', icon: 'pi pi-pencil', onClick: () => alert('Clicked Item 1') },
      { label: 'Item 2', icon: 'pi pi-trash', onClick: () => alert('Clicked Item 2') },
      { label: 'Item 3', icon: 'pi pi-plus' }, // No onClick handler for this
    ],
    size: '',
    variant: '',
  },
  argTypes: {
    color: {
      description: 'Menu button color',
      control: 'select',
      options: [
        'primary',
        'success',
        'secondary',
        'danger',
        'warn'
      ]
    },
    disabled: {
      description: 'whether the button is disabled',
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: [
        'dots-vertical',
        'home'
      ]
    },
    items: {
      description: 'An array of menu items. Each item should follow the MenuItem interface.',
      control: 'object',
    },
    size: {
      description: 'Button size',
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
        'text'
      ]
    },
  }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPopoverMenu: Story = {
  args: {
    color: 'primary',
  },
};
