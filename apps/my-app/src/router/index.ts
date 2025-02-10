import { createRouter, createWebHistory } from 'vue-router'
// import HomeViewNew from '@tuskdesign/ui-vue-home'
import HomeLayout from '../layout/home/HomeLayout.vue';
import ComposerLayout from '../layout/composer/ComposerLayout.vue';
import ComposerBody from '../views/composer/ComposerBody.vue'
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';
import DesignLayout from '../layout/design/DesignLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout
    },
    {
      path: '/composer',
      name: 'composer',
      component: ComposerLayout,
      children: [
        {
          path: '',
          name: 'composer-view',
          component: ComposerBody
        }
      ]
    },
    {
      path: '/design',
      name: 'design',
      component: DesignLayout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
