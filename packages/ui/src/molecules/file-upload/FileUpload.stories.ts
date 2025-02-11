import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import FileUpload from './FileUpload.vue';

const meta: Meta<typeof FileUpload> = {
  title: 'Molecules/FileUpload',
  component: FileUpload,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // args behaviour
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    accept: {
      control: 'select',
      options: ['application/json', 'application/csv']
    },
  },
  // default arg values
  args: {primary: false}, // default value
};
export default meta;

type Story = StoryObj<typeof meta>;

export const JsonFileUpload: Story = {
  args: {
    accept: 'application/json',
    onUpload: (e: any) => {
      console.log(e)
    }
  },
};

export const CsvFileUpload: Story = {
  args: {
    accept: 'application/csv',
    onUpload: (e: any) => {
      console.log(e)
    }
  },
};
