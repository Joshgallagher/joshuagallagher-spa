import * as api from '../api'

export const getArticle = ({ commit }, slug) => {
  return api.getArticleBySlug(slug).then(response => {
    commit('setArticle', response.data.data)
  })
}

export const getArticles = ({ commit }) => {
  return api.getArticles().then(response => {
    commit('setArticles', response.data.data)
    commit('setArticlesMeta', response.data.meta)
  })
}

export const loadMoreArticles = ({ commit }, meta) => {
  if (meta.pagination.links.next) {
    return api.loadArticles(meta.pagination.links.next).then(response => {
      commit('appendArticles', response.data.data)
      commit('setArticlesMeta', response.data.meta)
    })
  }
}
