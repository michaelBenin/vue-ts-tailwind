// https://next.router.vuejs.org/guide/

import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import StyleGuide from '@/views/StyleGuide.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    props: true,
    component: About,
  },
  {
    path: '/styleguide',
    name: 'Style Guide',
    props: true,
    component: StyleGuide,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
