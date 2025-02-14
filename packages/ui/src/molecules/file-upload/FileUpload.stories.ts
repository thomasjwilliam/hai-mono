// noinspection JSUnusedGlobalSymbols

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import FileUpload from './FileUpload.vue';

const meta: Meta<typeof FileUpload> = {
  title: 'Molecules/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  args: {
    primary: false
  },
  argTypes: {
    accept: {
      control: 'select',
      options: [
        'csv',
        'json'
      ]
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const JsonFileUpload: Story = {
  args: {
    accept: 'json',
    onUpload: (e: any) => {
      console.log(e)
    }
  },
};

export const CsvFileUpload: Story = {
  args: {
    accept: 'csv',
    onUpload: (e: any) => {
      console.log(e)
    }
  },
};
