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
      description: 'WIP color adjustment',
      control: 'select',
      options: Object.keys(icons)
    },
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [
        'small',
        'md',
        'large',
      ]
    },
    variant: {
      control: 'select',
      options: [
        '',
        'outlined',
        'text',
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
