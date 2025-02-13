import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import {primeVueTheme} from '@tuskdesign/ui';
import 'primeicons/primeicons.css'
import './assets/styles/app.css'
import router from './router';
import App from './app/App.vue';

const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
  theme: primeVueTheme,
});

app.mount('#root');
