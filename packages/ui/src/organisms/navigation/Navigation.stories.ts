// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import Navigation from './Navigation.vue';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof meta>;

export const HomeNav: Story = {
  args: {
    items: [{
      text: 'Home'
    }]
  },
};

export const DashboardNav: Story = {
  args: {
    items: [{
      text: 'Home'
    }, {
      text: 'New'
    }]
  },
};
