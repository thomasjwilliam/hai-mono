import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import AppInput from './AppInput.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/AppInput',
    component: AppInput,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
    args: { primary: false }, // default value
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {
    args: {
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
// const Template: Story = (args: Props) => ({
//     // Components used in your story `template` are defined in the `components` object
//     components: { AppInput },
//     // The story's `args` need to be mapped into the template through the `setup()` method
//     setup() {
//         return { args };
//     },
//     // And then the `args` are bound to your component with `v-bind="args"`
//     template: '<AppInput v-bind="args" />',
// });

// export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: "Button",
// };

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
