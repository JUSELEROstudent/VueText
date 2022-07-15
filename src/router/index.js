import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Login from '@/components/views/Login'
import Landing from '@/components/views/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/landing',
      component: Landing
    }
  ]
})
