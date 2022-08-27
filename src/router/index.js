import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/views/Home'
import Login from '@/components/views/Login'
import Home from '@/components/views/Landing'
import Store from '@/components/views/StoreTest'
import Userlogin from '@/components/views/Userlogin'
import Profile from '@//components/views/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Userlogin
    },
    {
      path: '/homeopcional',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/landing',
      component: Landing
    },
    {
      path: '/store',
      component: Store
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
