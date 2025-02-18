import { createApp } from 'vue';
import {ClientCore} from "@hai/client-app";
import {PrimeVueConfig} from '@hai/ui';
import {PrimeVueThemeConfig} from '@hai/ui';
import './assets/styles/app.css'
import router from './router';
import App from './app/App.vue';

const clientCore = new ClientCore();

const app = createApp(App);
app.use(router);
app.provide('core', clientCore);
app.use(PrimeVueConfig, {
  theme: PrimeVueThemeConfig,
});

app.mount('#root');
