import * as api from '../api'

export const getPosts = ({ commit }) => {
  return api.get().then(response => {
    commit('setPosts', response.data.data)
  })
}
