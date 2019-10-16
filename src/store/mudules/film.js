import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    filmList: [], // 列表
    haslogin: '',
    filmSearch: []
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
    }
  },
  actions: {
    getFilmList({ commit, state }, payload) {
      Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })

      axios.get('http://localhost:3000/posts', {
        params: {
          _page: 1,
          _limit: 10
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result)
        commit('setFilmList', result)
        Toast.clear()
      })
    },
    setlogin({ commit, state }, payload) {
      commit('setIslogin', payload)
      // console.log('aaa')

    },
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
    }
  }
}