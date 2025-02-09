import 'primeicons/primeicons.css'
import './styles.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext'
import Aura from '@primevue/themes/aura';
import router from './router';
import App from './app/App.vue';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.component('InputText', InputText)
app.mount('#root');
