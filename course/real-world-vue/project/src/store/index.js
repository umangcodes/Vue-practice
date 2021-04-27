import { createStore } from 'vuex'

export default createStore({
  state: {
    user: { id: '0A1', name: 'user1' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
      'community',
    ],
  },
  mutations: {},
  getters: {
    catLength: (state) => {
      return state.categories.length
    },
    housing: (state) => {
      return state.categories.filter(function (cat) {
        return cat == 'housing'
      })
    },
  },
  actions: {},
  modules: {},
})
