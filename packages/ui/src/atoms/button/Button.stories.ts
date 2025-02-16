// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
import { fn } from '@storybook/test';
// @ts-ignore
import Button from './Button.vue';
import {icons} from "../icon/icons";

/**
 * Issue: Vue3 Automatic inference argTypes don't work well
 * https://github.com/storybookjs/storybook/issues/23079
 */
export const ActionsData = {
  onClick: fn()
};

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
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
    label: {
      control: 'text',
    },
    size: {
      description: "Note, does not work with icon only buttons. See https://github.com/primefaces/primevue/issues/7017",
      control: 'select',
      options: [
        'small',
        'md',
        'large',
      ]
    },
  },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ActionsData,
    label: 'Button',
  },
};
