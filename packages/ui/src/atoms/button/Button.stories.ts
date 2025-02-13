// noinspection HtmlUnknownAttribute

import type {Meta, StoryObj} from '@storybook/vue3';
// @ts-ignore
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // automatically generate docsPage
  // https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  // args behaviour
  // https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      description: 'Button color',
      control: 'select',
      options: [
        'text',
        'primary',
        'success',
        'secondary',
        'error',
        'warn'
      ]
    },
    disabled: {
      description: 'whether the button is disabled',
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    iconPosition: {
      control: 'select',
      options: [
        'left',
        'right',
      ]
    },
    size: {
      description: 'Button size',
      control: 'select',
      options: [
        'small',
        'large',
      ]
    },
    style: {
      description: 'Button style',
      control: 'select',
      options: [
        'outlined',
        'text',
        'link',
      ]
    },
    text: {
      description: 'Button text',
      control: 'text',
    },
  },
  // default arg values
  args: {
    color: 'primary',
    disabled: false,
    icon: '',
    iconPosition: '',
    size: '',
    style: '',
    text: 'Button'
  },
}
export default meta;

type Story = StoryObj<typeof meta>;

// export const ButtonGallery: Story = {
//   render: () => ({
//     components: { Button },
//     setup() {
//       const colors = ["text", "primary", "success", "secondary", "error", "warn"];
//       const sizes = ["small", "large"];
//       const styles = ["outlined", "text", "link"];
//       return { colors, sizes, styles };
//     },
//     template: `
//       <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
//         <div v-for="color in colors" :key="'color-' + color" style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
//           <div v-for="size in sizes" :key="'size-' + size" style="margin-bottom: 1rem;">
//             <div v-for="style in styles" :key="'color-' + color + '-size-' + size + '-style-' + style">
//               <Button :color="color" :size="size" :style="style" :text="color + '-' + size + '-' + style" />
//             </div>
//           </div>
//         </div>
//       </div>
//     `,
//   }),
//   parameters: {
//     docs: {
//       description: {
//         story: "Gallery of all Button variations (by color, size, and style).",
//       },
//     },
//   },
// };

export const Primary: Story = {
  args: {
    color: 'primary',
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    text: 'Button',
  },
};
