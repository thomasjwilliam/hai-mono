import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import FileUpload from './FileUpload.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const meta = {
    title: 'Molecules/FileUpload',
    component: FileUpload,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        accept: { control: 'select', options: ['application/json', 'application/csv'] },
    },
    args: { primary: false }, // default value
} satisfies Meta<typeof FileUpload>;

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
