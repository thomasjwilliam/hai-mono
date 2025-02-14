// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import DocumentList from './DocumentList.vue';
import {FakeDocumentBrowserState} from "./DocumentBrowser.state";
import * as DocumentListItemStories from './DocumentListItem.stories';

const meta: Meta<typeof DocumentList> = {
  title: 'Organisms/DocumentList',
  component: DocumentList,
  tags: ['autodocs'],
  args: {
    ...DocumentListItemStories.ActionsData,
    documents: FakeDocumentBrowserState.documents,
    loading: false
  },
  argTypes: {
  }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    documents: FakeDocumentBrowserState.documents,
    loading: false
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Loading: Story = {
  args: {
    documents: [],
    loading: true
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false
  },
  parameters: {
    layout: 'fullscreen',
  },
};
