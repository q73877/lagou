import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmList: [] // 列表
  },
  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload
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
        // console.log(result)
        commit('setFilmList', result)
      })
    }
  }
}