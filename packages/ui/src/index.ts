import PrimeVue from "primevue/config";

// This adds app css to the dist/style.css bundle
// import './assets/styles/main.css'

// This adds app css to the dist/style.css bundle
import './styles/app.css'

// PrimeVue config
/**
 * Export the config
 * @see https://github.com/orgs/primefaces/discussions/2158#discussioncomment-12015531
 */
export {PrimeVue as PrimeVueConfig}
export {default as PrimeVueThemeConfig} from './styles/primevue/theme-config'

// Component library
export {default as AppButton} from './atoms/button/Button.vue'
export {default as AppIcon} from './atoms/icon/Icon.vue'

export {default as ComposerPage} from './pages/composer/ComposerPage.vue'
export {default as DashboardPage} from './pages/dashboard/DashboardPage.vue'
export {default as HomePage} from './pages/home/HomePage.vue'
export {default as TestPage} from './pages/test/TestPage.vue'
