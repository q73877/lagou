import axios from 'axios'
import { Toast } from 'vant'
import { stat } from 'fs'

export default {
  namespaced: true,
  state: {
    filmList: [], // 列表页的显示
    haslogin: '',// 登录判断
    filmSearch: [], // 用于搜索的列表
    jobSearch: []
  },
  mutations: {
    // 默认页公司列表
    setFilmList(state, payload) {
      state.filmList = payload
      state.islogin = true
    },
    // 是否登录处理
    setIslogin(state, payload) {
      state.haslogin = payload
    },
    // 搜索列表
    searchList(state, payload) {
      state.filmSearch = payload
    },
    // 职位定制
    setSearch(state, payload) {
      state.jobSearch = payload
    }
  },
  actions: {
    // 列表也连接数据
    getFilmList({ commit, state }, payload) {
      Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })

      axios.get('http://localhost:3000/posts', {
        params: {
          _page: 1,
          _limit: payload || 10
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result)
        commit('setFilmList', result)
        Toast.clear()
      })
    },
    //搜索链接数据
    getSearch({ commit, state }, payload) {
      Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })

      axios.get('http://localhost:3000/posts').then(response => {

        commit('searchList', response.data)
        //console.log(response.data)
        // console.log('aa')


        // console.log('bbb')
        //commit('searchList', [])

        Toast.clear()


      })
    },
    // 登录状态判断
    setlogin({ commit, state }, payload) {
      commit('setIslogin', payload)
      // console.log('aaa')

    },
    setJob({ commit, state }, payload) {
      commit('setSearch', payload)
    }

  }
}