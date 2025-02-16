import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import {primevueThemeConfig} from '@tuskdesign/ui';
// import primeVueTheme from './assets/styles/primevue/primevue';
import 'primeicons/primeicons.css'
import './assets/styles/app.css'
import router from './router';
import App from './app/App.vue';

const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
  // theme: primeVueTheme,
  theme: 'none',
});

app.mount('#root');
