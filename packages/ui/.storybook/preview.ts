import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import { setup } from "@storybook/vue3"
import Aura from '@primevue/themes/aura';

setup((app) => {
    app.use(PrimeVue, {theme: {
            preset: Aura
        }});
    app.component('InputText', InputText)
})