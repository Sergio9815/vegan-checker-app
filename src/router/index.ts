import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'
import Scan from '@/views/Scan.vue'
import Tabs from '@/components/tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: 'views/home',
        component: Home
      },
      {
        path: 'views/scan',
        component: Scan
      },
      {
        path: 'views/settings',
        component: Settings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
