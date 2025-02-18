import {setup} from "@storybook/vue3"
import type {Preview} from "@storybook/vue3"
import {themes} from '@storybook/theming';
import {PrimeVueConfig, PrimeVueThemeConfig} from '../src'
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
  app.use(router); // Register the router
  app.provide('core', clientCore);
  app.use(PrimeVueConfig, {
    theme: PrimeVueThemeConfig
  });
})

export default preview;
