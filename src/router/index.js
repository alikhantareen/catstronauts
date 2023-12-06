import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-view.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About-view.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact-view.vue')
  },
  {
    path: "/single_track/:id",
    name: "SingleTrack",
    component: () => import(/* webpackChunkName: "about" */ '../views/Single-Track-view.vue')
  }
]
const router = createRouter({
  history: createWebHistory("/"),
  routes
})
export default router