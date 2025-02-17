// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
import { fn } from '@storybook/test';
// @ts-ignore
import List from './List.vue';

/**
 * Issue: Vue3 Automatic inference argTypes don't work well
 * https://github.com/storybookjs/storybook/issues/23079
 */
export const ActionsData = {
  onClickItem: fn(),
};

const meta: Meta<typeof List> = {
  title: 'Organisms/List',
  component: List,
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
    icon: undefined,
    items: [],
    title: 'List Title'
  },
  argTypes: {}
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: undefined,
    items: [{
      title: "Item 1"
    },{
      title: "Item 2"
    },{
      title: "Item 3"
    }],
    title: 'Item List'
  },
};

export const WithIcons: Story = {
  args: {
    icon: {
      name: "format-list-bulleted"
    },
    items: [{
      icon: {
        name: "circle-medium"
      },
      title: "Item 1"
    },{
      icon: {
        name: "circle-medium"
      },
      title: "Item 2"
    },{
      icon: {
        name: "circle-medium"
      },
      title: "Item 3"
    }],
    title: 'Item List'
  },
};

export const ClickableItems: Story = {
  args: {
    items: [{
      id: "1",
      title: "Item 1"
    },{
      id: "2",
      title: "Item 2"
    },{
      id: "3",
      title: "Item 3"
    }],
    title: 'Item List'
  },
};
