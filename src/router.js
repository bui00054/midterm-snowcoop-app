import VueRouter from 'vue-router'
import LoginPage from './components/pages/login-page/login-page.component.vue'
import RegisterPage from './components/pages/register-page/register-page.component.vue'
import DashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue'
import ListPage from './components/pages/list-page/list-page.component.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list',
      component: ListPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router