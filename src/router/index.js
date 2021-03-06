import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import New from '@/components/New'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/story/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/new',
      name: 'New',
      component: New
    }
  ]
})
