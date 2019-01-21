import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'recordsList',
          component: () => import('@/views/List/index')
        },
        {
          path: 'recordContent',
          name: 'recordContent',
          component: () => import('@/views/RecordContent/index')
        },
        {
          path: 'otherContent',
          name: 'otherContent',
          component: () => import('@/views/OtherContent/index')
        }
      ]
    }
  ]
})
