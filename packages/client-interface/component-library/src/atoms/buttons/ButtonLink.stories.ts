// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
import { fn } from '@storybook/test';
// @ts-ignore
import ButtonLink from './ButtonLink.vue';
import {icons} from "../icon/icons";
import {CoreSemanticColorValues} from "../tokens";

/**
 * Issue: Vue3 Automatic inference argTypes don't work well
 * https://github.com/storybookjs/storybook/issues/23079
 */
export const ActionsData = {
  onClick: fn()
};

const meta: Meta<typeof ButtonLink> = {
  title: 'Atoms/buttons/ButtonLink',
  component: ButtonLink,
  excludeStories: /.*Data$/,
  argTypes: {
    color: {
      control: 'select',
      options: CoreSemanticColorValues,
    },
    icon: {
      control: 'select',
      options: Object.keys(icons)
    },
    text: {
      control: 'text',
    },
  },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ActionsData,
    text: 'a link',
  },
};

export const ReadMoreLink: Story = {
  args: {
    ...ActionsData,
    text: 'read more',
    icon: 'arrow-right-thin'
  },
};
