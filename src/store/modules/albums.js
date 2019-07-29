import axios from 'axios'

const state = {
  albums: [],
  limit: 9
}

const getters = {
  allAlbums: state => state.albums,
}

const actions = {
  async fetchAlbums({commit, state}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${state.limit}`);
    commit('SET_ALBUMS', response.data);
  },
  loadMore({commit, state, dispatch}) {
    commit('SET_LIMIT', state.limit + 9);
    setTimeout(() => dispatch('fetchAlbums'), 500);
  }
}

const mutations = {
  SET_ALBUMS: (state, albums) => (state.albums = albums),
  SET_LIMIT: (state, limit) => (state.limit = limit)
}

export default {
  state,
  getters,
  actions,
  mutations
}