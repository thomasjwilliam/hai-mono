// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import TestPage from './TestPage.vue';

const meta: Meta<typeof TestPage> = {
  title: 'Pages/TestPage',
  component: TestPage,
  tags: ['!autodocs'],
  args: {},
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
