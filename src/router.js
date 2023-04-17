import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/demo-1',
    name: 'demo-1',
    meta: {
      title: 'demo-1'
    },
    component: () => import('@/views/demo-1.vue')
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      redirect: constantRoutes[0].path,
      name: 'layout',
      component: () => import('@/layouts/index.vue'),
      children: constantRoutes
    }
  ]
})
