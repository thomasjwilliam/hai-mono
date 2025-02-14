// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import StickyGrid from './StickyGrid.vue';

const meta: Meta<typeof StickyGrid> = {
  title: 'Pages/StickyGrid',
  component: StickyGrid,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // default arg values
  args: {},
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof meta>;

export const InitialDashboard: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};
