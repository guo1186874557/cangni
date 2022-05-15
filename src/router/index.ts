import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/Index.vue'
import Home from '../views/home/Index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home }
      ]
    }
  ]
})

export default router
