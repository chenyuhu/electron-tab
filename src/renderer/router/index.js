import Vue from 'vue'
import Router from 'vue-router'
// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lang',
      component: () => import('../components/win.vue'),
      children: [
        ...RouterTabRoutes,
        {
          path: 'lang',
          name: 'lang',
          component: () => import('../components/LandingPage.vue'),
          meta: {
            title: '主页面'
          }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../components/LandingPage/SystemInformation.vue'),
          meta: {
            title: 'about'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
