import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import First from './views/home/first.vue'
import Mine from './views/home/mine.vue'
import Search from './views/home/search.vue'

import Collection from './views/collection/index.vue'
import Login from './views/login/login.vue'
import Regiter from './views/regiter/index.vue'
import Delivery from './views/delivery/index.vue'
import Interview from './views/interview/index.vue'
import FilmInfo from './views/film/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'first',
          component: First
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: '',
          redirect: '/first'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regiter',
      component: Regiter
    },
    {
      path: '/collection',
      component: Collection
    },
    {
      path: '/delivery',
      component: Delivery
    },
    {
      path: '/interview',
      component: Interview
    },
    {
      path: '/film/:id',
      component: FilmInfo
    }
  ]
})
