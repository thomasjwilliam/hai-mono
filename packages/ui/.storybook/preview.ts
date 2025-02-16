import {setup} from "@storybook/vue3"
import {themes} from '@storybook/theming';
import PrimeVue from 'primevue/config'
import primevueThemeConfig from '../src/styles/primevue/theme-config';
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
    },
    layout: 'fullscreen'
  }
}

setup((app) => {
  app.use(PrimeVue, {
    theme: primevueThemeConfig
  });
})

export default preview;
