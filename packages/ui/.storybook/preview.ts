import {setup} from "@storybook/vue3"
import type {Preview} from "@storybook/vue3"
import {themes} from '@storybook/theming';
// import PrimeVue from 'primevue/config'
// import primevueThemeConfig from '../src/styles/primevue/theme-config';
import '../src/styles/app.css'

import {PrimeVueConfig, PrimeVueThemeConfig} from '../src'

const preview: Preview = {
  // Enables auto-generated documentation for all stories
  // @see https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
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
  // app.use(PrimeVue, {
  //   theme: primevueThemeConfig
  // });

  app.use(PrimeVueConfig, {
    theme: PrimeVueThemeConfig
  });
})

export default preview;
