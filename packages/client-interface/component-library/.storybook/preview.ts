import {setup} from "@storybook/vue3"
import type {Preview} from "@storybook/vue3"
import {themes} from '@storybook/theming';

// App theming
import {
  PrimeVueConfig,
  // PrimeVueThemeConfig,
  PrimeVueThemeAura
} from '../src'
// import 'primeicons/primeicons.css'
// import '../src/assets/styles/style.css'

import router from './vue-router'
import {ClientCore} from '@hai/client-app'

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

const clientCore = new ClientCore();

setup((app) => {
  app.use(router);
  app.provide('core', clientCore);
  app.use(PrimeVueConfig, {
    theme: PrimeVueThemeAura
  });
})

export default preview;
