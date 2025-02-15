// app style
// This adds app css to the dist/style.css bundle
import './styles/app.css'

// PrimeVue styling
export {default as primeVueTheme} from './styles/primevue'

// Component library
export {default as AppButton} from './atoms/button/Button.vue'
export {default as AppIcon} from './atoms/icon/Icon.vue'
export {default as DashboardPage} from './pages/dashboard/DashboardPage.vue'
export {default as Hero} from './pages/home/Hero.vue'
export {default as HomePage} from './pages/home/HomePage.vue'
export {default as TestPage} from './pages/test/TestPage.vue'
