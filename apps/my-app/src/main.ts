import 'primeicons/primeicons.css'
import './styles.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import router from './router';
import App from './app/App.vue';
import customThemePreset from './plugins/primevue';

const app = createApp(App);
app.use(router);

const MyPreset = definePreset(Aura, {
    components: {
        button: {
            borderRadius: '0'
        }
    }
});

// app.use(PrimeVue, {
//     theme: {
//         preset: MyPreset,
//         options: {
//             darkModeSelector: '.app-dark'
//         }
//     }
// });

app.use(PrimeVue, {
  theme: customThemePreset
});

app.mount('#root');
