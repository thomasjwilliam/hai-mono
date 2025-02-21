import { createApp } from 'vue';
import {ClientCore} from "@hai/client-app";

import {
  PrimeVueConfig,
  // PrimeVueThemeConfig,
  PrimeVueThemeAura
} from '@hai/component-library';
import './assets/styles/app.css'

import router from './router';
import App from './app/App.vue';

const clientCore = new ClientCore();

const app = createApp(App);
app.use(router);
app.provide('core', clientCore);
app.use(PrimeVueConfig, {
  theme: PrimeVueThemeAura,
});

app.mount('#root');
