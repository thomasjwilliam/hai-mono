// This adds app css to the dist/style.css bundle
// import './assets/styles/main.css'

// This adds app css to the dist/style.css bundle
import './styles/app.css'

// PrimeVue config
export {default as primevueThemeConfig} from './styles/primevue/theme-config'

// Component library
export {default as AppButton} from './atoms/button/Button.vue'
export {default as AppIcon} from './atoms/icon/Icon.vue'

export {default as ComposerPage} from './pages/composer/ComposerPage.vue'
export {default as DashboardPage} from './pages/dashboard/DashboardPage.vue'
export {default as HomePage} from './pages/home/HomePage.vue'
export {default as TestPage} from './pages/test/TestPage.vue'
