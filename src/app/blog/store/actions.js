import * as api from '../api'

export const getArticles = ({ commit }) => {
  return api.getArticles().then(response => {
    commit('setArticles', response.data)
  })
}
