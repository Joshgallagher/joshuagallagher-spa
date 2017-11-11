import axios from 'axios'

export const getArticleBySlug = (slug) => {
  return axios.get(`${process.env.API_URL}/articles/${slug}`)
}

export const getArticles = (page) => {
  return axios.get(`${process.env.API_URL}/articles?page=${page}`)
}

export const loadArticles = (url) => {
  return axios.get(url)
}
