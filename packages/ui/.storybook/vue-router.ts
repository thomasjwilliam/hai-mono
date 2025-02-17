import { createRouter, createMemoryHistory} from 'vue-router';
import {
  ComposerPage,
  DashboardPage,
  HomePage,
  TestPage
} from '../src';

/**
 * Note: these routes actually do not work
 */
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/composer',
      name: 'composer',
      component: ComposerPage
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage
    }
  ]
})

export default router
