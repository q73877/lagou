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
      children: [
        {
          // 列表页面
          path: 'first',
          component: () => import('./views/home/first.vue')
        },
        {
          // 个人中心页面
          path: 'mine',
          component: () => import('./views/home/mine.vue')
        },
        {
          // 搜索页面
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
      path: '/resume',
      component: () => import('./views/resume/index.vue')
    },
    {
      // 个人中心里的跳转
      path: '/user',
      component: () => import('./views/mine/index.vue'),
      children: [
        {
          // 收藏页面
          path: 'collection',
          component: () => import('./views/mine/collection.vue')
        },
        {
          // 投递页面
          path: 'delivery',
          component: () => import('./views/mine/delivery.vue')
        },
        {
          // 面试页面
          path: 'interview',
          component: () => import('./views/mine/interview.vue')
        }
      ]
    },
    {
      // 职位编辑定制页面
      path: '/editor',
      component: () => import('./views/editor/index.vue')
    }
  ]
})
