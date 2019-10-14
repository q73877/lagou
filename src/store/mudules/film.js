import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmList: [], // 列表
    haslogin: ''
  },
  getters(state) {
    let res = []
    state.filmList.forEach(item => {

    })
  }
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
      axios.get('http://localhost:3000/posts', {
        params: {
          pageNum: 1,
          pageSize: 10
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        console.log(result)
        commit('setFilmList', result)
        commit('searchList', result)
      })
    },
    setlogin({ commit, state }, payload) {
      // commit('setIslogin', window.localStorage.getItem('userInfo'))
      commit('setIslogin', payload)
      // console.log('aaa')

    }
  }
}