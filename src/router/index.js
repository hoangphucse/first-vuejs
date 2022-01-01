import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Products from '../components/Products.vue'
import Error from '../components/Error.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about ', component: About },
  { path: '/:patchMatch(.*)*', component: Error }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
