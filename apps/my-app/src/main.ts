import 'primeicons/primeicons.css'
import './assets/styles/app.css'
import '@tuskdesign/ui/styles';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import router from './router';
import App from './app/App.vue';
import {theme2} from './plugins/primevue';

const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
  theme: theme2, // styled
  // theme: 'none', // unstyled hybrid
  // unstyled: true, // unstyled pure
});

app.mount('#root');
