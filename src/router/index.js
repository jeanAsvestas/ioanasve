import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssetsComponent from '../components/assetscomponents/AssetsComponent.vue'
import AddAsset from '../components/assetscomponents/AddAsset.vue'
import UpdateAsset from '../components/assetscomponents/UpdateAsset.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/assets',
    name: 'assets',
    component: AssetsComponent
  },
  {
    path: '/assets/:id',
    name: 'updateAsset',
    component: UpdateAsset
  },
  {
    path: '/assets/new',
    name: 'AddAsset',
    component: AddAsset
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
