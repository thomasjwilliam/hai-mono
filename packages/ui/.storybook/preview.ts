import { setup } from "@storybook/vue3"
import { themes } from '@storybook/theming';
import PrimeVue from 'primevue/config'
import customThemePreset from '../src/styles/primevue';
import '../src/styles/app.css'

const preview = {
  parameters: {
    darkMode: {
      dark: {
        ...themes.dark,
        appBg: 'black',
        appPreviewBg: 'black',
      },
      darkClass: 'dark',
      stylePreview: true
    }
  }
}
// export const parameters = {
//   darkMode: {
//     dark: {
//       ...themes.dark,
//       appBg: 'black',
//       appPreviewBg: 'black',
//     },
//     darkClass: 'dark',
//     stylePreview: true
//   }
// };

setup((app) => {
    app.use(PrimeVue, {
      theme: customThemePreset,
    });
})

export default preview;
