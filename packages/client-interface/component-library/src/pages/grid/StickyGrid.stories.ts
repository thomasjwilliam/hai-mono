// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import StickyGrid from './StickyGrid.vue';

const meta: Meta<typeof StickyGrid> = {
  title: 'Pages/StickyGrid',
  component: StickyGrid,
  tags: ['!autodocs'],
  args: {},
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof meta>;

export const InitialDashboard: Story = {
  args: {},
};
