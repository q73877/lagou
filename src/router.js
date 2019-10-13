import Vue from 'vue'
import Router from 'vue-router'

/* import Home from './views/home/index.vue'
import First from './views/home/first.vue'
import Mine from './views/home/mine.vue'
import Search from './views/home/search.vue'

import Collection from './views/collection/index.vue'
import Login from './views/login/login.vue'
import Regiter from './views/regiter/index.vue'
import Delivery from './views/delivery/index.vue'
import Interview from './views/interview/index.vue'
import FilmInfo from './views/film/index.vue' */

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认页面
      path: '/',
      // 使用页面懒加载的方式
      component: () => import('./views/home/index.vue'),
      // 职位--搜素--我的
      children: [
        {
          path: 'first',
          component: () => import('./views/home/first.vue')
        },
        {
          path: 'mine',
          component: () => import('./views/home/mine.vue')
        },
        {
          path: 'search',
          component: () => import('./views/home/search.vue')
        },
        {
          path: '',
          redirect: '/first'
        }
      ]
    },
    {
      // 登录页面
      path: '/login',
      component: () => import('./views/login/login.vue')
    },
    {
      // 注册页面
      path: '/regiter',
      component: () => import('./views/regiter/index.vue')
    },
    {
      path: '/film/:id',
      component: () => import('./views/film/index.vue')
    },
    {
      path: '/user',
      component: () => import('./views/mine/index.vue'),
      children: [
        {
          path: '/collection',
          component: () => import('./views/mine/collection.vue')
        },
        {
          path: '/delivery',
          component: () => import('./views/mine/delivery.vue')
        },
        {
          path: '/interview',
          component: () => import('./views/mine/interview.vue')
        }
      ]
    }
  ]
})
