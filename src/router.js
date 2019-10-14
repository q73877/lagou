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

const router = new Router({
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
      // 公司详情页面
      path: '/film/:id',
      component: () => import('./views/film/index.vue')
    },
    {
      // 个人简历页面
      path: '/resume',
      component: () => import('./views/resume/index.vue'),
      meta: {
        needLogin: true
      }
    },
    {
      // 个人中心里的跳转
      path: '/editor',
      component: () => import('./views/editor/index.vue'),
      children: [
        {
          path: 'position',
          component: () => import('./views/editor/first.vue')
        },
        {
          path: 'salary',
          component: () => import('./views/editor/salary.vue')
        }

      ]
    },
    {
      // 用户详情页面
      path: '/user',
      component: () => import('./views/mine/index.vue'),
      children: [
        {
          // 收藏页面
          path: 'collection',
          component: () => import('./views/mine/collection.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          // 投递页面
          path: 'delivery',
          component: () => import('./views/mine/delivery.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          // 面试页面
          path: 'interview',
          component: () => import('./views/mine/interview.vue'),
          meta: {
            needLogin: true
          }
        }
      ]
    }
  ]
})

// 实现登录拦截
// 全局守卫
router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('userInfo')

  // console.log(to)
  // console.log(from)

  if (to.meta.needLogin && !userInfo) {
    // 要去登录
    // next('/login')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router