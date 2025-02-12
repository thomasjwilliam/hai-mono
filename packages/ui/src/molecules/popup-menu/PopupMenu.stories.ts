import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import PopupMenu from './PopupMenu.vue';

const meta: Meta<typeof PopupMenu> = {
  title: 'Molecules/PopupMenu',
  component: PopupMenu,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // args behaviour
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      description: 'Menu button color',
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
    items: {
      description: 'An array of menu items. Each item should follow the MenuItem interface.',
      control: 'object',
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
  },
  // default arg values
  args: {
    color: 'primary',
    disabled: false,
    items: [
      { label: 'Item 1', icon: 'pi pi-pencil', onClick: () => alert('Clicked Item 1') },
      { label: 'Item 2', icon: 'pi pi-trash', onClick: () => alert('Clicked Item 2') },
      { label: 'Item 3', icon: 'pi pi-plus' }, // No onClick handler for this
    ],
    size: '',
    style: '',
  },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPopoverMenu: Story = {
  args: {
    color: 'primary',
  },
};
