import type { Meta, StoryObj } from '@storybook/vue3';
// @ts-ignore
import AppButton from './AppButton.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
// export default {
//     title: "Example/App Button",
//     component: AppButton,
//     // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
//     argTypes: {
//         backgroundColor: { control: "color" },
//         onClick: {},
//         size: {
//             control: { type: "select" },
//             options: ["small", "medium", "large"],
//         },
//     },
// };

const meta = {
    title: 'Example/AppButton',
    component: AppButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        backgroundColor: { control: 'color' },
        onClick: { action: 'clicked' },
    },
    args: { primary: false }, // default value
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
// const Template: Story = (args: Props) => ({
//     // Components used in your story `template` are defined in the `components` object
//     components: { AppButton },
//     // The story's `args` need to be mapped into the template through the `setup()` method
//     setup() {
//         return { args };
//     },
//     // And then the `args` are bound to your component with `v-bind="args"`
//     template: '<AppButton v-bind="args" />',
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
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large',
    },
};

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small',
    },
};
