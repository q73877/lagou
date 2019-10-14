import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    filmList: [], // 列表
    haslogin: '',
    search: []
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
      state.search = payload
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
          pageNum: 1,
          pageSize: 10
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
      // commit('setIslogin', window.localStorage.getItem('userInfo'))
      commit('setIslogin', payload)
      // console.log('aaa')

    },
    getSearch({ commit, state }, payload) {
      Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })

      axios.get('http://localhost:3000/posts', {
        params: {
          title_like: payload,
          // job_like: payload
        }
      }).then(response => {
        if (payload != '') {
          commit('searchList', response.data)
          console.log(response.data)
          // console.log('aa')

        } else {
          // console.log('bbb')
          commit('searchList', [])
        }
        Toast.clear()


      })
    }
  }
}