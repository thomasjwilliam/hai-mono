// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import AppInput from './AppInput.vue';

const meta: Meta<typeof AppInput> = {
  title: 'Atoms/AppInput',
  component: AppInput,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // args behaviour
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {control: 'select', options: ['small', 'medium', 'large']},
  },
  args: {primary: false}, // default value
};
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {
  args: {},
};
