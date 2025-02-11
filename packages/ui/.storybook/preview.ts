import { setup } from "@storybook/vue3"
import { themes } from '@storybook/theming';
import PrimeVue from 'primevue/config'
import customThemePreset from '../src/styles/primevue';
import '../src/styles/app.css'

export const parameters = {
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: 'black',
      appPreviewBg: 'black',
    },
    darkClass: 'dark',
    stylePreview: true
  }
};

setup((app) => {
    app.use(PrimeVue, {
      // theme: 'none',
      // theme: theme,
      theme: customThemePreset,
    });
})
