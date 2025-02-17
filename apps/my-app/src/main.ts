import { createApp } from 'vue';

// import PrimeVue from 'primevue/config';
import {PrimeVueConfig} from '@tuskdesign/ui';
import {PrimeVueThemeConfig} from '@tuskdesign/ui';
// import primeVueTheme from './assets/styles/primevue/primevue';

// import 'primeicons/primeicons.css'

import './assets/styles/app.css'
import router from './router';
import App from './app/App.vue';

const app = createApp(App);
app.use(router);

app.use(PrimeVueConfig, {
  theme: PrimeVueThemeConfig,
  // theme: 'none',
  // theme: {
  //   preset: 'none',
  //   options: {
  //     cssLayer: {
  //       name: 'primeui',
  //       order: 'primeui, theme'
  //     },
  //     darkModeSelector: '.dark',
  //   }
  // },
});

app.mount('#root');
