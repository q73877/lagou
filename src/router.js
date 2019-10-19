import Vue from 'vue'
import Router from 'vue-router'
import { Search } from 'vant'


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
          name: 'search',
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
      path: '/city',
      component: () => import('./views/city/index.vue')
    },
    {
      // 公司详情页面
      path: '/film',
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
          //定制页主页
          path: 'position',
          name: 'position',
          component: () => import('./views/editor/first.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          //薪水
          path: 'salary',
          component: () => import('./views/editor/salary.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          //地点
          path: 'city',
          component: () => import('./views/editor/city.vue'),
          meta: {
            needLogin: true
          }
        },

        {
          //规模
          path: 'stages',
          component: () => import('./views/editor/stages.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          //职位
          path: 'job',
          component: () => import('./views/editor/job.vue'),
          meta: {
            needLogin: true
          }
        },
        {
          // 默认 /position
          path: '',
          redirect: 'position'
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