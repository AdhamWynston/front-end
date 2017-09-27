import Vue from 'vue'

export default{
  state: {
    postList: []
  },
  mutations: {
    updatePostList (state, data) {
      state.postList = data
    }
  },
  actions: {
    getPosts (context) {
      Vue.http.get('api/post').then(response => {
        context.commit('updatePostList', response.data)
      })
    }
  }
}
