import { createRouter, createWebHistory } from 'vue-router'
import {
  ComposerPage,
  DashboardPage,
  HomePage,
  TestPage
} from '@hai/component-library'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/composer/:id',
      name: 'composer-new',
      component: ComposerPage
    },
    {
      path: '/composer',
      name: 'composer',
      component: ComposerPage
    },
    // {
    //   path: '/composer',
    //   name: 'composer',
    //   component: ComposerPage,
    //   children: [
    //     {
    //       path: '',
    //       name: 'composer-view',
    //       component: ComposerBody
    //     }
    //   ]
    // },
    {
      path: '/test',
      name: 'test',
      component: TestPage
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
